import React from "react"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import ProjectPreview from "../components/project-preview"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

//Styles
const useStyles = makeStyles(theme => ({
  portfolioTitle: {
    fontWeight: 800,
    fontSize: "3rem",
    paddingTop: theme.spacing(3),
    textTransform: "uppercase",
  },
}))

const Portfolio = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges

  return (
    <div className="portfolio" id="portfolio">
      <SEO title="Portfolio" />
      <Typography variant="h1" className={classes.portfolioTitle}>
        Porfolio
      </Typography>

      {projects.map(({ node: project }) => {
        const title = project.title
        const slug = project.slug
        const description = project.description
        const imageData = project.image.childImageSharp.fluid
        return (
          <ProjectPreview
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
    </div>
  )
}

export default Portfolio
