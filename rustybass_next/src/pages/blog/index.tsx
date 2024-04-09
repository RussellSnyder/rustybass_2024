import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../../../types/__generated__/api/blog-post/content-types/blog-post/blog-post";
import { getThumbnail } from "../../utils/image";
import styles from "./blog.module.css";

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/blog-posts?populate=featuredImage`
  );
  const result = await response.json();

  return {
    props: {
      blogPosts: result.data,
    },
  };
};

interface BlogProps {
  blogPosts: BlogPost[];
}

export default function Blog({ blogPosts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Rustybass Blog</title>
        <meta title="description" content="This is an example of our blog" />
      </Head>
      <div className={styles.container}>
        <h1>Blog Post Links:</h1>
        <div className={styles.card}>
          {blogPosts.map((blogPost) => {
            return (
              <div className={styles.flexing} key={blogPost.id}>
                <Link href={`/blog/${blogPost.id}`}>
                  <div className={styles.featuredImageContainer}>
                    <Image
                      src={getThumbnail(
                        blogPost.attributes.featuredImage?.data
                      )}
                      alt={
                        blogPost.attributes.featuredImage.data.attributes
                          .alternativeText
                      }
                      priority={true}
                      className={`${styles.thumbnail}`}
                      width={
                        blogPost.attributes.featuredImage.data.attributes.width
                      }
                      height={
                        blogPost.attributes.featuredImage.data.attributes.height
                      }
                    />
                  </div>
                  <h2>{blogPost.attributes.title}</h2>
                  <div>
                    <p>{blogPost.attributes.description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
