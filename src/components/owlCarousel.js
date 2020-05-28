import React from "react";
import OwlCarousel from 'react-owl-carousel2';
import '../assets/owl.css'
import {Link} from "gatsby";


const ulData = [
  {
    label : 'Livraison rapide',
    className : 'lnr lnr-rocket text-danger'
  },
  {
    label : 'Produits Bio',
    className : 'lnr lnr-leaf text-success'
  },
  {
    label : '24/7 Support',
    className : 'lnr lnr-bubble text-info'
  },
];
const Carousel = ({data}) => {
  return(
    <div className="hero">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 hero-left">
            <h1 className="display-4 mb-0">Faites vous plaisir</h1>
            <h1 className="display-4 mb-5">Vous le méritez bien !</h1>
            <div className="mb-2">
              <Link className="btn btn-primary btn-shadow btn-lg" to="/dishes">Voir notre spécialité</Link>
            </div>
            <ul className="hero-info list-unstyled d-flex text-center mb-0">
              {
                ulData.map((li, index, array) => {
                  const last = (index === array.length - 1 );
                  return <LiFooter data={li} last={last} />
                })
              }
            </ul>
          </div>
          <div className="col-lg-6 hero-right">
            <Owl data={data}/>
          </div>
        </div>
      </div>
    </div>
  )

};

const Owl = (props) => {
  const events = {
    //onDragged: function(event) {...},
    //onChanged: function(event) {...}
  };
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {0: {items: 1}, 600: {items: 1}},
    navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>']
  };

  return(
    <OwlCarousel options={options} events={events} className="owl-carousel owl-theme hero-carousel">
      {
        props.data.map((item) => {
          return <OwlItem data={item.node.frontmatter} />
        })
      }
    </OwlCarousel>
  )
};
const OwlItem = (props) => {
  return (
    <div className="item">
      <img className="img-fluid" src={props.data.image} alt={props.data.title} />
    </div>
  )
};
const LiFooter = (props) => {
  return(
    <li className={ props.last ? '' : 'border-right'}>
      <span className={props.data.className} />
      <h5>
        {props.data.label}
      </h5>
    </li>
  )
}

Carousel.propTypes = {};
export default Carousel