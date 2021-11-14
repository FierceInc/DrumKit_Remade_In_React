import React from 'react';

const DrumPadsA = (props) => {
    return (
        <div className="keys">
           <div className="key" onClick={props.keypress} value="Q">Q</div> 
           <div className="key"onClick={props.keypress} value="W">W</div> 
           <div className="key"onClick={props.keypress} value="E">E</div> 
           <div className="key"onClick={props.keypress} value="A">A</div> 
           <div className="key"onClick={props.keypress} value="S">S</div> 
           <div className="key"onClick={props.keypress} value="D">D</div> 
           <div className="key"onClick={props.keypress} value="Z">Z</div> 
           <div className="key"onClick={props.keypress} value="X">X</div> 
           <div className="key"onClick={props.keypress} value="C">C</div> 
        </div>
    );
}

export default DrumPadsA;
