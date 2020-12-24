import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Container.css";
import "./homePage.css";
import TypeWriterEffect from "react-typewriter-effect";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import image from '/Users/mhoffmann/Development/website/src/img/mhoffmann.png'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  redirectTo(path) {
    window.open(path);
  }
  render() {
    return (
      <Container
        fluid xs
        style={{
          height:'95%',
     

        }}
      >
        <Row>
           <Col xs={{ span: 12, order: 1}} md={{ span: 6, order: 1 }} className="colHome">
            <Row>
                
              <Col style={{ width: "100%",textAlign:'center'}}>
                <Row>
                  <Col>
                    <h2 style={{ fontFamily: "Nerko One", fontSize: `calc(2.0vw + 2em)` }}>
                      {" "}
                      Hello, I'm{" "}
                    </h2>
                  </Col>
                </Row>
                <Row style={{ height: "10vh" }}>
                  <Col style={{textAlign:'center'}}>
                    <div>
                      <TypeWriterEffect
                        textStyle={{
                          fontFamily: "Nerko One",
                          color: "black",
                          fontWeight: "bold",
                          fontSize: `calc(2.0vw + 1.7em)`,
                          textAlign:'center',
                          
                        }}
                        startDelay={0}
                        cursorColor="#3F3D56"
                        textAlign="center"
                        multiText={[
                          " ",
                          "a College Graduate",
                          "a Software Engineer",
                          "Michael Hoffmann",
                        ]}
                        multiTextDelay={2000}
                        typeSpeed={80}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant="info"
                      onClick={() => this.nextPath("/projects")}
                      style={{
                        marginRight: 10,
                        paddingBottom: 10,
                        fontSize: `calc(.7vw + .8em)`,
                      }}
                    >
                      View Projects
                    </Button>{" "}
                    <Button
                      variant="info"
                      onClick={() => this.nextPath("/about")}
                      style={{ paddingBottom: 10, fontSize: `calc(.7vw + .8em)`  }}
                    >
                      About Me
                    </Button>{" "}
                  </Col>
                </Row>
                <Row style={{ paddingTop: 30, height:'10vh'}}>
                  <Col style={{ textAlign: "center" }}>
                    <FontAwesomeIcon
                      class="icon"
                      icon={faLinkedin}
                      style={{ color: "#0e76a8" }}
                      onClick={() =>
                        this.redirectTo(
                          "https://www.linkedin.com/in/michael-hoffmann-100715a5/"
                        )
                      }
                    />
                    <FontAwesomeIcon
                      class="icon"
                      icon={faGithubSquare}
                      style={{ color: "#333", marginLeft: 10 }}
                      onClick={() =>
                        this.redirectTo("https://github.com/mhoffmann5/")
                      }
                    />
                  </Col>
                </Row>
              </Col>
              
            </Row>
          </Col>
          <Col xs={{ span: 12, order: 2}} md={{ span: 6, order: 2 }} className='colImage'></Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(HomePage);
