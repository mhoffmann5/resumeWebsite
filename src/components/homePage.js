import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './Container.css'
import './homePage.css'
import TypeWriterEffect from 'react-typewriter-effect';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedin,faGithubSquare  } from '@fortawesome/free-brands-svg-icons';


class HomePage extends React.Component{

    constructor(props){
        super(props);
    }
    nextPath(path) {
        this.props.history.push(path);
      }

      redirectTo(path){
        // window.location.href = 'http://www.stonex.com'
        window.open(path)

    }

    render() {
        return(
            <Container fluid="xs"
            style={{
                height: "100vh",
                width: "100vw",
              
                marginRight:0,
                marginLeft:0,
              }}>
                  <Row style={{
                      height:"40vh",
                      
                      alignItems:'center',
                      justifyContent:'center'

                  }}>
                  </Row>
                  
                  <Row style={{
                      height:"60vh"
                  }}>
                      <Col >
                          <Row>
                           <Col xs={3}>
                          </Col>
                          <Col xs={9}>
                          <h2 style={{fontFamily:'Nerko One',fontSize:'2.5em'}}> Hello, I'm </h2>
                          </Col>
                            
                          </Row>

                          <Row style={{height:'10vh'}}>

                          <Col xs={3}>
                          </Col>

                          <Col xs={9}>
                            <div>
                          <TypeWriterEffect
                                textStyle={{
                                fontFamily: 'Nerko One', 
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '2.6em',
                                }}
                                startDelay={0}
                                cursorColor="#3F3D56"
                                textAlign='center'
                                multiText={[
                                ' ',
                                'a College Student',
                                'a Software Engineer',
                                'Michael Hoffmann'
                                
                                ]}
                                multiTextDelay={2000}
                                typeSpeed={80}
                            />
                            </div>
                          </Col>
                        
                          </Row>

                          <Row>

                          <Col xs={3}>
                          </Col>

                          <Col xs={9}>
                          <Button variant="info" onClick={() => this.nextPath('/projects')} style={{marginRight:10}}>View Projects</Button>{' '}
                          <Button variant="info" onClick={() => this.nextPath('/about')}>About Me</Button>{' '}
                          
                          </Col>

                          </Row>
                          <Row style = {{marginTop:30}}>
                          <Col xs={3}>
                          </Col>

                          <Col xs ={4} style = {{textAlign:'center'}}>
                          <FontAwesomeIcon class = "icon" icon={faLinkedin} style={{color: '#0e76a8'}} onClick={() => this.redirectTo("https://www.linkedin.com/in/michael-hoffmann-100715a5/")}/>
                          <FontAwesomeIcon class = "icon" icon={faGithubSquare} style={{color: '#333', marginLeft:10}}   onClick={() => this.redirectTo("https://github.com/mhoffmann5/")}/>
                          </Col>

                          </Row>

                      </Col>

                      <Col>                   
                      </Col>  
                  </Row>
                
            </Container>
            
        )
    }
}

export default withRouter(HomePage);