import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import {
  Container,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  Typography,
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

function SinglePortfolio(props) {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia>
                <Link to="/">
                  <img src={props.item.image} alt="avatar" />
                </Link>
              </CardMedia>
              <CardContent>
                <h2></h2>
                <p className={classes.desc}>{props.item.story}</p>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box>
                <p>
                  <Link to="/">Read More &rarr;</Link>
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
  )
}

export default SinglePortfolio
