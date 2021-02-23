import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image"

const HomePage = () => (
  <Layout pageTitle= 'HomePage'>
    <h1>Hi, Welcome to my site!</h1>
    <StaticImage
        alt="A reddish brown pitbull looking longingly at the camera from behind a mason jar of overnight oats"
        src="https://pbs.twimg.com/media/EsW978QUcAAj1Pe?format=jpg&name=4096x4096"
        placeholder="tracedSVG"
      />
    <Link to='/about'> Go to about page</Link>
  </Layout>
);

export default HomePage;
