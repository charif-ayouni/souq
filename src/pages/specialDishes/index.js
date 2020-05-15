import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SpecialDishesPage from "../../components/specialDishes";

const SpecialDishes = () => (
  <Layout>
    <SEO title="Nos Recettes spéciales" />
    <SpecialDishesPage />
  </Layout>
);

export default SpecialDishes