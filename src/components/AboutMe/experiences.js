import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./Experience.css";
import myImage from "./stoneX.png";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToStoneX = this.redirectToStoneX.bind();
  }

  redirectToStoneX() {
    // window.location.href = 'http://www.stonex.com'
    window.open("http://www.stonex.com");
  }
  render() {
    console.log(this.props);

    return (
      <Container fluid style={{ paddingLeft: 0 }}>
        <p
          style={{
            color: "#909090",
            fontFamily: "Verdana",
            fontWeight: "500",
            paddingBottom: 10,
            borderBottom: "1px solid",
            borderColor: "#f2f2f2",
            fontSize: `calc(.60vw + .5em)`,
          }}
        >
          {" "}
          {this.props.data.dates}
        </p>

        <Row
        
          className="col1"
          f
          onClick={() => {
            this.redirectToStoneX();
          }}
        >
          <Col
            md={3}
            className="d-none d-md-block"
            style={{marginTop:'auto',marginBottom:'auto'}}
            
          >
            <Image class="img-responsive" src={myImage} rounded fluid  />
          </Col>

          <Col xs={9} style={{marginTop:'auto', marginBottom:'auto'}}>
            <p
              style={{ marginBottom: ".5%", fontSize: `calc(.75vw + .3em)` }}
            >
              <strong>{this.props.data.name}</strong>
            </p>
            <p
              style={{
                marginBottom: ".5%",
                color: "#909090",
                fontSize: `calc(.60vw + .25em)`,
              }}
            >
              {this.props.data.description}
            </p>
            <p style={{ fontSize: `calc(.60vw + .25em)` }}>
              {this.props.data.position}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Experience;
