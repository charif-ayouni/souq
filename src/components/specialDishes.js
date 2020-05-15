import React from "react"
import dishe1 from "../images/Couscous-agneau.png";
import dishe2 from "../images/Couscous-poulet-merguez.jpg";
import dishe3 from "../images/Tajine-poulet-olives.jpg";

const SpecialDishes = () => (
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
        <div className="row mt-5">
          <div className="col-lg-5 col-md-6 align-self-center py-5">
            <h2 className="special-number">01.</h2>
            <div className="dishes-text">
              <h3>
                <span>Couscous </span>
                <br/>
                poulet et merguez
              </h3>
              <p className="pt-3">
                <u>Les ingrédients :</u><br/>
                8 pilons de poulet (fermier de préférence),
                12 merguez,
                2 boîtes de concentré de tomates,
                3 cuillères à soupe d'épices à couscous,
                1 cuillère à café de harissa,
                2 cubes de bouillon de boeuf,
                3 tomates,
                10 navets,
                5 carottes,
                2 courgettes,
                400 g de pois chiches,
              </p>
              <h3 className="special-dishes-price">€15.00</h3>
              <a href="/" className="btn-primary mt-3">commander</a>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
            <img src={dishe2} className="img-fluid shadow w-100" alt="Couscous poulet et merguez"/>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-5 col-md-6 align-self-center order-2 order-md-1 mt-4 mt-md-0">
            <img src={dishe1} className="img-fluid shadow w-100" alt="Couscous algérien à l'agneau"/>
          </div>
          <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center order-1 order-md-2 py-5">
            <h2 className="special-number">02.</h2>
            <div className="dishes-text">
              <h3>
                <span>Couscous</span>
                <br/>
                algérien à l'agneau
              </h3>
              <p className="pt-3">
                <u>Les ingrédients :</u><br/>
                Quelques morceaux de viande g'agneau,
                2 oignons râpés,
                2 gousses d'ail râpées,
                1 tasse de pois-chiches,
                1 tomate,
                1 cuillère de concentré de tomates,
                8 carottes,
                1 branche de céleri,
                Sel, poivre,
                Piment selon votre goût

              </p>
              <h3 className="special-dishes-price">€12.00</h3>
              <a href="/" className="btn-primary mt-3">
                commander
                <span>
                  <i className="fa fa-long-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-5 col-md-6 align-self-center py-5">
            <h2 className="special-number">03.</h2>
            <div className="dishes-text">
              <h3>
                <span>Tadjine </span>
                <br/>
                de poulet aux olives
              </h3>
              <p className="pt-3">
                <u>Les ingrédients :</u><br/>
                2 cuisses de poulet,
                1 belle poignée d’olives vertes,
                1 gros oignon,
                2 gousses d’ail,
                2 c. à soupe de jus de citron fraîchement pressé,
                2 c. à soupe d'épices à base de curry,
                2 c. à soupe de persil plat haché,
                3 c. à soupe d'huile d’olive,
                sel, poivre au goût
              </p>
              <h3 className="special-dishes-price">€15.00</h3>
              <a href="/" className="btn-primary mt-3">commander</a>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
            <img src={dishe3} className="img-fluid shadow w-100" alt="Tadjine de poulet aux olives"/>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default SpecialDishes
