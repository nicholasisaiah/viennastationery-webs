// Script: convert products.csv → products TypeScript data
// Run: node scripts/convert-products.js
const fs = require("fs");
const path = require("path");

// CSV parser that handles quoted fields with commas
function parseCSVLine(line) {
  const fields = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      fields.push(field.trim());
      field = "";
    } else {
      field += ch;
    }
  }
  fields.push(field.trim());
  return fields;
}

function parsePrice(str) {
  // "Rp43.880" → 43880  |  "Rp1.234.567" → 1234567
  return parseInt((str || "0").replace(/Rp|[.\s]/g, ""), 10) || 0;
}

function toSlug(name, idx) {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .substring(0, 60)
      .replace(/-+$/, "") +
    "-" +
    (idx + 1)
  );
}

function normalizeCategory(cat) {
  // Fix typo "TIpe X" → "Tipe X"
  return cat.replace("TIpe X", "Tipe X").trim();
}

const csvPath = path.join(__dirname, "..", "products.csv");
const raw = fs.readFileSync(csvPath, "utf8");
const lines = raw.split(/\r?\n/);

// Line 0: blank, Line 1: headers, Lines 2+: data
const dataLines = lines.slice(2).filter((l) => l.trim().length > 5);

const products = dataLines.map((line, idx) => {
  const cols = parseCSVLine(line);
  // col[0]: empty index, col[1]: name, col[2]: price, col[3]: orig_price,
  // col[4]: category, col[5]: badge, col[6]: image, col[7]: shopee_url
  // col[8,9], [10,11] ... [22,23]: variant label+image pairs

  const name = cols[1] || "";
  const price = parsePrice(cols[2]);
  const originalPrice = parsePrice(cols[3]);
  const category = normalizeCategory(cols[4] || "Lainnya");
  const badgeRaw = (cols[5] || "").trim();
  const badge = badgeRaw === "-" || badgeRaw === "" ? undefined : badgeRaw;
  const image = cols[6] || "";
  const shopeeUrl = cols[7] || "";

  // Parse variants (up to 8 pairs: cols 8-23)
  const variants = [];
  for (let v = 0; v < 8; v++) {
    const labelIdx = 8 + v * 2;
    const imageIdx = 9 + v * 2;
    const label = (cols[labelIdx] || "").trim();
    const varImg = (cols[imageIdx] || "").trim();
    if (!label || label === "-" || label === "") break;
    variants.push({ label: label.toUpperCase(), image: varImg });
  }

  const slug = toSlug(name, idx);
  const id = `p${idx + 1}`;

  return {
    id,
    slug,
    name,
    price,
    originalPrice: originalPrice !== price ? originalPrice : undefined,
    image,
    images: variants.length > 0 ? variants.map((v) => v.image) : [image],
    variants: variants.length > 0 ? variants : undefined,
    badge,
    category,
    shortDescription: name,
    features: [],
    shopeeUrl,
    dateAdded: "2026-10-01",
  };
});

// Generate TypeScript
const categories = [...new Set(products.map((p) => p.category))].sort();
const categoryUnion = categories.map((c) => `"${c}"`).join(" | ");

let ts = `// AUTO-GENERATED from products.csv — DO NOT EDIT MANUALLY
// Generated: ${new Date().toISOString()}

export interface ProductVariant {
  label: string;
  image: string;
}

export type ProductCategory = ${categoryUnion};

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  variants?: ProductVariant[];
  badge?: "NEW" | "SALE" | "BEST SELLER";
  category: ProductCategory;
  shortDescription: string;
  features: string[];
  shopeeUrl: string;
  dateAdded: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = ${JSON.stringify(categories, null, 2)};

export const PRODUCTS_DATA: Product[] = ${JSON.stringify(products, null, 2)};
`;

const outPath = path.join(__dirname, "..", "src", "data", "products.ts");
fs.writeFileSync(outPath, ts, "utf8");

console.log(`✅ Generated ${products.length} products`);
console.log(`📦 Categories (${categories.length}): ${categories.join(", ")}`);
console.log(`📁 Output: ${outPath}`);
