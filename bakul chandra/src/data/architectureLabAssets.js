// Architecture Lab portraits.
// Source cards are in /public/articlee. The copies in /public/architecture-lab
// are cropped so no quote text sits on the photo, and duplicate cards are removed.
const LAB_IMAGE_COUNT = 83;

export const architectureLabAssets = Array.from({ length: LAB_IMAGE_COUNT }, (_, index) => {
  const n = String(index + 1).padStart(2, '0');
  return {
    id: 1000 + index,
    src: `/architecture-lab/lab-${n}.jpg`,
    title: `Architecture Study ${index + 1}`,
    location: '',
    desc: 'Image courtesy of Architecture Lab.',
    aspectRatio: 'aspect-[4/3]',
    category: 'ARCHITECTURE LAB',
  };
});
