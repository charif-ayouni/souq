import React from "react"
import backgroundImage from "../images/welcome.jpg";
import dishe1 from "../images/Couscous-agneau.png";
import dishe2 from "../images/Couscous-poulet-merguez.jpg";
import dishe3 from "../images/Tajine-poulet-olives.jpg";

const Welcome = () => (
  <section id="gtco-welcome" className="bg-white section-padding">
    <div className="container">
      <div className="section-content">
        <div className="row">
          <div className="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2" style={{backgroundImage: `url(${backgroundImage})`}}>
          </div>
          <div className="col-sm-7 py-5 pl-md-0 pl-4">
            <div className="heading-section pl-lg-5 ml-md-5">
              <span className="subheading">
                  À propos
              </span>
              <h2>
                Bienvenue chez <span className="logo-font">Souq</span>
              </h2>
            </div>
            <div className="pl-lg-5 ml-md-5">
              <p>
                <span className="logo-font" style={{fontSize: '1.4rem'}}>Souq</span> est un des premiers restaurant algérien traditionnal de Paris. Fondé en 2018.
                <br/>
                Plusieurs recettes de couscous et de Tadjines vous attendent chez nous. Nous proposons également des pastillas, des brochettes, du méchoui, ainsi que des bricks et des patisseries orientale.
              </p>
              <h3 className="mt-5">Notre spécialité</h3>
              <div className="row">
                <div className="col-4">
                  <a href="/" className="thumb-menu">
                    <img className="img-fluid img-cover" src={dishe1} alt="Couscous poulet et merguez"/>
                    <h6>Couscous poulet et merguez</h6>
                  </a>
                </div>
                <div className="col-4">
                  <a href="/" className="thumb-menu">
                    <img className="img-fluid img-cover" src={dishe2} alt="Couscous algérien à l'agneau"/>
                    <h6>Couscous algérien à l'agneau</h6>
                  </a>
                </div>
                <div className="col-4">
                  <a href="/" className="thumb-menu">
                    <img className="img-fluid img-cover" src={dishe3} alt="Tadjine de poulet aux olives"/>
                    <h6>Tadjine de poulet aux olives</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Welcome
