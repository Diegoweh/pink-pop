export type ProductVariant = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  description?: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
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
    ],
    category: 'foundation',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
