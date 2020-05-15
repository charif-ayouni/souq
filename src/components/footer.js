import React from "react"

const Footer = () => (
  <footer className="mastfoot pb-5 bg-white section-padding pb-0">
    <div className="inner container">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center">
          <p className="mx-auto text-center mb-0">
            Copyright {new Date().getFullYear()}. All Right Reserved. Design by {' '}
            <a href="https://gettemplates.co" target="_blank" rel="noopener noreferrer">GetTemplates</a>
          </p>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer