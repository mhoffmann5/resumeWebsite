import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Experience from './AboutMe/experiences'


class about extends React.Component {

    constructor(props){
        super(props);
    }
    
    

    redirectToStoneX(){
        // window.location.href = 'http://www.stonex.com'
        window.open("http://www.stonex.com")

    }
    render(){

        let stoneX = {dates:'2021-Present',name:'StoneX', description: 'StoneX is an institutional-grade financial services network',position:'Software Engineer'}
        
        return(
            
            <Container fluid 
            style={{
                height: "100vh",
                width: "100vw",
              
                marginRight:0,
                marginLeft:0,
              }}>
                <Row style={{
                    height:"30vh",
                    marginTop:'10vh'
                }}>
                    <Col xs={3}>
                        
                    </Col>

                    <Col onSubmitCapture={6}>
                    <p class="text-center"> I am an extremely passionate and curious Software Developer who has recently graduated college. I will be working at   <Button variant="outline-dark" size="sm" onClick = {this.redirectToStoneX}>StoneX</Button> as a Software Engineer and am excited to increase my skill set in Full Stack Develoment.</p>
                    </Col>

                    <Col xs={3}>
                    
                    </Col>

                </Row>

                <Row style={{
                    height:"5vh",
                    
                }}>
                    <Col xs={3}>
                    </Col>

                    <Col xs={6} style={{borderBottom: '1px solid',
                                        borderColor: '#f2f2f2',padding:0   }}>
                        <p style={{color:'#909090',fontFamily:'Verdana',fontWeight:'8rem'}}> Experiences</p>
                    </Col>

                    <Col xs={3}>

                    </Col>
                </Row>

                <Row style={{
                    height:"5vh",
                    
                }}>
                    <Col xs={3}>
                    </Col>

                    <Col xs={6} style={{ marginTop: 20, padding:0}}>

                        <Experience data={stoneX}/>
                        {/* <p style={{color:'#d3d3d3'}}> 2021-Present</p>

                        <Card onHover={()=> console.log("CLICKED")} > 
                        <Card.Body>This is some text within a card body.</Card.Body>
                        </Card> */}
                    </Col>

                    <Col xs={3}>

                    </Col>
                </Row>

            </Container>

        )
    }

}

export default about;
