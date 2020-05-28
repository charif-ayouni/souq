import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Personage from "../../components/personage";
import {graphql} from "gatsby";

export const query = graphql`{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/teams/"}}) {
    edges {
      node {
        frontmatter {
          fullname,
          job,
          image,
          path
        }
        fileAbsolutePath
      }
    }
  }
}`;

const Team = ({data}) => {
  return (
    <Layout>
      <SEO title="L'Équipe"/>
      <section id="gtco-team" className="bg-white section-padding">
        <div className="container">
          <div className="section-content">
            <div className="heading-section text-center">
              <span className="subheading">Notre</span><h2>Équipe</h2>
            </div>
            <div className="row">
              {
                data.allMarkdownRemark.edges.map((personage) => {
                  return <Personage data={personage} />
                })
              }
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};

export default Team