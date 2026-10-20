export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags?: string[];
  excerpt: string;
  image: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const ARTICLES_DATA: Article[] = [
  {
    id: "1",
    slug: "how-to-make-your-study-desk-feel-more-like-you",
    title: "How to Make Your Study Desk Feel More Like You",
    category: "Study & Lifestyle",
    tags: ["#STUDYVIBES", "#DESKTOUR", "#STATIONERYLOVE"],
    excerpt:
      "Your workspace is an extension of your creative mind. We explore the art of intentional desk-scaping with soft textures and functional beauty.",
    // Aesthetic desk setup with notebooks and stationery
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80",
    author: "Vienna Team",
    authorRole: "CREATIVE LEAD",
    date: "Sept 12, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "the-art-of-the-intentional-pause",
    title: "The Art of the Intentional Pause: Our Fall Collection Story",
    category: "Stationery",
    tags: ["#FALLCOLLECTION", "#STATIONERYLOVE"],
    excerpt:
      "Discover the meaning behind our latest textures and how they were designed to slow down your busy day.",
    // Autumn/fall stationery flat lay with warm tones
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    author: "Elowen Sage",
    authorRole: "CREATIVE DIRECTION",
    date: "Sept 08, 2026",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "functional-beauty-minimalist-planning-101",
    title: "Functional Beauty: Minimalist Planning 101",
    category: "Organization",
    tags: ["#ORGANIZATION", "#PLANNING"],
    excerpt:
      "How to keep your schedule clear and your desk uncluttered without sacrificing aesthetic pleasure.",
    // Clean minimalist planner/agenda on desk
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    author: "Julian Reed",
    authorRole: "INTERFACE DESIGN",
    date: "Sept 01, 2026",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "5-prompts-to-clear-your-mind-tonight",
    title: "5 Prompts to Clear Your Mind Tonight",
    category: "Journaling",
    tags: ["#JOURNALING", "#MINDFULNESS"],
    excerpt:
      "Simple reflections to transition from a hectic workday to a peaceful, grounded evening.",
    // Open journal with pen, evening/candlelight vibe
    image:
      "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=800&q=80",
    author: "Maya Chen",
    authorRole: "WEB DEVELOPMENT",
    date: "Aug 28, 2026",
    readTime: "3 min read",
  },
  {
    id: "5",
    slug: "palette-swatching-tips",
    title: "Palette Swatching Tips for Clean Pages",
    category: "Creative",
    tags: ["#CREATIVE", "#COLORPALETTE"],
    excerpt:
      "Curating harmonious color schemes in your journal with ink swatches and soft pastel highlighters.",
    // Watercolor swatches / pastel color palette
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    author: "Vienna Team",
    date: "Aug 20, 2026",
    readTime: "4 min read",
  },
  {
    id: "6",
    slug: "a-cozy-morning-routine-for-focus",
    title: "A Cozy Morning Routine for Focus & Intentional Living",
    category: "Lifestyle",
    tags: ["#LIFESTYLE", "#MORNINGROUTINE"],
    excerpt:
      "Start your day with quiet rituals, warm tea, and five minutes of bullet journaling.",
    // Coffee cup with journal in morning light
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    author: "Elowen Sage",
    date: "Aug 15, 2026",
    readTime: "5 min read",
  },
  {
    id: "7",
    slug: "ring-binder-customization-guide",
    title: "Ring Binder Customization & Sticker Layering",
    category: "Study",
    tags: ["#STUDYVIBES", "#BINDERSETUP"],
    excerpt:
      "Transform plain ring binders into personalized creative archives using cutouts, polaroids, and stickers.",
    // Decorated binder / planner with stickers and washi tape
    image:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&q=80",
    author: "Julian Reed",
    date: "Aug 10, 2026",
    readTime: "4 min read",
  },
  {
    id: "8",
    slug: "the-quiet-joy-of-morning-pages",
    title: "The Quiet Joy of Morning Pages: Unlocking Mental Clarity",
    category: "Journaling",
    tags: ["#JOURNALING", "#MORNINGPAGES"],
    excerpt:
      "Why writing stream-of-consciousness thoughts every morning untangles anxiety and primes your creative flow.",
    // Hand writing in journal, morning light
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    author: "Maya Chen",
    date: "Aug 02, 2026",
    readTime: "5 min read",
  },
  {
    id: "9",
    slug: "curating-your-workspace-color-palette",
    title: "Curating Your Workspace Color Palette",
    category: "Creative",
    tags: ["#DESKTOUR", "#CREATIVE"],
    excerpt:
      "Choosing complementary tones for your desk mats, stationery clips, and storage trays.",
    // Colorful aesthetic desk setup with pastel tones
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    author: "Elowen Sage",
    date: "Jul 25, 2026",
    readTime: "4 min read",
  },
  {
    id: "10",
    slug: "paper-weight-and-ink-bleed-guide",
    title: "Understanding Paper Weight & Fountain Pen Ink Bleed",
    category: "Stationery",
    tags: ["#STATIONERYLOVE", "#PAPERGUIDE"],
    excerpt:
      "GSM ratings explained: how to choose paper that won't bleed when using heavy inks and markers.",
    // Fountain pen writing on paper, close up
    image:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80",
    author: "Vienna Team",
    date: "Jul 18, 2026",
    readTime: "6 min read",
  },
  {
    id: "11",
    slug: "weekly-habit-tracking-that-actually-works",
    title: "Weekly Habit Tracking That Actually Sticks",
    category: "Organization",
    tags: ["#HABITTRACKER", "#ORGANIZATION"],
    excerpt:
      "Simple, low-friction tracker layouts designed to encourage progress rather than perfection.",
    // Bullet journal habit tracker spread
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    author: "Julian Reed",
    date: "Jul 10, 2026",
    readTime: "4 min read",
  },
  {
    id: "12",
    slug: "creating-a-cozy-reading-nook",
    title: "Creating a Cozy Corner for Reading & Reflection",
    category: "Lifestyle",
    tags: ["#COZYVIBES", "#LIFESTYLE"],
    excerpt:
      "Pairing soft lighting, linen cushions, and your favorite notebook for quiet evening retreats.",
    // Cozy reading nook with soft blanket, books, warm light
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    author: "Maya Chen",
    date: "Jul 02, 2026",
    readTime: "5 min read",
  },
];
