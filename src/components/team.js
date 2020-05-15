import React from "react"
import chef1 from "../images/chef-1.jpg";
import chef2 from "../images/chef-2.jpg";
import chef3 from "../images/chef-3.jpg";

const Team = () => (
  <section id="gtco-team" className="bg-white section-padding">
    <div className="container">
      <div className="section-content">

        <div className="heading-section text-center">
          <span className="subheading">
            Notre
          </span>
          <h2>
            Équipe
          </h2>
        </div>

        <div className="row">

          <div className="col-md-4">
            <div className="team-card mb-5">
              <img className="img-fluid" src={chef1} alt=""/>
              <div className="team-desc">
                <h4 className="mb-0">Charif AYOUNI</h4>
                <p className="mb-1">CEO</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-card mb-5">
              <img className="img-fluid" src={chef2} alt=""/>
              <div className="team-desc">
                <h4 className="mb-0">XXXX xxxx</h4>
                <p className="mb-1">Chef</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-card mb-5">
              <img className="img-fluid" src={chef3} alt=""/>
              <div className="team-desc">
                <h4 className="mb-0">YYYY yyy</h4>
                <p className="mb-1">Chef</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Team
