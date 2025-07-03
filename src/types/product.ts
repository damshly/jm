// src/types/product.ts
export interface Product {
  name: string;
  description?: string;
  image: string;
  category: string;
  price: number;
  isFeatured?: boolean; 
}
