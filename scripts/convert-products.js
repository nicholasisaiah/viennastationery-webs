// Script: convert products.csv → products TypeScript data WITH storytelling
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
  return cat.replace("TIpe X", "Tipe X").trim();
}

// ─── Storytelling Generator ───────────────────────────
const STORYTELLING = {
  "Pulpen & Tinta": [
    "Setiap goresan pulpen adalah awal dari ide besar. {name} hadir untuk menemani setiap catatan penting, mulai dari tugas kuliah hingga jurnal harianmu. Dengan tinta yang mengalir halus dan desain yang nyaman digenggam, menulis jadi terasa lebih menyenangkan.",
    "Pernahkah kamu merasakan kepuasan saat tinta mengalir sempurna di atas kertas? {name} dirancang untuk memberikan pengalaman menulis terbaik. Cocok untuk pelajar, mahasiswa, dan siapa saja yang percaya bahwa alat tulis yang baik bisa mengubah hari biasa menjadi luar biasa.",
    "Ada keajaiban kecil dalam setiap tulisan tangan. {name} membantu kamu menuangkan pikiran dengan lebih lancar dan rapi. Entah untuk mencatat materi kuliah, membuat to-do list, atau sekadar mencoret-coret ide kreatif — pulpen ini selalu siap menemani.",
  ],
  "Penghapus & Tipe X": [
    "Kesalahan bukan akhir dari segalanya — itulah filosofi di balik {name}. Dengan koreksi yang rapi dan presisi, kamu bisa memperbaiki catatan tanpa merusak kertas. Praktis, bersih, dan selalu siap sedia di kotak pensilmu.",
    "Setiap orang butuh kesempatan kedua, termasuk dalam menulis. {name} memberikan koreksi yang mulus dan tidak meninggalkan bekas. Sempurna untuk ujian, tugas, atau pekerjaan kantor yang membutuhkan hasil bersih dan profesional.",
    "Rapi itu penting. {name} memastikan setiap koreksi yang kamu buat terlihat bersih dan tidak mengganggu tampilan tulisan. Dengan desain yang ergonomis dan pita koreksi berkualitas, memperbaiki kesalahan jadi hal yang mudah.",
  ],
  "Notebook & Notepad": [
    "Sebuah notebook bukan sekadar kumpulan kertas — ia adalah ruang untuk mimpi, rencana, dan cerita hidupmu. {name} hadir dengan desain estetik yang membuat kamu semangat untuk membuka dan menulis setiap hari. Dari catatan kuliah hingga jurnal pribadi, semuanya jadi lebih bermakna.",
    "Ada kepuasan tersendiri saat membuka notebook baru yang cantik. {name} dirancang untuk mereka yang percaya bahwa alat tulis yang indah bisa menginspirasi produktivitas. Kertas tebal, sampul kokoh, dan desain yang bikin meja belajarmu makin aesthetic.",
    "Setiap halaman adalah kanvas kosong yang menunggu idemu. {name} menawarkan kualitas kertas premium dengan binding yang kuat, siap menemani kamu sepanjang semester. Tulis rencanamu, gambar inspirasimu, dan biarkan kreativitasmu mengalir.",
  ],
  "Kertas Binder": [
    "Fleksibilitas adalah kunci produktivitas. {name} memungkinkan kamu mengatur catatan sesuai kebutuhan — tambah, kurangi, atau susun ulang halaman kapan saja. Cocok untuk mahasiswa yang butuh sistem catatan yang bisa disesuaikan.",
    "Binder yang baik adalah fondasi dari sistem catatan yang terorganisir. {name} hadir dengan kualitas material premium dan desain yang membuatmu bangga membawanya ke kampus. Fleksibel, tahan lama, dan selalu siap menampung semua catatanmu.",
    "Organisasi dimulai dari alat yang tepat. {name} menawarkan solusi catatan yang fleksibel — kamu bisa menambah kertas, membagi materi per mata kuliah, dan tetap menjaga semuanya rapi dalam satu tempat.",
  ],
  "Kalkulator": [
    "Angka-angka tidak harus membosankan. {name} membuktikan bahwa kalkulator bisa fungsional sekaligus estetik. Dengan tombol responsif dan layar yang jelas, menghitung jadi lebih cepat dan menyenangkan.",
    "Dari tugas matematika sampai menghitung budget bulanan, {name} adalah teman setia yang selalu memberikan jawaban akurat. Desainnya yang menarik membuatnya jadi lebih dari sekadar alat hitung — ia adalah aksesori meja belajar yang cantik.",
    "Siapa bilang kalkulator harus tampil membosankan? {name} hadir dengan warna dan desain yang menyegarkan, tanpa mengorbankan fungsi. Akurat, tahan lama, dan cocok untuk ujian maupun pekerjaan sehari-hari.",
  ],
  "Highlighter": [
    "Warna-warna cerah yang menandai bagian penting — itulah seni belajar yang efektif. {name} memberikan highlight yang cerah dan tahan lama tanpa menembus kertas. Sempurna untuk menandai materi ujian atau membuat catatan yang lebih hidup.",
    "Belajar efektif dimulai dari catatan yang terorganisir dengan baik. {name} hadir dengan warna pastel yang lembut di mata namun tetap mencolok untuk menandai poin-poin penting. Jadikan waktu belajarmu lebih produktif dan menyenangkan.",
  ],
  "Memo & Sticky Notes": [
    "Pengingat kecil yang membuat perbedaan besar. {name} adalah teman setia untuk menuliskan to-do list, pesan singkat, atau catatan penting yang perlu kamu lihat setiap hari. Dengan warna gradasi yang cantik, meja belajarmu jadi lebih hidup.",
    "Ide bisa datang kapan saja. {name} memastikan kamu tidak pernah kehilangan momen inspirasi. Tempelkan di buku, laptop, atau dinding — catatan kecil ini akan selalu mengingatkanmu pada hal-hal penting.",
  ],
  "Tempat Pensil": [
    "Tempat pensil yang baik menjaga semua alat tulismu tetap rapi dan mudah dijangkau. {name} hadir dengan desain yang cute sekaligus fungsional — muat banyak, mudah dibersihkan, dan pastinya bikin meja belajar makin aesthetic.",
    "Organisasi dimulai dari hal kecil. {name} membantu kamu menyimpan pulpen, pensil, penghapus, dan alat tulis lainnya dalam satu tempat yang rapi. Desainnya yang lucu membuat belajar jadi lebih menyenangkan.",
  ],
  "Pensil": [
    "Pensil mekanik yang tepat membuat menulis dan menggambar jadi lebih presisi. {name} hadir dengan mekanisme yang halus, lead yang tidak mudah patah, dan desain yang lucu untuk menemani hari-harimu.",
    "Dari sketsa cepat hingga catatan detail, {name} memberikan goresan yang konsisten dan nyaman. Desainnya yang menggemaskan membuatnya jadi alat tulis favorit di kotak pensilmu.",
  ],
  "Ransel": [
    "Tas yang tepat bisa mengubah cara kamu menjalani hari. {name} dirancang untuk mahasiswa aktif — kapasitas besar untuk laptop dan buku, bahan premium yang tahan lama, dan desain trendy yang cocok untuk kampus maupun hangout.",
    "Gaya dan fungsi dalam satu tas. {name} hadir dengan kompartemen yang terorganisir, bantalan punggung yang nyaman, dan material berkualitas yang siap menemani kamu dari pagi hingga malam.",
  ],
  "Tas Selempang & Bahu": [
    "Praktis dan stylish — {name} adalah pilihan sempurna untuk kamu yang butuh tas ringan namun tetap muat banyak. Dari kampus ke café, dari perpustakaan ke hangout bareng teman, tas ini selalu cocok.",
    "Kebebasan bergerak tanpa mengorbankan gaya. {name} hadir dengan desain Korean style yang trendy, tali adjustable, dan kompartemen cerdas yang muat semua kebutuhanmu.",
  ],
  "Lanyard & Name Tag": [
    "Detail kecil yang membuat tampilan lebih profesional. {name} hadir dengan desain bersih dan material transparan yang elegan — cocok untuk ID card, photocard, atau kartu akses kampus dan kantor.",
  ],
  "Papan Tulis & Papan Jalan": [
    "Menulis di mana saja jadi lebih mudah dengan {name}. Clipboard yang kokoh dan estetik ini sempurna untuk ujian, presentasi lapangan, atau sekadar menulis dengan alas yang nyaman.",
  ],
  "Pembatas Buku": [
    "Organisasi yang baik dimulai dari pembatas yang rapi. {name} membantu kamu memisahkan materi per bab atau mata kuliah dengan mudah. Material lentur dan warna yang ceria membuat catatan bindermu lebih terstruktur.",
  ],
};

