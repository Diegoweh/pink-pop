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
  'anastasia-brow-pencil.avif',
  'anastasia-liquid-concealer.jpg',
  'beauty-blender-foundation.webp',
  'beauty-creation-foundation.webp',
  'beauty-creations-lipgloss-cappucino.webp',
  'beauty-creations-lipgloss-foxy.webp',
  'beauty-creations-lipgloss-friend-zone.webp',
  'beauty-creations-lipgloss-sweet-affair.avif',
  'beauty-creations-polvo.webp',
  'benefit-brow-pencil.jpg',
  'besame-cosmetics-lipstick-enamorada.webp',
  'besame-cosmetics-lipstick-victoria-red.webp',
  'bond-no-9-labial-estuche-con-refill.webp',
  'bond-no-9-labial-de-lujo.webp',
  'buxom-by-shiseido-sombras-de-ojos.jpg',
  'charlotte-tilbury-collagen-lip.png',
  'charlotte-tilbury-foundation.webp',
  'charlotte-tilbury-foundation-2.webp',
  'charlotte-tilbury-icon-hollywood-lip-trio.webp',
  'chat-cosmetics-cushion-soft-matte.png',
  'chat-cosmetics-lipgloss-wonderful.png',
  'chat-cosmetics-lipgloss-wonderful-2.png',
  'chat-cosmetics-profesional-cover.png',
  'chat-cosmetics-rubor-compacto.png',
  'chat-cosmetics-silky-cover-stick.png',
  'chat-cosmetics-sombras-de-ojos-royalty-romance.jpg',
  'christian-louboutin-en-estuche-negro-red-rouge.jpg',
  'christian-louboutin-en-estuche-negro-rojo-intenso.jpg',
  'christian-louboutin-en-estuche-negro-rosa.avif',
  'clinique-set-de-labiales-4-colores.jpg',
  'dior-backstage-foundation.webp',
  'dior-lip-glow.jpg',
  'dolce-and-gabanna-lipgloss-cashwed.webp',
  'dolce-and-gabanna-sombras-de-ojos-ever-icon.webp',
  'elf-brow-gel.webp',
  'elf-spray-fijador-de-maquillaje.avif',
  'fenty-beauty-foundation.webp',
  'fenty-beauty-rubor-compacto.jpeg',
  'fenty-lipstick.avif',
  'florasis-sombras-de-ojos.jpg',
  'florasis-polvo.webp',
  'florasis-polvo-2.webp',
  'flowers-knows-rubor-compacto.jpg',
  'hermes-paris-rubor-compacto.webp',
  'huda-beauty-polvo.webp',
  'hung-vanngo-sombras-de-ojos-pink-violet.webp',
  'jeffree-star-polvo.webp',
  'kiko-milano-delineador-en-crema.jpg',
  'kiko-milano-false-lashes-concentrate.jpg',
  'kiko-milano-foundation.webp',
  'kiko-milano-cosmetiquera-con-lip-y-delineador.webp',
  'kiko-milano-lipgloss-bridgerton-serie.jpg',
  'kiko-milano-longeyes-care-mascara.avif',
  'kiko-milano-maxi-mod-long-lasting.jpg',
  'kiko-milano-sombras-de-ojos-bridgerton.jpg',
  'kiko-milano-sombras-de-ojos-lasting-mousse.jpg',
  'kiko-milano-top-coat-mascara.avif',
  'kosas-polvo.webp',
  'l-a-girl-spray-fijador-de-maquillaje.webp',
  'la-a-girl-liquid-concealer.jpg',
  'laura-geller-sombras-de-ojos.webp',
  'laura-geller-liquid-concealer.webp',
  'laura-geller-rubor-horneado.jpg',
  'laura-mercier-foundation.webp',
  'laura-mercier-spray-fijador-de-maquillaje.avif',
  'laura-mercier-polvo.avif',
  'makeup-by-mario-blush-en-crema.webp',
  'by-mario-lipstick-rojo.webp',
  'makeup-by-mario-rubor-compacto.webp',
  'makeup-by-mario-sombras-de-ojos-original-palette.avif',
  'moira-beauty-chic-satin-lipstick-chic-nude.webp',
  'moira-beauty-chic-satin-lipstick-millenium.webp',
  'moira-beauty-chic-satin-lipstick-rewind.webp',
  'moira-beauty-chic-satin-lipstick-y2k.jpg',
  'moira-beauty-lip-chic-shimmer-gloss.webp',
  'moira-beauty-lip-chic-shimmer-gloss-2.jpeg',
  'moira-beauty-lip-chic-shimmer-gloss-3.jpeg',
  'moira-beauty-signature-lip-pensil-barely.avif',
  'moira-beauty-signature-lip-pensil-honey-rose.avif',
  'moira-beauty-signature-lip-pensil-posh-pink.webp',
  'moira-beauty-liquid-blush.webp',
  'moira-beauty-love-heat-crema-blush.webp',
  'moira-beauty-marvelous-baked-blush.webp',
  'moira-beauty-polvo.webp',
  'moira-beauty-brow-pencil.webp',
  'moira-spray-fijador-de-maquillaje.avif',
  'morphe-sombras-de-ojos.avif',
  'morphe-trio-blush.webp',
  'nars-foundation.webp',
  'nars-lipstick.avif',
  'nars-polvo.avif',
  'nars-rubor-compacto.webp',
  'natasha-denona-sombras-de-ojos-nude-palette.avif',
  'natasha-denona-sombras-de-ojos-yucca-palette.avif',
  'nyx-delineador-de-ojos-lapiz.webp',
  'one-size-blush-trio.webp',
  'one-size-delineador.webp',
  'one-size-foundation.webp',
  'one-size-polvo.webp',
  'one-size-spray-fijador-de-maquillaje.webp',
  'pat-mcgrath-delineador-de-ojos-lapiz.jpg',
  'pat-mcgrath-lipstick.webp',
  'pat-mcgrath-rubor-compacto.webp',
  'pat-mcgrath-labs-sombras-de-ojos.webp',
  'rare-beauty-lipgloss.jpg',
  'revolution-brow-gel.jpg',
  'rhode-peptide-lip-tint.webp',
  'rhode-pocket-blush.webp',
  'saie-cosmetics-blush-liquido.webp',
  'saie-spray-fijador-de-maquillaje.webp',
  'siia-cosmetics-lipgloss.webp',
  'siia-cosmetics-liquid-concealer.webp',
  'tom-ford-set-de-labiales-4-colores.avif',
  'too-faced-better-than-sex-duo.jpg',
  'too-faced-cocoa-bold-lipstick.jpg',
  'too-faced-foundation.avif',
  'too-faced-sombras-de-ojos-chocolate.avif',
  'too-faced-sombras-de-ojos-cosmic-crush.webp',
  'too-faced-sombras-de-ojos-limited-edition.png',
  'tower-28-rubor-compacto.webp',
  'valentino-liquid-concealer.webp',
  'valentino-rubor-compacto.webp',
  'yves-saint-laurent-rubor-compacto.avif',
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
