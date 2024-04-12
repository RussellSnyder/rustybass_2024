import { AdvancedImage } from "@cloudinary/react";
import fm from "front-matter";
import { useEffect, useState } from "react";

// TODO figure out how to get this to work with SSR
const Markdown = dynamic(() => import("markdown-to-jsx"), { ssr: false });

import "highlight.js/styles/a11y-dark.min.css";
import { marked } from "marked";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { BlogPost } from "../../../../types/__generated__/api/blog-post/content-types/blog-post/blog-post";
import { overrides } from "../../../components/markdown-components";
import { getBlogPostImage } from "../../../utils/image";

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
      htmlString,
    },
  };
};

interface PostProps {
  post: BlogPost["attributes"];
  markdown: string;
  htmlString: string;
}

const BlogPost = ({ post, markdown, htmlString }: PostProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="mt-8">
        <h1 className="text-6xl mb-12">{post.title}</h1>
        <AdvancedImage
          className="mb-8"
          cldImg={getBlogPostImage(post.imageId)}
        />
        {isClient ? (
          <Markdown
            wrapper="article"
            options={{
              overrides,
            }}
          >
            {markdown}
          </Markdown>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        )}
      </div>
    </>
  );
};

export default BlogPost;
