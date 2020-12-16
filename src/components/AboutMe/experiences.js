import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import './Experience.css'
import myImage from './stoneX.png'

class Experience extends React.Component {
    constructor(props){
        super(props);
        this.redirectToStoneX = this.redirectToStoneX.bind()
    }

    redirectToStoneX(){
        // window.location.href = 'http://www.stonex.com'
        window.open("http://www.stonex.com")

    }
    render(){
        console.log(this.props)

        return(
            <Container fluid="xs">

        <p style={{color:'#909090',fontFamily:'Verdana',fontWeight:'500',marginBottom: 10, borderBottom: '1px solid',
                                        borderColor: '#f2f2f2'}}> {this.props.data.dates}</p>
                <Row style={{height:'20vh'}}>
                    
                    <Col xs = "auto" >
                    
                    <Row style={{height:'100%'}} className="col1" onClick={()=>{this.redirectToStoneX()}} >
                    <Col xs={3} style={{height:"100%", marginTop:50,marginBottom:50}}>
                    
                        <Image class="img-responsive" src={myImage} rounded fluid/>
                      
                        </Col>

                        <Col  xs={9} style={{marginTop:40}}>
                            <p style={{marginBottom:'.5rem'}}>
                                <strong>{this.props.data.name}</strong>
                            </p>
                            <p style={{marginBottom:'.5rem',color:'#909090',fontSize:'80%'}}>
                                {this.props.data.description}
                            </p>
                            <p style={{fontSize:'80%'}}>
                             {this.props.data.position}
                            </p>
                       
                        </Col>

                    </Row>
                   
                    </Col>

                </Row>


            </Container>

        )
    }
}
export default Experience;