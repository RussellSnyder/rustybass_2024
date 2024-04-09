// export const getThumbnail = (media: Media | undefined) => {
//   if (!media) {
//     console.error("No media provided");
//     return "";
//   }
//   const thumbnail = `${process.env.NEXT_PUBLIC_STRAPI_BASE}${media.attributes.formats?.thumbnail?.url}`;
//   const url = `${process.env.NEXT_PUBLIC_STRAPI_BASE}${media.attributes.url}`;

//   return thumbnail ?? url;
// };

export const getImageUrl = (imageId: string | undefined) => {
  if (!imageId) {
    console.error("No imageId provided");
    return "";
  }

  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${imageId}`;
};

export const getThumbnail = (imageId: string | undefined) => {
  // TODO make image smaller
  return getImageUrl(imageId);
};
