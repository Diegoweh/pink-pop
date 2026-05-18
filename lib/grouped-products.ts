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
  'aldo-tamano-mediano-rojo.webp',
  'amuse-baby-liquid-blush.webp',
  'amuse-cosmetics-foundation.webp',
  'amuse-polvo.webp',
  'anastasia-brow-pencil.avif',
  'anastasia-brow-pencil.webp',
  'anastasia-liquid-concealer.jpg',
  'bath-body-works-be-enchanted.jpg',
  'bath-body-works-chocolate-amber.avif',
  'bath-body-works-dream-brigh.webp',
  'bath-body-works-forever-red.webp',
  'bath-body-works-guilty-fing.webp',
  'bath-body-works-into-the-wild.webp',
  'bath-body-works-madame-mistyque.jpeg',
  'bath-body-works-perfect-in-pink.webp',
  'bath-body-works-platinum.webp',
  'bath-body-works-toast-of-you.webp',
  'bath-body-works-touch-of-gold.webp',
  'bath-body-works-velvet-sugar.webp',
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
  'bond-no-9-labial-de-lujo.webp',
  'bond-no-9-labial-estuche-con-refill.webp',
  'buxom-by-shiseido-sombras-de-ojos.avif',
  'buxom-by-shiseido-sombras-de-ojos.jpg',
  'by-mario-lipstick-rojo.webp',
  'charlotte-tilbury-collagen-lip.png',
  'charlotte-tilbury-foundation-2.webp',
  'charlotte-tilbury-foundation.webp',
  'charlotte-tilbury-icon-hollywood-lip-trio.webp',
  'chat-cosmetics-cushion-soft-matte.png',
  'chat-cosmetics-lipgloss-wonderful-2.png',
  'chat-cosmetics-lipgloss-wonderful.png',
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
  'fenty-beauty-foundation.avif',
  'fenty-beauty-foundation.webp',
  'fenty-beauty-rubor-compacto.jpeg',
  'fenty-lipstick.avif',
  'ferragamo-incanto-amity.webp',
  'ferragamo-incanto-sky.webp',
  'ferragamo-incognito-bloom.webp',
  'ferragamo-signoria.webp',
  'fine-fragrance-mist-bath-body-works-touch-of-gold.webp',
  'florasis-polvo-2.webp',
  'florasis-polvo.jpg',
  'florasis-polvo.webp',
  'florasis-sombras-de-ojos.jpg',
  'flowers-knows-rubor-compacto.jpg',
  'hermes-jardin-diacovery-set.webp',
  'hermes-paris-rubor-compacto.webp',
  'huda-beauty-polvo.webp',
  'hung-vanngo-sombras-de-ojos-pink-violet.webp',
  'iphone-case-rhode-phone-case-lemontini-yellow.webp',
  'iphone-case-rhode-phone-case-raspberry-jelly.webp',
  'iphone-case-rhode-phone-case-rosa-ribbon.avif',
  'iphone-case-rhode-phone-case-rosa-salte-tan.avif',
  'iphone-case-rhode-phone-case-unscented-sans.webp',
  'jeffree-star-polvo.jpg',
  'jeffree-star-polvo.webp',
  'kiko-milano-cosmetiquera-con-lip-y-delineador.webp',
  'kiko-milano-delineador-en-crema.jpg',
  'kiko-milano-false-lashes-concentrate.jpg',
  'kiko-milano-foundation.webp',
  'kiko-milano-lipgloss-bridgerton-serie.jpg',
  'kiko-milano-longeyes-care-mascara.avif',
  'kiko-milano-maxi-mod-long-lasting.jpg',
  'kiko-milano-sombras-de-ojos-bridgerton.jpg',
  'kiko-milano-sombras-de-ojos-lasting-mousse.jpg',
  'kiko-milano-top-coat-mascara.avif',
  'kosas-polvo.webp',
  'kurt-geiger-tamano-mediano-negra-con-brillo.webp',
  'kurt-geiger-tamano-mediano-negra-con-textura.jpg',
  'kurt-geiger-tamano-mediano-negra-mono-dorado.jpg',
  'kurt-geiger-tamano-mediano-nude.webp',
  'kurt-geiger-tamano-mediano-tote-negra.jpg',
  'l-a-girl-spray-fijador-de-maquillaje.webp',
  'la-a-girl-liquid-concealer.jpg',
  'laura-geller-liquid-concealer.webp',
  'laura-geller-rubor-horneado.jpg',
  'laura-geller-sombras-de-ojos.jpg',
  'laura-geller-sombras-de-ojos.webp',
  'laura-mercier-foundation.webp',
  'laura-mercier-polvo.avif',
  'laura-mercier-spray-fijador-de-maquillaje.avif',
  'makeup-by-mario-blush-en-crema.webp',
  'makeup-by-mario-rubor-compacto.webp',
  'makeup-by-mario-sombras-de-ojos-original-palette.avif',
  'moira-beauty-brow-pencil.webp',
  'moira-beauty-chic-satin-lipstick-chic-nude.webp',
  'moira-beauty-chic-satin-lipstick-millenium.webp',
  'moira-beauty-chic-satin-lipstick-rewind.webp',
  'moira-beauty-chic-satin-lipstick-y2k.jpg',
  'moira-beauty-lip-chic-shimmer-gloss-2.jpeg',
  'moira-beauty-lip-chic-shimmer-gloss-3.jpeg',
  'moira-beauty-lip-chic-shimmer-gloss.webp',
  'moira-beauty-liquid-blush.webp',
  'moira-beauty-love-heat-crema-blush.webp',
  'moira-beauty-marvelous-baked-blush.webp',
  'moira-beauty-polvo.webp',
  'moira-beauty-signature-lip-pensil-barely.avif',
  'moira-beauty-signature-lip-pensil-honey-rose.avif',
  'moira-beauty-signature-lip-pensil-posh-pink.webp',
  'moira-spray-fijador-de-maquillaje.avif',
  'moira-spray-fijador-de-maquillaje.webp',
  'morphe-sombras-de-ojos.avif',
  'morphe-trio-blush.webp',
  'nars-foundation.webp',
  'nars-lipstick.avif',
  'nars-polvo.avif',
  'nars-polvo.jpg',
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
  'pat-mcgrath-labs-sombras-de-ojos.webp',
  'pat-mcgrath-lipstick.webp',
  'pat-mcgrath-rubor-compacto.webp',
  'rare-beauty-lipgloss.jpg',
  'revolution-brow-gel.jpg',
  'revolution-brow-gel.webp',
  'rhode-peptide-lip-tint.webp',
  'rhode-pocket-blush.webp',
  'saie-cosmetics-blush-liquido.webp',
  'saie-spray-fijador-de-maquillaje.webp',
  'shimmer-mist-bath-body-works-platinum.webp',
  'shimmer-mist-bath-body-works-toast-of-you.webp',
  'shimmer-mist-bath-body-works-touch-of-gold.webp',
  'siia-cosmetics-lipgloss.webp',
  'siia-cosmetics-liquid-concealer.webp',
  'skin-care-azure-day-cream-retinol-colageno.webp',
  'skin-care-azure-duo-crema-day-night.jpg',
  'skin-care-azure-mascara-colageno.avif',
  'skin-care-azure-mascara-retinol-hyaluronic.jpg',
  'skin-care-azure-serum-retinol-hyaluronic.avif',
  'skin-care-azure-serum-vitamin-c-colageno.avif',
  'skin-care-azure-serum-vitamina-e-retinol.webp',
  'skin-care-azure-vitamina-c-colageno.webp',
  'skin-care-bfda-complexion-cream.jpg',
  'skin-care-bfda-glowing-serum.jpg',
  'skin-care-byoma-best-seller-collection-set.png',
  'skin-care-byoma-brightening-toner.webp',
  'skin-care-byoma-creamy-jelly-face.jpg',
  'skin-care-byoma-hydrating-milky-toner.webp',
  'skin-care-centella-mascarilla-rostro-probio.webp',
  'skin-care-clear-duo-crema-24k-gold.jpg',
  'skin-care-clear-eyes-serum-24k-gold-korea.jpg',
  'skin-care-estee-lauder-set-completo-day-night.avif',
  'skin-care-holika-holika-bab-de-caracol-emulcion.avif',
  'skin-care-holika-holika-baba-de-caracol-crema.webp',
  'skin-care-licorne-facial-vegan-cream-korea.webp',
  'skin-care-licorne-serum-vegan-rice-korea.webp',
  'skin-care-licorne-toner-vegan-rice-korea.webp',
  'skin-care-medicube-pdrn-salmon-sperm-cream.webp',
  'skin-care-medicube-pdrn-salmon-sperm-gel-mask.jpg',
  'skin-care-medicube-pdrn-salmon-sperm-serum.jpg',
  'skin-care-ordinary-set-ordinary.webp',
  'sol-de-janeiro-cheirosa-62-rosado.jpg',
  'sol-de-janeiro-cheirosa-68-amarilla.jpg',
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

