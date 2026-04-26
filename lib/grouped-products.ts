import rawData from '@/productos.json';

export type GroupedVariant = {
  id: string;
  tono: string;
  precio: number;
  stock: number;
  imagePath: string;
};

export type GroupedProduct = {
  slug: string;
  marca: string;
  producto: string;
  categoria: string;
  variants: GroupedVariant[];
  defaultImage: string;
};

const IMAGE_FILES = [
  'amuse-baby-liquid-blush.webp',
  'amuse-cosmetics-foundation.webp',
  'amuse-polvo.webp',
  'anastasia-brow-pencil.webp',
  'anastasia-liquid-concealer.jpg',
  'beauty-creation-foundation.webp',
  'beauty-creations-lipgloss-cappucino.webp',
  'beauty-creations-lipgloss-foxy.webp',
  'beauty-creations-lipgloss-friend-zone.webp',
  'beauty-creations-lipgloss-sweet-affair.avif',
  'beauty-creations-polvo.webp',
  'besame-lipstick-enamorada.webp',
  'besame-lipstick-red.webp',
  'bond-no9-labial-estuche-refill.webp',
  'bond-no9-labial-lujo-rojo.webp',
  'buxom-by-shiseido-sombras-ojos.avif',
  'charlotte-tilbury-collagen-lip.png',
  'charlotte-tilbury-lip-trio.webp',
  'chat-cosmetics-rubor-compacto.png',
  'chat-cushion-soft-matte.jpeg',
  'chat-ligloss-wonderful-2.png',
  'chat-lipgloss-wonderful.png',
  'chat-professional-cover.png',
  'chat-silky-cover-stick.png',
  'chat-sombras-ojos-royalty.jpg',
  'christian-louboutin-red-rouge.jpg',
  'christian-louboutin-rojo-intenso.jpg',
  'christian-louboutin-rosa.avif',
  'clinique-set-labiales.jpg',
  'dior-backstage-foundation.webp',
  'dior-lip-glow.jpg',
  'dolce-gabanna-cashwed.webp',
  'dolce-gabanna-ever-icon.webp',
  'fenty-beauty-foundation.avif',
  'fenty-beauty-rubor-compacto.jpeg',
  'fenty-lipstick.avif',
  'floraris-sombras-ojos.jpg',
  'florasis-polvo.jpg',
  'flowers-knows-rubor-compacto.jpg',
  'hermes-paris-rubor-compacto.webp',
  'huda-beauty-polvo.webp',
  'hung-vanngo-sombras-ojos-pink-violet.webp',
  'jeffree-star-polvo.jpg',
  'kiko-milano-delineador-crema.jpg',
  'kiko-milano-false-lashes-concentrate.jpg',
  'kiko-milano-foundation.webp',
  'kiko-milano-lip-delineador.webp',
  'kiko-milano-lipgloss-bridgerton.jpg',
  'kiko-milano-longeyes-care-mascara.avif',
  'kiko-milano-maxi-mod-long-lasting.jpg',
  'kiko-milano-sombras-ojos-bridgerton.jpg',
  'kiko-milano-sombras-ojos-lasting-mouse.jpg',
  'kiko-milano-top-coat-mascara.avif',
  'kosas-polvo.webp',
  'la-girl-spray-fijador.webp',
  'laa-girl-liquid-concealer.jpg',
  'laura-geller-combras-ojos.jpg',
  'laura-geller-liquid-concealer.webp',
  'laura-geller-rubor-horneado.jpg',
  'laura-mercier-foundation.webp',
  'laura-mercier-spray-fijador.avif',
  'makeup-by-mario-blush-crema.webp',
  'makeup-by-mario-lipstick-rojo.webp',
  'makeup-by-mario-rubor-compacto.webp',
  'makeup-by-mario-sombras-ojos-original.avif',
  'moira-beauty-chic-satin-nude.webp',
  'moira-beauty-chic-satin-rewind.webp',
  'moira-beauty-chic-satin-y2k.jpg',
  'moira-beauty-chic-stain-millenium.webp',
  'moira-beauty-lip-chic-gloss-2.jpeg',
  'moira-beauty-lip-chic-gloss-3.jpeg',
  'moira-beauty-lip-chic-gloss.webp',
  'moira-beauty-lip-pencil-honey-rose.avif',
  'moira-beauty-lip-pencil-posh-pink.webp',
  'moira-beauty-lip-pensil-barely.avif',
  'moira-beauty-liquid-blush.webp',
  'moira-beauty-love-heat-crema-blush.webp',
  'moira-beauty-marvelous-baked-blush.webp',
  'moira-beauty-polvo.webp',
  'moira-beauty.webp',
  'moira-spray-fijador.webp',
  'morphe-sombras-ojos.avif',
  'morphe-trio-blush.webp',
  'nars-foundation.webp',
  'nars-lipstick.avif',
  'nars-polvo.jpg',
  'nars-rubor-compacto.webp',
  'natasha-denona-sombras-ojos-nude.avif',
  'natasha-denona-sombras-ojos-yucca.avif',
  'nyx-delineador-ojos-lapiz.webp',
  'one-size-blush-trio.webp',
  'one-size-delineador.webp',
  'one-size-foundation.webp',
  'one-size-polvo.webp',
  'one-size-spray-fijador.webp',
  'pat-mcgrath-delineador-ojos-lapiz.jpg',
  'pat-mcgrath-lipstick.webp',
  'pat-mcgrath-rubor-compacto.webp',
  'pat-mcgrath-sombras-ojos.webp',
  'rare-beauty-lipgloss.jpg',
  'revolution-brow-gel.webp',
  'rhode-peptide-lip-tint.webp',
  'rhode-pocket-blush.webp',
  'saie-cosmetics-blush-liquido.webp',
  'saie-spray-fijador.webp',
  'siia-cosmetics-lipgloss.webp',
  'siia-cosmetics-liquid-concealer.webp',
  'tom-ford-set-labiales.avif',
  'too-faced-better-than-sex-duo.jpg',
  'too-faced-cocoa-bold.jpg',
  'too-faced-foundation.avif',
  'too-faced-sombras-ojos-chocolate.avif',
  'too-faced-sombras-ojos-cosmic-crush.webp',
  'too-faced-sombras-ojos-limited-edition.png',
  'tower-28-rubor-compacto.webp',
  'valentino-liquid-concealer.webp',
  'valentino-rubor-compacto.webp',
  'yves-saint-rubor-compacto.jpeg',
];

