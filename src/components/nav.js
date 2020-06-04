import React from "react"
import PropTypes from "prop-types";
import {Link} from "gatsby"

const Nav = ({siteTitle, current}) => {

  var routes = {
    left: [
      {
        label : 'Accueil',
        url : '/'
      },
      {
        label : 'Notre spécialité',
        url : '/dishes'
      },
      {
        label : "l'Équipe",
        url : '/team'
      }
    ],
    right : [
      {
        label: 'Nous contacter',
        url: '/contact'
      },
      {
        label: 'Mon panier',
        url: '/cart'
      }
    ]
  };

  return (
    <nav id="navbar-header" className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile logo-font" to="/">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="lnr lnr-menu" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-center">
            <div className="d-flex flex-lg-row flex-column">
              {
                routes.left.map( (route, index) => {
                  return <Li key={index} route={route} current={current} />
                })
              }
            </div>
          </ul>
          <Link className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop logo-font" to="/">{siteTitle}</Link>
          <ul className="navbar-nav d-flex justify-content-center">
            <div className="d-flex flex-lg-row flex-column">
              {
                routes.right.map( (route, index) => {
                  return <Li key={index} route={route} current={current} />
                })
              }
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
};

const Li = (props) => {

  if(props.route.url === '/cart'){
    return (
      <li className="nav-item">
        <Link className="nav-link header__checkout snipcart-checkout">
          <span className="lnr lnr-cart mr-2">
            <span className="snipcart-items-count"></span>
          </span>
          {props.route.label}
        </Link>
      </li>
    )
  }

  return (
    <li className={props.route.url === props.current ? 'nav-item active' : 'nav-item'}>
      <Link className="nav-link" to={props.route.url}>
        {props.route.label}
      </Link>
    </li>
  )
};

Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: `Souq`,
};

export default Nav