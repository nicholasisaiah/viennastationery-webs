import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// GET — health check, confirms env vars & table reachability
export async function GET() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return Response.json(
      { ok: false, error: "Missing Supabase env vars" },
      { status: 503 }
    );
  }
  return Response.json({ ok: true, url: supabaseUrl.slice(0, 40) + "..." });
}

export async function POST(request: Request) {
  try {
    // --- env guard ---
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("[newsletter] Missing Supabase env vars");
      return Response.json(
        { error: "Newsletter service is not configured" },
        { status: 503 }
      );
    }

    // --- parse body ---
    let body: { email?: string; source?: string };
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { email, source = "journal" } = body;

    // --- validate ---
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    const cleanEmail = email.toLowerCase().trim();

    // --- insert ---
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error, data } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: cleanEmail, source, is_active: true })
      .select("id, email, subscribed_at"); // confirm what was inserted

    if (error) {
      // Duplicate email — unique constraint violation
      if (error.code === "23505") {
        return Response.json({ error: "already_subscribed" }, { status: 409 });
      }
      // Log full error for Vercel logs
      console.error("[newsletter] Supabase insert error:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      });
      return Response.json(
        { error: "Failed to subscribe", detail: error.message },
        { status: 500 }
      );
    }

    console.log("[newsletter] New subscriber:", data?.[0]?.email);
    return Response.json(
      { success: true, message: "Subscribed successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
