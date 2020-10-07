import React from "react"
import SEO from "../components/seo"
import { Container, Grid } from "@material-ui/core"

export default function Skills() {
  return (
    <>
      <SEO title="About" />
      <Container maxWidth="md" className="skills" id="skills">
        <div className="skills-header">
          <h1>Skills Set</h1>
        </div>
        <Grid container spacing={3} className="container">
          <Grid item xs={12} md={12} className="skills-container">
            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/html5.png" alt="" className="skills-icons" />
                </div>
                <p>HTML</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/css3.png" alt="" className="skills-icons" />
                </div>
                <p>CSS</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/scss.png" alt="" className="skills-icons" />
                </div>
                <p>SCSS</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/js.png" alt="" className="skills-icons" />
                </div>
                <p>JavaScript</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img
                    src="logo/json.jpg"
                    alt="Json"
                    className="skills-icons"
                  />
                </div>
                <p>Json</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/jquery.png" alt="" className="skills-icons" />
                </div>
                <p>jQuery</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/jsx.png" alt="" className="skills-icons" />
                </div>
                <p>JSX</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/react.png" alt="" className="skills-icons" />
                </div>
                <p>React.js</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/express.png" alt="" className="skills-icons" />
                </div>
                <p>Express.js</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/gastby.png" alt="" className="skills-icons" />
                </div>
                <p>Gatsby.js</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img
                    src="logo/react-bootstrap.png"
                    alt=""
                    className="skills-icons"
                  />
                </div>
                <p>React-Bootstrap</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img
                    src="logo/bootstrap.png"
                    alt=""
                    className="skills-icons"
                  />
                </div>
                <p>Bootstrap</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img
                    src="logo/materialize.png"
                    alt=""
                    className="skills-icons"
                  />
                </div>
                <p>Materialize</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/c-sharp.png" alt="" className="skills-icons" />
                </div>
                <p>c-sharp</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/node.png" alt="" className="skills-icons" />
                </div>
                <p>Node.js</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img
                    src="logo/photoshop.png"
                    alt=""
                    className="skills-icons"
                  />
                </div>
                <p>Photoshop</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/github.png" alt="" className="skills-icons" />
                </div>
                <p>GitHub</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/git.png" alt="" className="skills-icons" />
                </div>
                <p>Git</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img
                    src="logo/firebase.png"
                    alt=""
                    className="skills-icons"
                  />
                </div>
                <p>Firebase</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/mongodb.png" alt="" className="skills-icons" />
                </div>
                <p>MongoDB</p>
              </div>
            </div>

            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="logo/sql.png" alt="" className="skills-icons" />
                </div>
                <p>SQL Server</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6}>
            <h3 className="skills-card-font">Ability Rated</h3>
            <div className="wrapper">
              <ul>
                <li className="html">HTML5</li>
                <li className="css">CSS3</li>
                <li className="js">JAVASCRIPT</li>
                <li className="react">REACTJS</li>
                <li className="vue">VUEJS</li>
                <li className="gatsby">GATSBYJS</li>
                <li className="node">NODEJS</li>
                <li className="mongo">MONGODB</li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="skills-card-2">
              <h3 className="skills-card-font">What I do</h3>
              <ul className="list-style">
                <li>Front-end Development</li>
                <li>Mobile First Thinking</li>
                <li>Cross-Browser Compatibility</li>
                <li>Responsive Layout and Design</li>
                <li>Agile Methodology</li>
              </ul>
            </div>
          </Grid>
        </Grid>
        {/*end container*/}
      </Container>
    </>
  )
}
