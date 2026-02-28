/* ================= TYPES ================= */

interface GalleryItem {
  image: string
}

/* ================= IMAGES ================= */

export const slide = ref<GalleryItem[]>([
  { image: '/gallery/gallery-two.webp' },
  { image: '/gallery/gallery-six.webp' },
  { image: '/gallery/gallery-one.webp' },
  { image: '/gallery/gallery-thirteen.webp' },
  { image: '/gallery/gallery-five.webp' },
  { image: '/gallery/gallery-fourteen.webp' },
  { image: '/gallery/gallery-four.webp' },
])

export const picture = ref<GalleryItem[]>([
  { image: '/gallery/gallery-five.webp' },
  { image: '/gallery/gallery-fourteen.webp' },
  { image: '/gallery/gallery-four.webp' },
]);

export const night = ref<GalleryItem[]>([
    { image: '/gallery/night-golf/night-golf-01.webp' },
    { image: '/gallery/night-golf/night-golf-02.webp' },
    { image: '/gallery/night-golf/night-golf-03.webp' },
    { image: '/gallery/night-golf/night-golf-04.webp' },
    { image: '/gallery/night-golf/night-golf-05.webp' },
    { image: '/gallery/night-golf/night-golf-06.webp' },
]);

export const nightPicture = ref<GalleryItem[]>([
    { image: '/gallery/night-golf/night-golf-04.webp' },
    { image: '/gallery/night-golf/night-golf-05.webp' },
    { image: '/gallery/night-golf/night-golf-06.webp' },
]);

