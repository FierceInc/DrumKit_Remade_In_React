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
      playable: true
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

  componentDidMount(){
    var keyPressed;
    document.addEventListener('keyup', (event) => {
    if(this.state.playable && this.state.power === "On") {
     keyPressed = event.key.toUpperCase();
     if(this.state.soundBank === "" || this.state.soundBank === 1) {
      bankOne.forEach(key => {
        var audio = new Audio(key.url)
        if(keyPressed === key.keyTrigger) {
          audio.play()
          audio.volume = this.state.volume / 100
        }
      })
    }
    else if(this.state.soundBank === 2) {
      bankTwo.forEach(key => {
        var audio = new Audio(key.url)
        if(keyPressed === key.keyTrigger) {
          audio.play()
          audio.volume = this.state.volume / 100
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
      bankOne.forEach(key => {
        var audio = new Audio(key.url)
        if(value === key.keyTrigger) {
          audio.play()
          audio.volume = this.state.volume / 100
        }
      })
    }
    else if(this.state.soundBank === 2) {
      bankTwo.forEach(key => {
        var audio = new Audio(key.url)
        if(value === key.keyTrigger) {
          audio.play()
          audio.volume = this.state.volume / 100
        }
      })
    }
  }
  }
 handlePower() {
  if(this.state.power !== "On") {
    this.setState({
      playable: true,
      power: "On"
    })
  }
  else{
     this.setState({
      playable: false,
      power: "Off"
    })
  }
 }
 

  render() {
    return (
      <div style={{width:"100vw"}}>
      <h1 id="title">{this.state.title}</h1>
      <DrumPadsA keypress={this.handlePlay}/>
      <div style={{display:"flex", justifyContent:"space-around", margin:"20px auto", width:"500px"}}>
           <button className="powerButton" onClick={this.handlePower}>{this.state.power}</button> 
       <button className="switchButton" onClick={this.handleBank}>{this.state.bankSwitch}</button>
       <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"flex-start"}}>
         <h6>Volume {this.state.volume}</h6>
         <input type="range" name="volume" id="volumeRange" onChange={this.handleVolume} />
       </div>
       
      </div>
    
      </div>
    );
  }
}

ReactDOM.render(<DrumKit />, document.getElementById('root'))