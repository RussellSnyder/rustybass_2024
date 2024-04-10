// export const getThumbnail = (media: Media | undefined) => {
//   if (!media) {
//     console.error("No media provided");
//     return "";
//   }
//   const thumbnail = `${process.env.NEXT_PUBLIC_STRAPI_BASE}${media.attributes.formats?.thumbnail?.url}`;
//   const url = `${process.env.NEXT_PUBLIC_STRAPI_BASE}${media.attributes.url}`;

import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from "@cloudinary/url-gen/actions/resize";
//   return thumbnail ?? url;
// };
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

export const getCloudinaryUrl = (imageId: string | undefined) => {
  if (!imageId) {
    console.error("No imageId provided");
    return "";
  }

  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${imageId}`;
};

const getCloudinaryImage = (imageId: string | undefined) => {
  if (!imageId) {
    throw new Error("No imageId provided");
  }
  return cld.image(imageId);
};

export const getBlogPostImage = (imageId: string | undefined) => {
  return getCloudinaryImage(imageId).resize(fill().width(1000).height(250));
};

export const isCloudinaryImage = (src: string) => src.startsWith("**cdn**");

export const getMarkdownImageSrc = (originalSrc: string) => {
  const imageId = originalSrc.substring(7, originalSrc.length);

  return getCloudinaryImage(imageId).resize(fill().width(500).height(250));
};

export const getThumbnail = (imageId: string | undefined) => {
  return getCloudinaryImage(imageId).resize(thumbnail().width(200).height(250));
};

export const getImageUrl = (imageId: string | undefined) => {
  if (!imageId) {
    console.error("No imageId provided");
    return "";
  }

  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${imageId}`;
};
