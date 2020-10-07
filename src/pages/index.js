import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import About from "./about"
import Skills from "./skills"
import Portfolio from "./portfolio"
import Recources from "./resources"
import Contact from "./contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Recources />
    <Contact />
  </Layout>
)

export default IndexPage
