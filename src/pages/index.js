import React, { Component } from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import ProductList from "./PortfoliotList"
import { data } from "./data"
//import Image from "../components/image"
import SEO from "../components/seo"
import About from "./about"
import Skills from "./skills"
import Portfolio from "./portfolio"
import Recources from "./resources"
import Contact from "./contact"

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      products: data,
      //productcopy: [],
      productcopy: data,
      btn: ["All", "React", "Javascript", "Vue", "Gatsby"],
    }
  }
  
 

  // Filtering button goes here
  handleBtn = event => {

    let productcopy
    if (event.target.value === "All") {
      productcopy = this.state.products
    } else {
      productcopy = this.state.products.filter(
        item => item.slag === event.target.value
      )
    }

    this.setState({
      productcopy: productcopy,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
        <Skills />

        <ProductList
          products={this.state.productcopy}
          handleBtn={this.handleBtn}
          btn={this.state.btn}
        />

        <Portfolio />
        <Recources />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
