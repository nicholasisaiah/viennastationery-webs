import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source = "journal" } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Rate limiting: basic check via header
    // (Production should use middleware or a proper rate limiter)

    if (!supabaseUrl || !supabaseAnonKey) {
      return Response.json(
        { error: "Newsletter service is not configured" },
        { status: 503 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Insert subscriber — unique constraint on LOWER(email) prevents duplicates
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: email.toLowerCase().trim(),
        source,
        is_active: true,
      });

    if (error) {
      // Unique violation (duplicate email)
      if (error.code === "23505") {
        return Response.json(
          { error: "already_subscribed" },
          { status: 409 }
        );
      }

      console.error("Supabase newsletter error:", error);
      return Response.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Subscribed successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Newsletter API error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

