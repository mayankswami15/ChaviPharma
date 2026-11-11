export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  dosageForm: string;
  composition: string;
  packSize: string;
  image: string;
  slideImages?: string[];
  shortDescription: string;
  description: string;
  featured: boolean;
  demo: boolean;
  uses?: string[];
  storage?: string;
  dosage?: string;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
};

export type EnquiryType = "product" | "franchise" | "distribution" | "general";

export type EnquiryFormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  cityState: string;
  enquiryType: EnquiryType;
  message: string;
  consent: boolean;
};
