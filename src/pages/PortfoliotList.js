import React from "react"
import SinglePortfolio from "./SinglePortfolio"
import "../components/Filter/filter.css"
//import { Button } from "@material-ui/core"
//import { makeStyles } from "@material-ui/core/styles"

//Styles
//const useStyles = makeStyles(theme => ({}))

const PortfolioList = props => {
  return (
    <>
      <div className="btns">
        <button className="btnTest" value="All" onClick={props.handleBtn}>
          All
        </button>
        <button className="btnJs" value="javascript" onClick={props.handleBtn}>
          JavaScript
        </button>
        <button className="btnreact" value="react" onClick={props.handleBtn}>
          React.js
        </button>
        <button className="btnvue" value="vue" onClick={props.handleBtn}>
          Vue.js
        </button>
        <button className="btngatsby" value="gatsby" onClick={props.handleBtn}>
          Gatsby.js
        </button>
        <button className="btnnode" value="node" onClick={props.handleBtn}>
          Node.js
        </button>
      </div>
      <div className="blog">
        {props.products.map(item => {
          return <SinglePortfolio key={item.id} item={item} />
        })}
      </div>
    </>
  )
}

export default PortfolioList
