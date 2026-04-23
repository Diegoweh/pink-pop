export type ProductCategory = 'blush' | 'foundation' | 'cushion' | 'palette' | 'lipstick';

export type ProductVariant = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: ProductCategory;
  variants?: ProductVariant[];
};

export const products: Product[] = [
  {
    id: 'chat-endless-luck-blusher',
    name: 'Rubor Endless Luck & Shine',
    brand: 'CHAT Cosmetics',
    description:
      'Un polvo refinado con acabado mate luminoso creado para ofrecer color preciso y duradero. La tecnología Oil Binding System asegura una aplicación uniforme y fijación durante todo el día. Incluye brocha distintiva. 3 g.',
    price: 59,
    image: 'https://www.nongchatmakeup.com/wp-content/uploads/2024/02/Product.All0133-scaled.jpg',
    images: [
      'https://www.nongchatmakeup.com/wp-content/uploads/2024/02/Product.All0133-scaled.jpg',
      'https://www.nongchatmakeup.com/wp-content/uploads/2024/02/1D8A8044-scaled.jpg',
      'https://www.nongchatmakeup.com/wp-content/uploads/2024/02/Product.All0446-scaled.jpg',
      'https://www.nongchatmakeup.com/wp-content/uploads/2024/02/CHAT-THE-ENDLESS-LUCK-AND-SHINE-BLUSHER6.jpg',
    ],
    category: 'blush',
    variants: [
      { id: 'shade-01', name: 'Tono 01' },
      { id: 'shade-02', name: 'Tono 02' },
      { id: 'shade-03', name: 'Tono 03' },
      { id: 'shade-04', name: 'Tono 04' },
      { id: 'shade-05', name: 'Tono 05' },
    ],
  },
  {
    id: 'chat-professional-foundation',
    name: 'Base profesional SPF15 PA+++',
    brand: 'CHAT Cosmetics',
    description:
      'Una base de larga duración que ofrece cobertura impecable y un acabado natural sobre la piel. Minerales, proteínas, vitamina E y jojoba perfeccionan el rostro mientras preservan la hidratación.',
    price: 29,
    image: 'https://www.nongchatmakeup.com/wp-content/uploads/2022/09/CHAT-Professional-Foundation-.jpg',
    images: [
      'https://www.nongchatmakeup.com/wp-content/uploads/2022/09/CHAT-Professional-Foundation-.jpg',
      'https://www.nongchatmakeup.com/wp-content/uploads/2022/09/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%89%E0%B8%B1%E0%B8%95%E0%B8%A3-%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%9A%E0%B8%9A-chat-cosmetic.jpeg',
    ],
    category: 'foundation',
  },
  {
    id: 'chat-lasting-soft-matte-cushion',
    name: 'Cushion Soft Matte de larga duración SPF50PA',
    brand: 'CHAT Cosmetics',
    description:
      'Una fórmula cushion de acabado mate suave con cobertura uniforme y duradera. Protección SPF50 PA++++, ligera sobre la piel y de acabado homogéneo.',
    price: 35,
    image:
      'https://www.nongchatmakeup.com/wp-content/uploads/2025/07/CHAT-Lasting-Soft-Matte-Cushion-SPF50PA-%E0%B8%84%E0%B8%B8%E0%B8%8A%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B9%81%E0%B8%A1%E0%B8%97-%E0%B8%89%E0%B8%B1%E0%B8%95%E0%B8%A3-%E0%B8%9B%E0%B8%81.png',
    images: [
      'https://www.nongchatmakeup.com/wp-content/uploads/2025/07/CHAT-Lasting-Soft-Matte-Cushion-SPF50PA-%E0%B8%84%E0%B8%B8%E0%B8%8A%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B9%81%E0%B8%A1%E0%B8%97-%E0%B8%89%E0%B8%B1%E0%B8%95%E0%B8%A3-%E0%B8%9B%E0%B8%81.png',
      'https://www.nongchatmakeup.com/wp-content/uploads/2025/07/CHAT-Lasting-Soft-Matte-Cushion-SPF50PA-%E0%B8%84%E0%B8%B8%E0%B8%8A%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B9%81%E0%B8%A1%E0%B8%97-%E0%B8%89%E0%B8%B1%E0%B8%95%E0%B8%A3-c1.jpg',
      'https://www.nongchatmakeup.com/wp-content/uploads/2025/07/CHAT-Lasting-Soft-Matte-Cushion-SPF50PA-%E0%B8%84%E0%B8%B8%E0%B8%8A%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B9%81%E0%B8%A1%E0%B8%97-%E0%B8%89%E0%B8%B1%E0%B8%95%E0%B8%A3-c2.jpg',
    ],
    category: 'cushion',
  },
  {
    id: 'chat-queen-iconic-palette',
    name: 'Paleta Queen Iconic',
    brand: 'CHAT Cosmetics',
    description:
      'Una paleta completa en un solo producto. Corrector, contorno, labios, sombras mate y satinadas, y rubor, formulados con mica, polvo de perla, aceite de macadamia, aloe y vitamina E. Alta pigmentación y larga duración.',
    price: 49,
    image: 'https://www.nongchatmakeup.com/wp-content/uploads/2023/12/CHAT-The-Queen-Iconic-Palette-1.jpg',
    images: [
      'https://www.nongchatmakeup.com/wp-content/uploads/2023/12/CHAT-The-Queen-Iconic-Palette-1.jpg',
      'https://www.nongchatmakeup.com/wp-content/uploads/2023/12/CHAT-The-Queen-Iconic-Palette-6.jpg',
      'https://www.nongchatmakeup.com/wp-content/uploads/2023/12/iconic_royal-romance1-1-scaled.jpg',
      'https://www.nongchatmakeup.com/wp-content/uploads/2023/12/iconic_rose-scaled.jpg',
    ],
    category: 'palette',
    variants: [
      { id: 'royal-romance', name: 'Royal Romance' },
      { id: 'rose', name: 'Rosa' },
    ],
  },
  {
    id: 'hermes-rose-abricot-blush',
    name: 'Rose Hermès Silky Blush — Rose Abricot',
    brand: 'Hermès',
    description:
      'Un albaricoque rosado aterciopelado. Polvo ultrafino prensado en seda, acabado semimate y pigmento ligero. Formato recargable. 6 g. Hecho en Italia.',
    price: 105,
    image: '/images/rose-abricot.webp',
    images: [
      '/images/rose-abricot.webp',
      '/images/colorete-en-polvo-silky-blush-rose-abricot--60165PV019-worn-1-0-0-800-800_g.webp',
      '/images/colorete-en-polvo-silky-blush-rose-abricot--60165PV019-worn-8-0-0-800-800_g.webp',
    ],
    category: 'blush',
  },
  {
    id: 'browit-highlight-contour-palette',
    name: 'Paleta Pro de iluminador y contorno',
    brand: 'Browit',
    description:
      'Una paleta para esculpir con un iluminador luminoso y tres tonos de contorno. Pigmentación intensa y gradación precisa. 3.5 g × 4.',
    price: 14.99,
    image: '/images/highlight-pro-palette.jpg',
    images: ['/images/highlight-pro-palette.jpg'],
    category: 'palette',
  },
  {
    id: 'louboutin-velvet-matte-001m',
    name: 'Rouge Louboutin Velvet Matte — 001M',
    brand: 'Christian Louboutin',
    description: 'Labial mate de larga duración. Acabado aterciopelado y pigmento intenso. Tono 001M.',
    price: 105,
    image: '/images/rouge-louboutin-velvet-mate.jpg',
    images: ['/images/rouge-louboutin-velvet-mate.jpg'],
    category: 'lipstick',
    variants: [{ id: '001m', name: '001M' }],
  },
  {
    id: 'louboutin-velvet-matte-003g',
    name: 'Rouge Louboutin Velvet Matte — 003G',
    brand: 'Christian Louboutin',
    description: 'Labial mate de larga duración. Acabado aterciopelado y pigmento intenso. Tono 003G.',
    price: 105,
    image: '/images/rouge-louboutin-velvet-mate.jpg',
    images: ['/images/rouge-louboutin-velvet-mate.jpg'],
    category: 'lipstick',
    variants: [{ id: '003g', name: '003G' }],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
