import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/owlCarousel";
import {graphql} from "gatsby";

export const Query = graphql`{
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "special"}}}) {
      edges {
        node {
          frontmatter {
            title
            image
          }
        }
      }
    }
}`;

const IndexPage = ({data}) => {
    return(
      <Layout >
        <SEO title = "Accueil" />
        <Carousel data={data.allMarkdownRemark.edges}/>
      </Layout>
    )
};

export default IndexPage
