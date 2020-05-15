import React from "react"
import pastillas from "../images/Pastillas.png";
import brochettes from "../images/Brochettes.jpg";
import grillades from "../images/Grillades.webp";

const Menu = () => (
  <section id="gtco-menu" className="section-padding">
    <div className="container">
      <div className="section-content">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="heading-section text-center">
              <span className="subheading">
                Goûter
              </span>
              <h2>
                Autre recettes
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 menu-wrap">
            <div className="menus d-flex align-items-center">
              <div className="menu-img rounded-circle">
                <img className="img-fluid" src={pastillas} alt=""/>
              </div>
              <div className="text-wrap">
                <div className="row align-items-start">
                  <div className="col-8">
                    <h4>Pastillas</h4>
                  </div>
                  <div className="col-4">
                    <h4 className="text-muted menu-price">$8</h4>
                  </div>
                </div>
                <p>Plat traditionnel du Maghreb</p>
                <a href="/" className="btn-primary mt-3">commander</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 menu-wrap">
            <div className="menus d-flex align-items-center">
              <div className="menu-img rounded-circle">
                <img className="img-fluid" src={brochettes} alt=""/>
              </div>
              <div className="text-wrap">
                <div className="row align-items-start">
                  <div className="col-8">
                    <h4>Brochettes</h4>
                  </div>
                  <div className="col-4">
                    <h4 className="text-muted menu-price">$5</h4>
                  </div>
                </div>
                <p>Grillades de poulet, sauce spéciale</p>
                <a href="/" className="btn-primary mt-3">commander</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 menu-wrap">
            <div className="menus d-flex align-items-center">
              <div className="menu-img rounded-circle">
                <img className="img-fluid" src={grillades} alt=""/>
              </div>
              <div className="text-wrap">
                <div className="row align-items-start">
                  <div className="col-8">
                    <h4>Méchoui</h4>
                  </div>
                  <div className="col-4">
                    <h4 className="text-muted menu-price">$7</h4>
                  </div>
                </div>
                <p>Grillades d'agneau</p>
                <a href="/" className="btn-primary mt-3">commander</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Menu
