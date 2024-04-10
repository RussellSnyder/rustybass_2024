import { AdvancedImage } from "@cloudinary/react";
import { getMarkdownImageSrc, isCloudinaryImage } from "../utils/image";

const Image = ({ ...props }) => {
  if (!isCloudinaryImage(props.src)) {
    return <img {...props} />;
  }
  return <AdvancedImage {...props} cldImg={getMarkdownImageSrc(props.src)} />;
};

const H1 = ({ ...props }) => {
  return <h1 className="text-8xl font-bold" {...props} />;
};

const H2 = ({ ...props }) => {
  return <h2 {...props} className="text-4xl font-bold mb-6" />;
};

const P = ({ ...props }) => {
  return <p {...props} className="text-lg mb-4" />;
};

const Blockquote = ({ ...props }) => (
  <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
    <p
      {...props}
      className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white"
    />
  </blockquote>
);

export const overrides = {
  img: Image,
  h1: H1,
  h2: H2,
  p: P,
  blockquote: Blockquote,
};
