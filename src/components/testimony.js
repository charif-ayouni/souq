import React, {Component} from "react"
import OwlCarousel from 'react-owl-carousel2';
import '../assets/owl.css'

import testimony from "../images/testimony.jpg";

export default class Add extends Component {
  render() {
    const options = {
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      dotSpeed: 1e3,
      autoplay: true,
      items: 1
    };

    const events = {
      //onDragged: function(event) {...},
      //onChanged: function(event) {...}
    };
    return (
      <section id="gtco-testimonial" className="overlay bg-fixed section-padding" style={{backgroundImage: `url(${testimony})`}}>
        <div className="container">
          <div className="section-content">
            <div className="heading-section text-center">
              <h2>
                Ils parlent de nous
              </h2>
            </div>
            <div className="row">
              <OwlCarousel ref="car" options={options} events={events} className="testi-content testi-carousel owl-carousel">
                <div className="testi-item">
                  <i className="testi-icon fa fa-3x fa-quote-left"></i>
                  <p className="testi-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                  <p className="testi-author">John Doe</p>
                  <p className="testi-desc">CEO of <span>GetTemplates</span></p>
                </div>
                <div className="testi-item">
                  <i className="testi-icon fa fa-3x fa-quote-left"></i>
                  <p className="testi-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non
                    doloribus ut, alias doloremque perspiciatis.
                  </p>
                  <p className="testi-author">Mary Jane</p>
                  <p className="testi-desc">CTO of <span>Unidentity Inc</span></p>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
