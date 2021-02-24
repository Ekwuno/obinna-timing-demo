import React from "react";
import Layout from "../components/layout";
import { Link,graphql } from "gatsby";

const BlogPost = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
          <ul>
            {
                data.allMdx.edges.map(({node:blog})=>(

                    <li>
                        <article>
                            <h2>
                                <Link to = {blog.slug}>{blog.frontmatter.title}</Link>
                            </h2>
                            <p>Posted : {blog.frontmatter.date}</p>
                        </article>
                    </li>

                ))
            }
          </ul>
        </Layout>
      );
};

export const query = graphql`
 query MyQuery {
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        slug
        
      }
    }
  }
}

`;

export default BlogPost;
