import { Media } from "../../types/__generated__/common/schemas-to-ts/Media";

export const getThumbnail = (media: Media | undefined) => {
  if (!media) {
    console.error("No media provided");
    return "";
  }
  const thumbnail = `${process.env.NEXT_PUBLIC_STRAPI_BASE}${media.attributes.formats?.thumbnail?.url}`;
  const url = `${process.env.NEXT_PUBLIC_STRAPI_BASE}${media.attributes.url}`;

  return thumbnail ?? url;
};
