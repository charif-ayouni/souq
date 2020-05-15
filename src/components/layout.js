import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import Footer from "./footer"

import "../assets/bootstrap.min.css"
import "../assets/layout.css"
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="boxed-page">
        <Nav siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout