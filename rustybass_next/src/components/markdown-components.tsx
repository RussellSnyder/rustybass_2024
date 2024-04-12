import { AdvancedImage } from "@cloudinary/react";
import { getMarkdownImageSrc, isCloudinaryImage } from "../utils/image";
import { SyntaxHighlightedCode } from "./syntax-highlighted-code";

interface ExtraImageProps {
  layout?: "left" | "right"; // Default to full width
  background?: string;
}
const extraPropsRegex = /\*\*(.*?)\*\*/g;
const getExtraImageProps = (alt: string): ExtraImageProps => {
  if (!alt) return {};
  const extraPropsString = alt.match(extraPropsRegex);
  if (!extraPropsString) return {};
  const extraProps = extraPropsString[0].replace(/\*\*/g, "");
  const propPairs = extraProps.split(",");
  const propObject = propPairs.reduce((acc, propPair) => {
    const [key, value] = propPair.split(":");
    return { ...acc, [key]: value };
  }, {});
  return propObject;
};
const Image = ({ ...props }) => {
  const extraProps = getExtraImageProps(props.alt);
  const alt = props.alt ? props.alt.replace(extraPropsRegex, "") : "";
  const imgClassName = `w-full${
    extraProps.layout ? ` float-${extraProps.layout}` : ""
  }`;

  console.log({ extraProps });
  if (!isCloudinaryImage(props.src)) {
    return <img {...props} />;
  }

  const isLeftImage = extraProps.layout === "left";
  const isRightImage = extraProps.layout === "right";

  const image = (
    <AdvancedImage {...props} cldImg={getMarkdownImageSrc(props.src)} />
  );
  return (
    <figure
      role="group"
      aria-label={alt}
      className={`flex space-x-3 items-center justify-between bg-slate-700/50`}
    >
      {isLeftImage ? image : null}
      <figcaption className={`text-center w-full`}>{alt}</figcaption>
      {isRightImage ? image : null}
    </figure>
  );
};

const H1 = ({ ...props }) => {
  return <h1 className="text-8xl font-bold" {...props} />;
};

const H2 = ({ ...props }) => {
  return <h2 {...props} className="text-3xl font-bold mb-6" />;
};

const H3 = ({ ...props }) => {
  return <h2 {...props} className="text-2xl font-bold mb-4" />;
};

const P = ({ ...props }) => {
  return <p {...props} className="text-lg mb-4" />;
};

const Blockquote = ({ ...props }) => (
  <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-indigo-500 dark:bg-gray-800">
    <strong {...props} className="text-xl italic font-medium dark:text-white" />
  </blockquote>
);

export const overrides = {
  img: Image,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  blockquote: Blockquote,
  code: SyntaxHighlightedCode,
};
