export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  badge?: "MUST HAVE" | "NEW" | "BEST SELLER";
  category: "NOTEBOOKS" | "PENS & WRITING" | "STICKERS & TAPES" | "DESK ACCESSORIES" | "ORGANIZERS";
  shortDescription: string;
  features: string[];
  shopeeUrl: string;
  dateAdded: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "p1",
    slug: "the-dream-binder",
    name: "The Dream Binder",
    price: 185000,
    // Pastel ring binder / planner organizer
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&q=80",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    ],
    badge: "MUST HAVE",
    category: "ORGANIZERS",
    shortDescription:
      "Pastel 6-ring binder with soft vegan leather finish and gold corner protectors for organizing your daily planner refills.",
    features: [
      "Soft vegan leather with gold hardware",
      "Standard A5 6-ring mechanism",
      "Internal card pockets & pen loop",
      "Includes 4 divider tabs in pastel shades",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-09-01",
  },
  {
    id: "p2",
    slug: "soft-touch-calculator",
    name: "Soft Touch Calculator",
    price: 145000,
    // Aesthetic pastel calculator on desk
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    ],
    badge: "BEST SELLER",
    category: "DESK ACCESSORIES",
    shortDescription:
      "Minimalist aesthetic calculator with silent soft-touch buttons and dual solar & battery power.",
    features: [
      "Tactile soft-touch silicone keys",
      "12-digit wide viewing angle display",
      "Dual solar panel + AAA battery power",
      "Non-slip rubber feet for desk stability",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-08-25",
  },
  {
    id: "p3",
    slug: "linen-spiral-notebook",
    name: "Linen Spiral Notebook",
    price: 95000,
    // Linen hardcover notebook
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
    ],
    badge: "NEW",
    category: "NOTEBOOKS",
    shortDescription:
      "Hardcover spiral notebook wrapped in natural lavender linen cloth with 120gsm fountain pen friendly paper.",
    features: [
      "120gsm bleed-proof cream paper",
      "Durable rose gold twin-ring binding",
      "160 dot-grid pages",
      "Back expandable paper pocket",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-09-10",
  },
  {
    id: "p4",
    slug: "the-palette-set",
    name: "The Palette Swatch Set",
    price: 120000,
    // Washi tape and stickers flat lay
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
    ],
    badge: "BEST SELLER",
    category: "STICKERS & TAPES",
    shortDescription:
      "Curated box set of 5 pastel washi tape rolls and matching color swatch stickers for journal journaling.",
    features: [
      "5 rolls of Japanese washi tape (15mm x 10m)",
      "10 sheets of pre-cut palette stickers",
      "Residue-free easy tear paper",
      "Complimentary matte storage box",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-08-15",
  },
  {
    id: "p5",
    slug: "gel-pen-pastel-trio",
    name: "Pastel Gel Pen Trio",
    price: 65000,
    // Pastel colored pens on notebook
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80",
    ],
    badge: "NEW",
    category: "PENS & WRITING",
    shortDescription:
      "Set of 3 quick-dry gel ink pens (0.5mm) in dusty rose, sage green, and soft lavender barrels.",
    features: [
      "0.5mm fine tip Japanese rollerball ink",
      "Smudge-proof quick dry formula",
      "Ergonomic matte rubber grip",
      "Includes black, navy, and walnut inks",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-09-12",
  },
  {
    id: "p6",
    slug: "acrylic-desk-organizer",
    name: "Acrylic Desk Organizer Tray",
    price: 160000,
    // Clear acrylic desk organizer
    image: "https://images.unsplash.com/photo-1488868935619-ef24c6831f95?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1488868935619-ef24c6831f95?w=600&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    ],
    badge: "MUST HAVE",
    category: "ORGANIZERS",
    shortDescription:
      "Stackable clear acrylic organizer tray for storing clips, sticky notes, and tape rolls.",
    features: [
      "Heavy-duty crystal clear acrylic",
      "3 compartmentalized sections",
      "Stackable modular design",
      "Polished smooth rounded edges",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-07-20",
  },
  {
    id: "p7",
    slug: "vintage-brass-paperclips",
    name: "Vintage Brass Clip Set",
    price: 45000,
    // Gold/brass paperclips close up
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80",
      "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600&q=80",
    ],
    category: "DESK ACCESSORIES",
    shortDescription:
      "Set of 12 solid matte gold paperclips in drop and heart shapes for marking journal pages.",
    features: [
      "Solid brass with anti-rust plating",
      "Includes 6 heart & 6 teardrop clips",
      "Smooth finish prevents paper tears",
      "Re-usable tin storage container",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-06-15",
  },
  {
    id: "p8",
    slug: "floral-memo-pad",
    name: "Botanical Floral Memo Pad",
    price: 38000,
    // Floral/botanical notepad
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80",
    ],
    category: "NOTEBOOKS",
    shortDescription:
      "Non-sticky 80-sheet tear-off memo notepad with delicate watercolor botanical illustrations.",
    features: [
      "80 tear-off sheets",
      "100gsm textured paper",
      "Compact 10x10 cm size",
      "Cardboard backing support",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-07-01",
  },
  {
    id: "p9",
    slug: "aesthetic-washi-tape-set",
    name: "Aesthetic Gradient Washi Set",
    price: 75000,
    // Rolls of colorful washi tape
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    ],
    badge: "NEW",
    category: "STICKERS & TAPES",
    shortDescription:
      "Set of 4 gradient color shifting washi tapes with foil accent stamping.",
    features: [
      "4 rolls (20mm width x 5m length)",
      "Gold foil line details",
      "Removable washi paper material",
      "Ideal for border decoration",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-09-08",
  },
  {
    id: "p10",
    slug: "calligraphy-fountain-pen",
    name: "Vienna Rose Fountain Pen",
    price: 210000,
    // Elegant fountain pen close up
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
    ],
    badge: "MUST HAVE",
    category: "PENS & WRITING",
    shortDescription:
      "Elegant fountain pen featuring a rose gold EF nib, lightweight barrel, and ink converter.",
    features: [
      "German-made Fine (F) stainless steel nib",
      "Includes rotary piston ink converter",
      "Accepts international standard cartridges",
      "Luxury gift box packaging",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-08-30",
  },
  {
    id: "p11",
    slug: "pastel-highlighter-pack",
    name: "Soft Pastel Highlighter Set",
    price: 58000,
    // Pastel highlighters on white background
    image: "https://images.unsplash.com/photo-1587120882483-c081f42a6571?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587120882483-c081f42a6571?w=600&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
    ],
    category: "PENS & WRITING",
    shortDescription:
      "6 mild aesthetic pastel highlighters with dual chisel and fine bullet tips.",
    features: [
      "6 soft non-neon pastel shades",
      "Dual tip: 4mm chisel + 1mm bullet",
      "Water-based non-bleed ink",
      "Flat anti-roll barrel design",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-06-28",
  },
  {
    id: "p12",
    slug: "desktop-book-stand",
    name: "Wooden Desktop Book Stand",
    price: 225000,
    // Wooden book stand / reading stand
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
      "https://images.unsplash.com/photo-1488868935619-ef24c6831f95?w=600&q=80",
    ],
    badge: "BEST SELLER",
    category: "DESK ACCESSORIES",
    shortDescription:
      "Adjustable natural beechwood reading stand for notebooks, textbooks, and tablets.",
    features: [
      "Natural beechwood & matte metal arms",
      "5 adjustable tilt angle settings",
      "Page clips hold thick textbooks open",
      "Folds flat for compact storage",
    ],
    shopeeUrl: "https://id.shp.ee/JDMuodop",
    dateAdded: "2026-07-15",
  },
];
