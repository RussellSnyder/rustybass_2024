import { AdvancedImage } from "@cloudinary/react";
import fm from "front-matter";
import Markdown from "markdown-to-jsx";
import { marked } from "marked";
import Head from "next/head";
import type { BlogPost } from "../../../../types/__generated__/api/blog-post/content-types/blog-post/blog-post";
import { overrides } from "../../../components/markdown-components";
import { getBlogPostImage } from "../../../utils/image";
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
  const markdown = result.data.attributes.body;
  const parsedMarkdown = fm(result.data.attributes.body);
  const post = result.data.attributes;
  const htmlString = marked(parsedMarkdown.body);

  return {
    props: {
      post,
      markdown,
    },
  };
};

interface PostProps {
  post: BlogPost["attributes"];
  markdown: string;
}

const BlogPost = ({ post, markdown }: PostProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className={styles.post}>
        <h1 className="bg-slate-950">{post.title}</h1>
        <AdvancedImage cldImg={getBlogPostImage(post.imageId)} />
        <Markdown
          options={{
            overrides,
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </>
  );
};

export default BlogPost;
