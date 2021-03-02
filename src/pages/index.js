import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage,GatsbyImage,getImage } from "gatsby-plugin-image";

const HomePage = ({ data }) => (
  <Layout pageTitle="HomePage">
    <h1>Hi, Welcome to my site!</h1>
    <StaticImage
      alt="A reddish brown pitbull looking longingly at the camera from behind a mason jar of overnight oats"
      src="https://pbs.twimg.com/media/EsW978QUcAAj1Pe?format=jpg&name=4096x4096"
      placeholder="tracedSVG"
    />
    <ul>
      {data.allContentfulCity.edges.map(({ node: City }) => {

        return(
          <>
          <Link>
          <li style = {{
            
            listStyleType: "none",
            float:"left",
            textAlign:"center",
            backgroundColor:"white",
            marginRight: "30px",
            
        
            }}key = {City.id}>{City.name}
            
          </li>
          </Link>
          
          
         </>
        )
        
      })}
    </ul>
  </Layout>
);

export const query = graphql`
  query {
  allContentfulCity {
    edges {
      node {
        name
        description
        id
        image {
          gatsbyImageData(formats: WEBP, placeholder: TRACED_SVG)

        }
      }
    }
  }
}
`;

export default HomePage;
