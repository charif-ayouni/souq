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
                  Contactez-nous
                </h2>
              </div>
              <form method="post" name="contact" action="/contact/success" data-netlify="true">
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Nom"
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Téléphone"
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Votre message ..."
                      required
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <input type="hidden" name="form-name" value="contact" />
                    <button className="btn btn-primary btn-shadow btn-lg" type="submit" name="submit">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact