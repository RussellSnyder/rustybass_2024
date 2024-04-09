import fm from "front-matter";
import { marked } from "marked";
import Head from "next/head";
import { CldImage } from "next-cloudinary";
import { getImageUrl } from "../../../utils/image";
import { BlogPost } from "../../../../types/__generated__/api/blog-post/content-types/blog-post/blog-post";
import { Media } from "../../../../types/__generated__/common/schemas-to-ts/Media";
import styles from "./blog-post.module.css";

export const getStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/blog-posts`
  );
  const result = await response.json();
  const blogPosts: BlogPost[] = result.data;

  return {
    paths: blogPosts.map((blogPost) => ({
      params: { id: blogPost.id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/blog-posts/${params.id}`
  );
  const result = await response.json();
  const parsedMarkdown = fm(result.data.attributes.body);
  const post = result.data.attributes;
  const htmlString = marked(parsedMarkdown.body);
  const featuredImageUrl = getImageUrl(result.data.attributes.imageId);

  console.log(featuredImageUrl);
  return {
    props: {
      featuredImageUrl,
      htmlString,
      post,
    },
  };
};

interface PostProps {
  post: BlogPost["attributes"];
  featuredImageUrl: string;
  htmlString: string;
}

export default function Post({
  featuredImageUrl,
  htmlString,
  post,
}: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className={styles.post}>
        <h1>{post.title}</h1>
        <CldImage
          className={styles.thumbnail}
          alt={post.title ?? "blog post preview"}
          width="600"
          height="600"
          src={featuredImageUrl}
        />
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </>
  );
}
