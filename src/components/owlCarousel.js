import React, {Component} from "react";
import OwlCarousel from 'react-owl-carousel2';
import '../assets/owl.css'
import dishe1 from "../images/Couscous-agneau.png";
import dishe2 from "../images/Couscous-poulet-merguez.jpg";
import dishe3 from "../images/Tajine-poulet-olives.jpg";
import {Link} from "gatsby";


export default class Add extends Component {

  render() {
    const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {0: {items: 1}, 600: {items: 1}},
      navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>']
    };

    const events = {
      //onDragged: function(event) {...},
      //onChanged: function(event) {...}
    };

    return (
      <div className="hero">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 hero-left">
              <h1 className="display-4 mb-0">Faites vous plaisir</h1>
              <h1 className="display-4 mb-5">Vous le méritez bien !</h1>
              <div className="mb-2">
                <Link className="btn btn-primary btn-shadow btn-lg" to="#gtco-special-dishes">Voir notre spécialité</Link>
              </div>

              <ul className="hero-info list-unstyled d-flex text-center mb-0">
                <li className="border-right">
                  <span className="lnr lnr-rocket text-danger"></span>
                  <h5>
                    Livraison rapide
                  </h5>
                </li>
                <li className="border-right">
                  <span className="lnr lnr-leaf text-success"></span>
                  <h5>
                    Produits Bio
                  </h5>
                </li>
                <li className="">
                  <span className="lnr lnr-bubble text-info"></span>
                  <h5>
                    24/7 Support
                  </h5>
                </li>
              </ul>

            </div>
            <div className="col-lg-6 hero-right">
              <OwlCarousel ref="car" options={options} events={events} className="owl-carousel owl-theme hero-carousel">
                <div className="item">
                  <img className="img-fluid" src={dishe1} alt="Couscous algérien à l'agneau"/>
                </div>
                <div className="item">
                  <img className="img-fluid" src={dishe2} alt="Couscous poulet et merguez" />
                </div>
                <div>
                  <img className="img-fluid" src={dishe3} alt="Tadjine de poulet aux olives" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}