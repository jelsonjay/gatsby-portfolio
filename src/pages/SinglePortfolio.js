import React from "react"

function SinglePortfolio(props) {
  return (
    <div className="grid">
      <img className="group-image" src={props.item.image} alt="Avatar" />
      <h1>{props.item.title}</h1>
      <p>{props.item.story}</p>
    </div>
  )
}

export default SinglePortfolio
