import React from "react"

const Personage = (props) => {
  const personage = props.data.node.frontmatter;
  return(
    <div className="col-md-4">
      <div className="team-card mb-5">
        <img className="img-fluid" src={personage.image} alt=""/>
        <div className="team-desc">
          <h4 className="mb-0">{personage.fullname}</h4>
          <p className="mb-1">{personage.job}</p>
        </div>
      </div>
    </div>
  )
};

export default Personage