function generateStoryDesc(name, category) {
  const templates = STORYTELLING[category] || [
    "{name} adalah pilihan sempurna untuk melengkapi koleksi alat tulismu. Dirancang dengan kualitas terbaik dan desain yang menarik, produk ini siap menemani aktivitas sehari-harimu.",
  ];
  // Pick based on name hash for consistency
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
  const idx = Math.abs(hash) % templates.length;
  return templates[idx].replace(/\{name\}/g, name);
}

function generateFeatures(name, category) {
  const features = [];
  const lower = name.toLowerCase();

  if (lower.includes("isi") || lower.includes("pcs") || lower.includes("set")) {
    const match = lower.match(/isi\s*(\d+)|(\d+)\s*pcs|(\d+)\s*set|set\s*(\d+)/i);
    if (match) {
      const num = match[1] || match[2] || match[3] || match[4];
      features.push(`Isi ${num} buah dalam 1 paket`);
    }
  }
  if (lower.includes("0.5mm") || lower.includes("0,5mm")) features.push("Ujung pena 0.5mm — presisi dan halus");
  if (lower.includes("0.7mm") || lower.includes("0,7mm")) features.push("Ujung pena 0.7mm — nyaman untuk menulis cepat");
  if (lower.includes("spiral")) features.push("Jilid spiral — mudah dibuka 360°");
  if (lower.includes("b5")) features.push("Ukuran B5 — pas untuk catatan kuliah");
  if (lower.includes("a5")) features.push("Ukuran A5 — compact dan mudah dibawa");
  if (lower.includes("a6")) features.push("Ukuran A6 — mini dan portable");
  if (lower.includes("a4")) features.push("Ukuran A4 — lebar untuk catatan detail");
  if (lower.includes("binder") || lower.includes("loose leaf")) features.push("Sistem loose leaf — tambah/kurangi kertas kapan saja");
  if (lower.includes("transparan")) features.push("Desain transparan — modern dan estetik");
  if (lower.includes("pastel")) features.push("Warna pastel — lembut dan aesthetic");
  if (lower.includes("aesthetic") || lower.includes("estetik") || lower.includes("lucu")) features.push("Desain aesthetic — bikin meja belajar makin cantik");
  if (lower.includes("laptop")) features.push("Muat laptop — kompartemen khusus tersedia");
  if (lower.includes("korea") || lower.includes("korean")) features.push("Korean style — trendy dan kekinian");
  if (lower.includes("gel")) features.push("Tinta gel — mengalir halus dan cepat kering");
  if (lower.includes("hapus") || lower.includes("eraser")) features.push("Bisa dihapus — koreksi mudah tanpa bekas");
  if (lower.includes("refil") || lower.includes("reffil") || lower.includes("refill")) features.push("Bisa di-refill — hemat dan ramah lingkungan");
  if (lower.includes("30 meter")) features.push("Pita koreksi 30 meter — tahan lama");
  if (lower.includes("surya") || lower.includes("solar")) features.push("Dual power — baterai + energi surya");
  if (lower.includes("scientific")) features.push("Scientific calculator — lengkap untuk ujian");
  if (lower.includes("sanrio") || lower.includes("pochacco")) features.push("Karakter Sanrio resmi — collectible");
  if (lower.includes("stitch")) features.push("Motif Stitch — lucu dan menggemaskan");

  if (features.length === 0) {
    features.push("Kualitas premium — tahan lama");
    features.push("Cocok untuk sekolah, kuliah, dan kantor");
  }

  return features.slice(0, 5);
}

