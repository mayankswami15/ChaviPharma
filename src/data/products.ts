import { type Product } from "@/types/product";

/**
 * Chavi Pharmaceuticals — Real Product Catalogue
 */
export const products: Product[] = [
  {
    id: "1",
    slug: "diclovi-strong-gel",
    name: "DICLOVI STRONG GEL",
    category: "topical",
    dosageForm: "Gel",
    composition:
      "Diclofenac Diethylamine 1.16% w/w, Methyl Salicylate 10% w/w, Linseed Oil 3% w/w, Menthol 0.5% w/w, Mephenesin, Capsaicin",
    packSize: "30g Tube",
    image: "/images/products/diclovi-strong-gel.png",
    slideImages: ["/images/products/slideshow/diclovi-strong-gel.jpg"],
    shortDescription:
      "Long lasting joint, muscle and back pain relief gel for external use.",
    description:
      "DICLOVI STRONG GEL is a topical pain relief gel formulated with Diclofenac Diethylamine, Methyl Salicylate, Linseed Oil, Menthol, Mephenesin and Capsaicin. It provides long-lasting relief from lowback pain, joints pain, muscular pain and shoulder pain. For external use only.",
    featured: true,
    demo: false,
    uses: ["Lowback Pain", "Joints Pain", "Muscular Pain", "Shoulder Pain"],
    storage: "Store at a temperature not exceeding 30°C. Do not freeze.",
    dosage: "Rub gently to the affected area. For external use only.",
  },
  {
    id: "2",
    slug: "chavirex-ls",
    name: "CHAVIREX-LS",
    category: "syrups",
    dosageForm: "Syrup",
    composition:
      "Ambroxol Hydrochloride 30mg + Levosalbutamol 1mg + Guaifenesin 50mg per 5ml",
    packSize: "100ml Bottle",
    image: "/images/products/chavirex-ls.png",
    slideImages: ["/images/products/slideshow/chavirex-ls.jpg"],
    shortDescription:
      "A sugar-free cough syrup with bronchodilator and mucolytic action.",
    description:
      "CHAVIREX-LS is a sugar-free syrup combining Ambroxol Hydrochloride, Levosalbutamol and Guaifenesin. It acts as a bronchodilator and mucolytic, indicated for chronic bronchitis and asthma. Shake well before use.",
    featured: true,
    demo: false,
    uses: ["Bronchodilator", "Mucolytic", "Chronic Bronchitis", "Asthma"],
    storage:
      "Store protected from light and moisture, at a temperature not exceeding 30°C.",
    dosage: "As directed by the Physician.",
  },
  {
    id: "3",
    slug: "omeevi-20",
    name: "OMEEVI-20",
    category: "capsules",
    dosageForm: "Capsule",
    composition: "Omeprazole IP 20mg (as gastro-resistant pellets)",
    packSize: "10x15 Capsules",
    image: "/images/products/omeevi-20.png",
    slideImages: ["/images/products/slideshow/omeevi-20.jpg"],
    shortDescription:
      "Omeprazole gastro-resistant capsules for acid-related disorders.",
    description:
      "OMEEVI-20 contains Omeprazole 20mg as gastro-resistant pellets in hard gelatin capsules. It is a proton pump inhibitor used for the treatment of acid-related disorders. Capsule should be swallowed as whole, not to be opened, crushed or chewed.",
    featured: true,
    demo: false,
    uses: ["Acid Reflux", "Gastric Ulcer", "GERD", "Acid-related Disorders"],
    storage:
      "Store protected from light and moisture, at a temperature not exceeding 30°C.",
    dosage: "As directed by the Physician.",
  },
  {
    id: "4",
    slug: "chavirex-dx15",
    name: "CHAVIREX-DX15",
    category: "syrups",
    dosageForm: "Syrup",
    composition:
      "Dextromethorphan Hydrobromide 15mg + Phenylephrine Hydrochloride 5mg + Chlorpheniramine Maleate 2mg per 5ml",
    packSize: "100ml Bottle",
    image: "/images/products/chavirex-dx15.png",
    slideImages: ["/images/products/slideshow/chavirex-dx15.jpg"],
    shortDescription:
      "Cough syrup that relieves whooping cough, smoker's cough and allergic cough.",
    description:
      "CHAVIREX-DX15 is a cough relief syrup combining Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride and Chlorpheniramine Maleate. It relieves whooping cough, smoker's cough and allergic cough. Shake well before use.",
    featured: true,
    demo: false,
    uses: ["Whooping Cough", "Smoker's Cough", "Allergic Cough"],
    storage: "Store in a cool, dry & dark place.",
    dosage: "As directed by the Physician.",
  },
  {
    id: "5",
    slug: "chaviderm-cream",
    name: "CHAVIDERM 6 CREAM",
    category: "topical",
    dosageForm: "Cream",
    composition:
      "Ketoconazole 2% + Clobetasol Propionate 0.05% + Iodochlorhydroxyquinoline 1% + Neomycin Sulphate 0.1% + Dexpanthenol 0.05% + Tolnaftate 1%",
    packSize: "15g Tube",
    image: "/images/products/chaviderm-cream.png",
    slideImages: ["/images/products/slideshow/chaviderm-cream.jpg"],
    shortDescription:
      "Anti-bacterial, anti-fungal and anti-inflammatory cream for dermatological conditions.",
    description:
      "CHAVIDERM 6 CREAM is a multi-action topical cream combining Ketoconazole, Clobetasol Propionate, Iodochlorhydroxyquinoline, Neomycin Sulphate, Dexpanthenol and Tolnaftate. It provides anti-bacterial, anti-fungal and anti-inflammatory action. For external use only.",
    featured: false,
    demo: false,
    uses: ["Anti Bacterial", "Anti Fungal", "Anti Inflammatory"],
    storage: "Store at a temperature not exceeding 30°C. Do not freeze.",
    dosage: "As directed by the Physician. For external use only.",
  },
  {
    id: "6",
    slug: "chavimox-cv",
    name: "CHAVIMOX-CV",
    category: "syrups",
    dosageForm: "Dry Syrup",
    composition: "Amoxycillin & Potassium Clavulanate Oral Suspension IP",
    packSize: "3.3g / 30ml",
    image: "/images/products/chavimox-cv.jpg",
    shortDescription:
      "Amoxycillin & Potassium Clavulanate oral suspension for paediatric use.",
    description:
      "CHAVIMOX-CV is an antibiotic dry syrup containing Amoxycillin and Potassium Clavulanate Oral Suspension IP. Vanilla flavoured and intended for paediatric use only. Reconstitute with sterile water before use.",
    featured: false,
    demo: false,
  },
  {
    id: "7",
    slug: "montevi-lc",
    name: "MONTEVI-LC",
    category: "tablets",
    dosageForm: "Tablet",
    composition: "Montelukast & Levocetirizine Tablets IP",
    packSize: "10x10 Tablets",
    image: "/images/products/montevi-lc.jpg",
    shortDescription:
      "Montelukast & Levocetirizine tablets for allergy and respiratory conditions.",
    description:
      "MONTEVI-LC contains Montelukast and Levocetirizine in tablet form. It is used for the management of allergic conditions and respiratory symptoms.",
    featured: false,
    demo: false,
  },
  {
    id: "8",
    slug: "diclovi-mr",
    name: "DICLOVI-MR",
    category: "tablets",
    dosageForm: "Tablet",
    composition:
      "Diclofenac Potassium 50mg + Paracetamol 325mg + Chlorzoxazone 250mg",
    packSize: "10x10 Tablets",
    image: "/images/products/diclovi-mr.jpg",
    shortDescription:
      "Combination analgesic and muscle relaxant tablets for pain relief.",
    description:
      "DICLOVI-MR is a combination tablet containing Diclofenac Potassium, Paracetamol and Chlorzoxazone. It provides analgesic, anti-inflammatory and muscle relaxant action.",
    featured: false,
    demo: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.composition.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.dosageForm.toLowerCase().includes(q)
  );
}
