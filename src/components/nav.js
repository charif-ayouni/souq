import React from "react"
import PropTypes from "prop-types";
import { Link } from "gatsby"

const Nav = ({ siteTitle }) => (
  <nav id="navbar-header" className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile logo-font" to="/">{siteTitle}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="lnr lnr-menu"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex justify-content-center">
          <div className="d-flex flex-lg-row flex-column">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specialDishes/">Notre spécialité</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team/">l'Équipe</Link>
            </li>
          </div>
        </ul>
        <Link className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop logo-font" to="/">{siteTitle}</Link>
        <ul className="navbar-nav d-flex justify-content-center">
          <div className="d-flex flex-lg-row flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/contact/">Nous contacter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart/">Mon panier</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
);

Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: `Souq`,
};

export default Nav