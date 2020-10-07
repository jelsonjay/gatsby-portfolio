import React from "react"
import SEO from "../components/seo"
import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

//Styles
const useStyles = makeStyles(theme => ({
  myContainer: {
    paddingTop: theme.spacing(3),
  },
  portfolioTitle: {
    fontWeight: 800,
    fontSize: "3rem",
    paddingTop: theme.spacing(3),
    textTransform: "uppercase",
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <div className="about" id="about">
      <SEO title="About" />

      <Container maxWidth="lg" className={classes.myContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="about-header">
              <h1>About</h1>
            </div>
            <h1 className="about-subtitle">Who's this guy?</h1>
            <p className="about-center">
              Hi, my name is Jelson J, a Freelance Front-end Developer &
              Designer. I'm very passionate about technologies, I spend much of
              my spare time learning and obsessing about the latest web
              technologies. I think it’s important to love doing what you do, so
              the passion will continue to motivate and improve your skills.
              <br />
              <br />
              Be a web developer must be a problem solving skills, I learn every
              day how to split large complex goals into small, simpler ones.
            </p>

            <p className="about-center">
              “Everyone in this country should learn how to program because it
              teaches you how to think” – <strong>Steve Jobs</strong>
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="about-item">
              <i className="fa fa-code"></i>
              <span>Code</span>
              <p className="about-center">
                I mind writing a clean and maintainable code that for other
                developers to be able to read or use.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="about-item">
              <i className="fa fa-laptop"></i>
              <span>Responsive</span>
              <p className="about-center">
                I create a fully responsive website that able to work on any
                screen, no matter the size of the device.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="about-item">
              <i className="fa fa-paint-brush"></i>
              <span>Design</span>
              <p className="about-center">
                My goals are crafting a simple and beautifully designed
                websites.
              </p>
            </div>
          </Grid>

          {/*end container*/}
        </Grid>
        {/*end about*/}
      </Container>
    </div>
  )
}

export default About
