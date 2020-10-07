import React from "react"
import { Link } from "gatsby"
//import { Container, Grid } from "@material-ui/core"

export default function Resources() {
  return (
    <div>
      {/*Start Resourse*/}
      <div className="resources" id="resources">
        <div className="container">
          <div className="resources-header">
            <h1>Resources</h1>
          </div>
          <p className="text-center">
            The tools and resources that I use for a front-end developer work.
          </p>
          <div className="resources-center">
            <div className="resources-item">
              <i className="fa fa-font-awesome"></i>
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://fontawesome.com/"
                >
                  Font Awesome
                </Link>
              </span>
              <p>
                Font Awesome is one of the best library with hundreds of free
                web fonts ready to be used.
              </p>
            </div>

            <div className="resources-item">
              <i className="fa fa-stack-overflow"></i>
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://stackoverflow.com/"
                >
                  Stack Overflow
                </Link>
              </span>
              <p>
                Stack Overflow is a good community to ask and find questions
                related to web development.
              </p>
            </div>

            <div className="resources-item">
              <i className="fa fa-git-square"></i>
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://git-scm.com/"
                >
                  Git
                </Link>
              </span>
              <p>
                Git is a distributed version-control system for tracking changes
                in source code during software development
              </p>
            </div>

            <div className="resources-item">
              <img className="resources-img" src="logo/figma.png" alt="figma" />
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.figma.com/"
                >
                  Figma
                </Link>
              </span>
              <p>
                Figma is a cloud-based design tool that is similar to Sketch in
                functionality and features, but with big differences that make
                Figma better for team collaboration.
              </p>
            </div>

            <div className="resources-item">
              <img className="resources-img" src="logo/w3c.jpg" alt="w3c" />
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.w3schools.com/"
                >
                  W3chools
                </Link>
              </span>
              <p>
                It is the world's largest web development site. Help and
                educational website for learning web technologies online.
              </p>
            </div>

            <div className="resources-item">
              <img className="resources-img" src="logo/mdn.png" alt="mdn" />
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://developer.mozilla.org/en-US/"
                >
                  MDN Web Docs
                </Link>
              </span>
              <p>
                This provides information about Open Web technologies including
                HTML, CSS, and APIs for both Web sites and progressive web apps.
              </p>
            </div>

            <div className="resources-item">
              <i className="fa fa-google"></i>
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://google.com"
                >
                  Google
                </Link>
              </span>
              <p>
                Google has many special features it's help find exactly what
                you're looking
              </p>
            </div>

            <div className="resources-item">
              <i className="fa fa-html5"></i>
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://html5up.net/"
                >
                  HTML5 UP
                </Link>
              </span>
              <p>
                Is a responsive HTML5 and CSS3 site templates designed by
                @ajlkn.
              </p>
            </div>

            <div className="resources-item">
              <i className="fa fa-youtube"></i>
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://yuotube"
                >
                  Youtube
                </Link>
              </span>
              <p>
                Every day, over a billions of people learning related videos are
                viewed on YouTube
              </p>
            </div>

            <div className="resources-item">
              <img
                className="resources-img"
                src="logo/pexels.png"
                alt="pexels"
              />
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.pexels.com/"
                >
                  Pexels
                </Link>
              </span>
              <p>
                All photos uploaded on pixels are licensed under the Pexels
                license. This means all developer or web design can use them for
                free and personal or commercial purposes.
              </p>
            </div>

            <div className="resources-item">
              <img
                className="resources-img"
                src="logo/unsplash.png"
                alt="unsplash"
              />
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://unsplash.com/"
                >
                  Unsplash
                </Link>
              </span>
              <p>
                Unsplash is a website dedicated to sharing, stock photography
                under the Unsplash license. Compared to most free photo sites,
                Unsplash is among the most safe.
              </p>
            </div>
            <div className="resources-item">
              <img
                className="resources-img"
                src="logo/unsplash.png"
                alt="unsplash"
              />
              <span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://unsplash.com/"
                >
                  Unsplash
                </Link>
              </span>
              <p>
                Unsplash is a website dedicated to sharing, stock photography
                under the Unsplash license. Compared to most free photo sites,
                Unsplash is among the most safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
