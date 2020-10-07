import React from "react"
import { Button } from "../ButtonStyled"
import "./HeroStyles.css"
import { Typography, Box } from "@material-ui/core"
import Typed from "react-typed"

function Hero() {
  return (
    <Box className="hero-container">
      <Typography className="title" variant="h1">
        <Typed strings={["Ola, Hey I'm Jelson J"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className="subtitle" variant="h2">
        <Typed
          strings={["Front-End", "Developer", "Freelance"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Button fontXl big>
        Red More
      </Button>
    </Box>
  )
}

export default Hero