function findImage(
  categoria: string,
  marca: string,
  producto: string,
  tono?: string | number,
): string {
  const cSlug = slugify(categoria);
  const mSlug = slugify(marca);
  const pSlug = slugify(producto);

  const prefixes = [`${cSlug}-${mSlug}-${pSlug}`, `${mSlug}-${pSlug}`];

  if (tono !== undefined) {
    const tSlug = slugify(String(tono));
    for (const prefix of prefixes) {
      const withTono = IMAGE_FILES.find((f) => {
        const base = f.replace(/\.[^.]+$/, '');
        return base === `${prefix}-${tSlug}` || base.startsWith(`${prefix}-${tSlug}-`);
      });
      if (withTono) return `/images/products/${withTono}`;
    }
  }

  for (const prefix of prefixes) {
    const productImg = IMAGE_FILES.find((f) => {
      const base = f.replace(/\.[^.]+$/, '');
      return base === prefix || base.startsWith(`${prefix}-`);
    });
    if (productImg) return `/images/products/${productImg}`;
  }
  return '';
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
    const categoria = entry.categoria.trim();
    const slug = slugify(`${categoria}-${marca}-${producto}`);

    if (!map.has(slug)) {
      map.set(slug, {
        slug,
        marca,
        producto,
        categoria,
        variants: [],
        defaultImage: '',
      });
    }

    const group = map.get(slug)!;
    const tonoStr = String(entry.tono).trim();
    const variantId = `${slug}__${slugify(tonoStr)}`;
    const imagePath = findImage(categoria, marca, producto, entry.tono);

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
