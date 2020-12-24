import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Experience from "./AboutMe/experiences";
import Education from "./AboutMe/education";
import Particles from 'react-particles-js';
import './about.css'
import reactImage from '../img/react.png'
import pythonImage from '../img/python.png'
import javascript from '../img/javascript.png'

class about extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectToStoneX() {
    // window.location.href = 'http://www.stonex.com'
    window.open("http://www.stonex.com");
  }
  render() {
    let stoneX = {
      dates: "2021-Present",
      name: "StoneX",
      description:
        "StoneX is an institutional-grade financial services network",
      position: "Software Engineer",
    };
    let uwMadison = {
      dates: "August 2016- December 2020",
      name: "University of Wisconsin-Madison",
      description: "",
      position: "Bachelor of Science in Computer Science",
    };
    return (
      
      
      <Container
        fluid
        style={{
          height: "100%",
          width: "100%",

          marginRight: 0,
          marginLeft: 0,
        }}
      >
        <Row>
        <Particles className="container"
                
                params={{
                  "particles": {
                      "number": {
                          "value": 35,
                          "density": {
                              "enable": true,
                              "value_area": 800
                          }
                      },
                      "line_linked": {
                          "enable": false
                      },
                      "move": {
                          "speed": 4,
                          "out_mode": "out"
                      },
                      "shape": {
                          "type": [
                              "images",
                              
                          ],
                          "images": [
                              {
                                  "src": reactImage,
                                  "height": 20,
                                  "width": 23,
                                  
                              },
                              {
                                "src": pythonImage,
                                "height": 20,
                                "width": 23,
                                
                            },
                            {
                              "src": javascript,
                              "height": 20,
                              "width": 23,
                              
                          },
                             
                          ]
                      },
                      "color": {
                          "value": 	'#000000'
                      },
                      "size": {
                          "value": 15,
                          "random": false,
                          "anim": {
                              "enable": true,
                              "speed": 8,
                              "size_min": 10,
                              "sync": false
                          }
                      }
                  },
                  "retina_detect": false
              }}
      />
        <Row
          style={{
            height: "10vh", 
            marginTop: "10%",
            marginBottom:'10%'
          }}
        >
          
          <Col lg ={3} md={2} xs={1}></Col>

          <Col  lg={6} md={8} xs={10} style={{height:'20vh'}}>
                
     
            <p class="text-center" style={{fontSize: `calc(.75vw + .5em)`}}>
            
              I am an extremely passionate and curious Software Developer who
              has recently graduated college. I will be working at{" "}
              <Button
                variant="outline-dark"
                size="sm"
                onClick={this.redirectToStoneX}
                style={{fontSize: `calc(.75vw + .5em)`}}
                
              >
                StoneX
              </Button>{" "}
              as a Software Engineer and am excited to increase my skill set in
              Full Stack Development.
            </p>
          </Col>

          <Col lg={3} md={2} xs={1}></Col>
        </Row>
          
        </Row>
       

        <Row
          
        >
          <Col lg={3} md={2} xs={1}></Col>

          <Col
            lg={6} md={8} xs={10}
            style={{
              
              paddingLeft: 0,
          
            }}
          >
            <p
              style={{
                color: "#909090",
                fontFamily: "Verdana",
                fontSize: `calc(.6vw + .75em)`,
                borderBottom: "1px solid",
                borderColor: "#f2f2f2",
                paddingBottom:'1%'
              }}
            >
              {" "}
              Experience
            </p>
          </Col>

          <Col lg={3} md={2} xs={1}></Col>
        </Row>

        <Row>
          <Col lg={3} md={2} xs={1}></Col>

          <Col lg={6} md={8} xs={10} style={{ paddingTop: '.5%', paddingLeft:0 }}>
            <Experience data={stoneX} />
            
          </Col>

          <Col lg={3} md={2} xs={1}></Col>
        </Row>

        <Row
          style={{
            paddingTop: '5vh',
            paddingBottom: "3%",
          }}
        >
          <Col lg={3} md={2} xs={1}></Col>

          <Col
            lg={6} md={8} xs={10}
            style={{
              borderBottom: "1px solid",
              borderColor: "#f2f2f2",
              padding: 0,
            }}
          >
              
            <p
              style={{
                color: "#909090",
                fontFamily: "Verdana",
                fontSize: `calc(.75vw + .75em)`,
                paddingTop: "1.5rem",
              }}
            >
              {" "}
              Education
            </p>
          </Col>

          <Col lg={3} md={2} xs={1}></Col>
        </Row>

        <Row
          style={{
            height: "5vh",
            paddingBottom: "3%",
           
          }}
        >
          <Col lg={3} md={2} xs={1}></Col>

          <Col lg={6} md={8} xs={10} style={{ padding: 0 }}>
            <Education data={uwMadison} />
          </Col>

          <Col lg={3} md={2} xs={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default about;
