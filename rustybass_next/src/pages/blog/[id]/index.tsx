import fm from "front-matter";
import { marked } from "marked";
import Head from "next/head";
import Image from "next/image";
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
    `${process.env.NEXT_PUBLIC_STRAPI_API}/blog-posts/${params.id}?populate=featuredImage`
  );
  const result = await response.json();
  const parsedMarkdown = fm(result.data.attributes.body);
  const htmlString = marked(parsedMarkdown.body);
  const featuredImage = result.data.attributes.featuredImage.data;

  return {
    props: {
      featuredImage,
      htmlString,
      data: parsedMarkdown.attributes,
    },
  };
};

interface PostProps {
  data: BlogPost["attributes"];
  featuredImage: Media;
  htmlString: string;
}

export default function Post({ featuredImage, htmlString, data }: PostProps) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className={styles.post}>
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_BASE}${featuredImage.attributes.url}`}
          alt="blog-post"
          priority={true}
          className="rounded-xl w-full"
          width={featuredImage.attributes.width}
          height={featuredImage.attributes.height}
        />
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </>
  );
}
