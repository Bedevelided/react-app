import React, { useState } from 'react'
import "./App.css"

// class based components
export default class App extends React.Component {
  // Person state
  state = {
    // The Person's object
    Person : {
      fullName : "Modibo Camara",
      bio : "Professional front-end web developer",
      imgSrc : "./profilephoto.jpg",
      profession : "Web designer",
    },
    // show of not show state
    show : true
  }
  // setting the state to false to hide profile
  hideProfile = () => this.setState({show : false})
  // setting the state to true to show profile
  showProfile = () => this.setState({show : true})
// counting the number of seconds since the last time the component did mount
  componentDidMount(){
    let count = setInterval(function(){
        let num = 0;
        num++
    },1000)
    return count;
  }
  render() {
    // conditional rendering depending on the state show of the state
    if(this.state.show) {
      return (
        <>
        <div className='card' style={{display : 'grid' , gridTemplateColumns : '1fr'}}>
        <div className='bg-header'></div>
        <div className='bg-details'>
            <div className="img-div">
              {/* accessing the differetn properties of Person object */}
                <img src={this.state.Person.imgSrc} alt="profile"/>
            </div>
            <h1>{this.state.Person.fullName}</h1>
            <h4>{this.state.Person.profession}</h4>
            <p className='accordion'>
                {this.state.Person.bio}
            </p>
            {/*  showing the number of seconds*/}
            <span>Component did mount : {this.componentDidMount()} s ago</span>


        </div>
        {/* inline styles */}
        <button style = {{cursor : 'pointer' , padding : '15px 5px' , textTransform: 'uppercase'}} >Get user</button>
    </div>
  
        {/* click to hide profile button and change the show state to false */}
        <button onClick={this.hideProfile} style={{padding : "10px 15px" , color : "black" , marginTop : "10px"}}>Hide Profile</button>
        
        </>
  
        
      )

    }
    // click to show Profile button and change the show state to true
    return (<button onClick={this.showProfile} style={{padding : "10px 15px" , color : "black" , marginTop : "10px"}}>Show Profile</button>)
    
  }
}

