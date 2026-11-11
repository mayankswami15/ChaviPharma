import { type Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "tablets",
    slug: "tablets",
    name: "Tablets",
    description:
      "A comprehensive range of tablet formulations designed for various therapeutic applications.",
    image: "/images/categories/tablets.jpg",
    productCount: 2,
  },
  {
    id: "capsules",
    slug: "capsules",
    name: "Capsules",
    description:
      "Quality capsule formulations offering precise dosing and improved bioavailability.",
    image: "/images/categories/capsules.jpg",
    productCount: 1,
  },
  {
    id: "syrups",
    slug: "syrups",
    name: "Syrups",
    description:
      "Palatable liquid formulations suitable for patients across all age groups.",
    image: "/images/categories/syrups.jpg",
    productCount: 3,
  },
  {
    id: "injectables",
    slug: "injectables",
    name: "Injectables",
    description:
      "Sterile injectable preparations manufactured under controlled conditions.",
    image: "/images/categories/injectables.jpg",
    productCount: 0,
  },
  {
    id: "nutraceuticals",
    slug: "nutraceuticals",
    name: "Nutraceuticals",
    description:
      "Nutritional supplements and wellness products for preventive healthcare.",
    image: "/images/categories/nutraceuticals.jpg",
    productCount: 0,
  },
  {
    id: "topical",
    slug: "topical",
    name: "Topical / External Preparations",
    description:
      "Creams, ointments and external preparations for targeted application.",
    image: "/images/categories/topical.jpg",
    productCount: 2,
  },
];
