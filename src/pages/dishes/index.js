import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Dishes from "../../components/specialDishes";
import {graphql} from "gatsby";

export const query = graphql`{
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "special"}}}) {
      edges {
        node {
          frontmatter {
            title
            price
            ingredients
            image
            path
            id
          }
        }
      }
    }
}`;
const SpecialDishes = ({data}) => {
  return(
    <Layout>
      <SEO title="Nos Recettes spéciales" />
      <section id="gtco-special-dishes" className="bg-grey section-padding">
        <div className="container">
          <div className="section-content">
            <div className="heading-section text-center">
              <span className="subheading">
                  Nos
              </span>
              <h2>
                Recettes spéciales
              </h2>
            </div>
            {
              data.allMarkdownRemark.edges.map((dishe, index) => {
                return <Dishes align={ index % 2 ? 'right' : 'left' } data={dishe} index={index+1} />
              })
            }
          </div>
        </div>
      </section>
    </Layout>
  )
};

export default SpecialDishes