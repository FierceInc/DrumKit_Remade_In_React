import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "./index.css";
import DrumPadsA from './DrumPadsA';
import { bankOne, bankTwo } from './SoundBanks';
 

class DrumKit extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "BANK ONE",
      power: "On",
      bankSwitch: "B-Two",
      volume: '',
      clicked: false,
      soundBank: 1,
      playable: true,
      DID: []
     };
     this.handlePlay = this.handlePlay.bind(this)
     this.handleBank = this.handleBank.bind(this)
     this.handleVolume = this.handleVolume.bind(this)
     this.handlePower = this.handlePower.bind(this)
  }
  
  handleVolume(e) {
    const value = e.target.value;
    this.setState({
      volume: value
    })
  }
componentsWillUnmount() {
document.removeEventListener("keyup") 
}
  componentDidMount(){
    var keyPressed;
    document.addEventListener('keyup', (event) => {
    if(this.state.playable && this.state.power === "On") {
      keyPressed = event.key.toUpperCase();
      if(this.state.soundBank === "" || this.state.soundBank === 1) {
        bankOne.forEach((key, index) => {
          var audio = document.querySelectorAll(".clip")
          audio[index].id = key.keyTrigger
          audio[index].src = key.url
          this.setState({
            DID: [key.id]
          })
          if(keyPressed === key.keyTrigger) {
            audio[index].play()
            audio[index].volume = this.state.volume / 100
             this.setState({
            title: key.id
          })
          }
        })
      }
      else if(this.state.soundBank === 2) {
        bankTwo.forEach((key, index) => {
          var audio = document.querySelectorAll(".clip")
          audio[index].id = key.keyTrigger
          audio[index].src = key.url
           this.setState({
            DID: [key.id]
          })
          if(keyPressed === key.keyTrigger) {
            audio[index].play()
            audio[index].volume = this.state.volume / 100
             this.setState({
            title: key.id
          })
          }
        })
      } 
  }
   });
    var vol = document.getElementById('volumeRange').value = 10
    this.setState({
      volume: vol
    })
 }

  handleBank() {
    if(this.state.soundBank !== 1) {
      this.setState({
        title: "BANK ONE",
        bankSwitch: "B-Two",
        soundBank: 1
      })
    }
    else{
       this.setState({
        title: "BANK TWO",
        bankSwitch: "B-One",
        soundBank: 2
      })
    }
  }

  handlePlay(e) {
  const value = e.target.innerText
  if(this.state.playable) {
    if(this.state.soundBank === "" || this.state.soundBank === 1) {
      bankOne.forEach((key, index) => {
        var audio = document.querySelectorAll(".clip")
          audio[index].id = key.keyTrigger
          audio[index].src = key.url
           this.setState({
            DID: [key.id]
          })
          if(value === key.keyTrigger) {
            audio[index].play()
            audio[index].volume = this.state.volume / 100
             this.setState({
            title: key.id
          })
          }
      })
    }
    else if(this.state.soundBank === 2) {
      bankTwo.forEach((key, index) => {
        var audio = document.querySelectorAll(".clip")
        audio[index].id = key.keyTrigger
        audio[index].src = key.url
        this.setState({
            DID: [key.id]
          })
        if(value === key.keyTrigger) {
          audio[index].play()
          audio[index].volume = this.state.volume / 100
          this.setState({
            title: key.id
          })
        }
      })
    } 
  }
  }
 handlePower() {
  if(this.state.power !== "On") {
    this.setState({
      playable: true,
      power: "On",
      volume: document.getElementById('volumeRange').value = 10
    })
  }
  else{
     this.setState({
      playable: false,
      power: "Off",
      volume: document.getElementById('volumeRange').value = 0
    })
  }
 }
 

  render() {
    return (
      <div style={{width:"100vw"}} id="drum-machine">
      <h1 id="display" >{this.state.title}</h1>
      <DrumPadsA keypress={this.handlePlay}
       ID={this.state.DID.map(id => id)}/>
      <div style={{display:"flex", justifyContent:"space-around", margin:"20px auto", width:"500px"}} >
           <button className="powerButton" style={this.state.power === "Off" ? {background: "rgb(245, 57, 57)" } : {background: "white"}} onClick={this.handlePower}>{this.state.power}</button> 
       <button className="switchButton" onClick={this.handleBank}>{this.state.bankSwitch}</button>
       <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"flex-start"}}>
         <h4 className="volumeName">Volume {this.state.volume}</h4>
         <input type="range" name="volume" id="volumeRange" onChange={this.handleVolume} />
       </div>
       
      </div>
    
      </div>
    );
  }
}

ReactDOM.render(<DrumKit />, document.getElementById('root'))