// ─── Main ─────────────────────────────────────────────
const csvPath = path.join(__dirname, "..", "products.csv");
const raw = fs.readFileSync(csvPath, "utf8");
const lines = raw.split(/\r?\n/);

const dataLines = lines.slice(2).filter((l) => l.trim().length > 5);

const products = dataLines.map((line, idx) => {
  const cols = parseCSVLine(line);

  const name = cols[1] || "";
  const price = parsePrice(cols[2]);
  const originalPrice = parsePrice(cols[3]);
  const category = normalizeCategory(cols[4] || "Lainnya");
  const badgeRaw = (cols[5] || "").trim();
  const badge = badgeRaw === "-" || badgeRaw === "" ? undefined : badgeRaw;
  const image = cols[6] || "";
  const shopeeUrl = cols[7] || "";

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
    images: variants.length > 0 ? [image, ...variants.map((v) => v.image)] : [image],
    variants: variants.length > 0 ? variants : undefined,
    badge,
    category,
    shortDescription: name,
    description: generateStoryDesc(name, category),
    features: generateFeatures(name, category),
    shopeeUrl,
    dateAdded: "2026-10-01",
  };
});

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
  description: string;
  features: string[];
  shopeeUrl: string;
  dateAdded: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = ${JSON.stringify(categories, null, 2)};

export const PRODUCTS_DATA: Product[] = ${JSON.stringify(products, null, 2)};
`;

const outPath = path.join(__dirname, "..", "src", "data", "products.ts");
fs.writeFileSync(outPath, ts, "utf8");

console.log(`✅ Generated ${products.length} products with storytelling`);
console.log(`📦 Categories (${categories.length}): ${categories.join(", ")}`);
console.log(`📁 Output: ${outPath}`);
