import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ContactPage from "../../components/contact";

const Contact = () => (
  <Layout>
    <SEO title="Nous contacter" />
    <ContactPage />
  </Layout>
);

export default Contact