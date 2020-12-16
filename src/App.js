import './App.css';
import React from 'react'
import image from './img/mhoffmann.jpg'
import HomePage from './components/homePage'


class App extends React.Component{

  render(){
    return(

      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "100vh",
          
        }}
      >
        <HomePage/>
        
        </div>
    )
  }
}

export default App;
