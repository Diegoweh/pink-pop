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
    name: 'The Endless Luck & Shine Blusher',
    brand: 'CHAT Cosmetics',
    description:
      'Colorete mate con brillo que aporta color vibrante y radiante. Fórmula ligera con tecnología Oil Binding System para una aplicación uniforme y duradera. Incluye brocha de alta calidad. 3 g.',
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
      { id: 'shade-01', name: 'Shade 01' },
      { id: 'shade-02', name: 'Shade 02' },
      { id: 'shade-03', name: 'Shade 03' },
      { id: 'shade-04', name: 'Shade 04' },
      { id: 'shade-05', name: 'Shade 05' },
    ],
  },
  {
    id: 'chat-professional-foundation',
    name: 'Professional Foundation SPF15 PA+++',
    brand: 'CHAT Cosmetics',
    description:
      'Base de larga duración con cobertura impecable y acabado natural. Minimiza poros con minerales, proteínas, vitamina E y extracto de aceite de jojoba. Retiene hidratación para una tez duradera.',
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
    name: 'Lasting Soft Matte Cushion SPF50PA',
    brand: 'CHAT Cosmetics',
    description:
      'Cushion de maquillaje con acabado mate suave y larga duración. Protección solar SPF50PA. Cobertura uniforme y textura ligera para una piel perfecta todo el día.',
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
    name: 'The Queen Iconic Palette',
    brand: 'CHAT Cosmetics',
    description:
      'Paleta multifuncional todo en uno con corrector, contorno, labiales, sombras mate y con brillo, y rubor. Alta pigmentación y larga duración con mica, polvo de perla, aceite de macadamia, aloe vera y vitamina E.',
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
      { id: 'rose', name: 'Rose' },
    ],
  },
  {
    id: 'hermes-rose-abricot-blush',
    name: 'Rose Hermès Silky Blush — Rose Abricot',
    brand: 'Hermès',
    description:
      'Un rosa anaranjado aterciopelado, como un albaricoque bajo el sol. Polvo fino y sedoso con acabado semimate. Textura ultraligera y pigmentada. Recargable. 6 g. Fabricado en Italia.',
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
    name: 'Highlight and Contour Pro Palette',
    brand: 'Browit',
    description:
      'Paleta profesional con iluminador y 3 tonos de contorno para un look prominente y esculpido. Color altamente pigmentado. 3.5 g × 4 colores.',
    price: 14.99,
    image: '/images/highlight-pro-palette.jpg',
    images: ['/images/highlight-pro-palette.jpg'],
    category: 'palette',
  },
  {
    id: 'louboutin-velvet-matte-001m',
    name: 'Rouge Louboutin Velvet Matte — 001M',
    brand: 'Christian Louboutin',
    description: 'Labial mate de larga duración con acabado aterciopelado. Tono 001M.',
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
    description: 'Labial mate de larga duración con acabado aterciopelado. Tono 003G.',
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
