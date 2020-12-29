import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"

import {
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  Typography,
  Container,
} from "@material-ui/core"

//Styles
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
    background: "orange",
  },
  title: {
    textDecoration: "none",
    padding: "10px",
  },
  desc: {
    paddingTop: "20px",
    letterSpacing: 5,
  },
  media: {
    height: 240,
  },
  portfolio: {
    paddingTop: theme.spacing(3),
  },
  portfolioTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(3),
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
}))

const ProjectPreview = ({ slug, title, imageData, description }) => {
  const classes = useStyles()

  return (
    <div className="portfolio" id="portfolio">
      <Container maxWidth="lg" className={classes.portfolio}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia>
                  <Link to={`/${slug}/`}>
                    <Image fluid={imageData} alt={title} />
                  </Link>
                </CardMedia>

                <CardContent>
                  <h2>
                    <Link to={`/${slug}/`} className={classes.title}>
                      {title}
                    </Link>
                  </h2>
                  <p className={classes.desc}>{description}</p>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box>
                  <p>
                    <Link to={`/${slug}/`}>Read More &rarr;</Link>
                  </p>
                </Box>
                <Box ml={2}>
                  <Typography> Github</Typography>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ProjectPreview
