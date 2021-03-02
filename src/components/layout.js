import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {container,heading,navLinks,title} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <main className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <h1 className={title}>{data.site.siteMetadata.title}</h1>
      <nav>
        <ul className={navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