function slugify(s: string): string {
  return String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function findImage(marca: string, producto: string, tono?: string | number): string {
  const mSlug = slugify(marca);
  const pSlug = slugify(producto);

  if (tono !== undefined) {
    const tSlug = slugify(String(tono));
    const withTono = IMAGE_FILES.find((f) => {
      const base = f.replace(/\.[^.]+$/, '');
      return base === `${mSlug}-${pSlug}-${tSlug}` ||
        base.startsWith(`${mSlug}-${pSlug}-${tSlug}-`);
    });
    if (withTono) return `/images/products/${withTono}`;
  }

  const productImg = IMAGE_FILES.find((f) => {
    const base = f.replace(/\.[^.]+$/, '');
    return base === `${mSlug}-${pSlug}` || base.startsWith(`${mSlug}-${pSlug}-`);
  });
  return productImg ? `/images/products/${productImg}` : '';
}

type RawEntry = {
  categoria: string;
  marca: string;
  producto: string;
  tono: string | number;
  stock: number;
  precio: number;
};

let _cache: GroupedProduct[] | null = null;

export function getGroupedProducts(): GroupedProduct[] {
  if (_cache) return _cache;

  const map = new Map<string, GroupedProduct>();

  for (const entry of rawData as RawEntry[]) {
    const marca = entry.marca.trim();
    const producto = entry.producto.trim();
    const slug = slugify(`${marca}-${producto}`);

    if (!map.has(slug)) {
      map.set(slug, {
        slug,
        marca,
        producto,
        categoria: entry.categoria.trim(),
        variants: [],
        defaultImage: '',
      });
    }

    const group = map.get(slug)!;
    const tonoStr = String(entry.tono).trim();
    const variantId = `${slug}__${slugify(tonoStr)}`;
    const imagePath = findImage(marca, producto, entry.tono);

    group.variants.push({
      id: variantId,
      tono: tonoStr,
      precio: entry.precio,
      stock: entry.stock,
      imagePath,
    });

    if (!group.defaultImage && imagePath) {
      group.defaultImage = imagePath;
    }
  }

  _cache = Array.from(map.values());
  return _cache;
}

export function getProductBySlug(slug: string): GroupedProduct | undefined {
  return getGroupedProducts().find((p) => p.slug === slug);
}
