import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => (
  <Layout pageTitle= "About Me ">
    <h1>Hi, Welcome to my about page!</h1>

    <Link to='/'> Go to home page</Link>
  </Layout>
);

export default AboutPage;
