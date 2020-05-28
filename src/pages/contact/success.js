import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import backgroundImage from "../../images/contact-bg.jpg";

const Contact = () => (
  <Layout>
    <SEO title="Nous contacter" />
    <section id="gtco-reservation" className="bg-fixed bg-white section-padding overlay" style={{backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 col-md-12">
            <div className="section-content bg-white p-5 shadow">
              <div className="heading-section text-center">
                <h2>
                  Merci pour votre message
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact