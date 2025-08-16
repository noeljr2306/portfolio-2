export const optimizeImage = (src) => {
  return `${src}?format=webp`;
};

export const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = optimizeImage(src);
  });
};
