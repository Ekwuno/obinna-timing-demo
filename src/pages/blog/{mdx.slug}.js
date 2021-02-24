import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPosts = ({ data }) => {
  return (
    <Layout>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        date(formatString: "MM DD YYYY")
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(
              formats: [JPG, WEBP, AVIF]
              placeholder: TRACED_SVG
              avifOptions: { speed: 10 }
            )
          }
        }
      }
      slug
      body
    }
  }
`;

export default BlogPosts;
