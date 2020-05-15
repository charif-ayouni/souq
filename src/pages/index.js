import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/owlCarousel";
import Welcome from "../components/welcome";
import SpecialDishes from "../components/specialDishes";
import Menu from "../components/menu";
import Testimony from "../components/testimony";
import Team from "../components/team";
import Contact from "../components/contact";

const IndexPage = () => (
    <Layout>
      <SEO title="Accueil" />
      <Carousel />
      <Welcome />
      <SpecialDishes />
      <Menu />
      <Testimony />
      <Team />
      <Contact />
    </Layout>
);

export default IndexPage
