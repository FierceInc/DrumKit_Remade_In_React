import React from 'react';

const DrumPadsA = (props) => {
    return (
        <div className="keys">
           <div className="key" onClick={props.keypress} value="Q">
               <audio className='clip' />Q</div> 
           <div className="key"onClick={props.keypress} value="W"> <audio className='clip'  />W</div> 
           <div className="key"onClick={props.keypress} value="E"> <audio className='clip'  />E</div> 
           <div className="key"onClick={props.keypress} value="A"> <audio  className='clip' />A</div> 
           <div className="key"onClick={props.keypress} value="S"> <audio  className='clip' />S</div> 
           <div className="key"onClick={props.keypress} value="D"> <audio  className='clip' />D</div> 
           <div className="key"onClick={props.keypress} value="Z"> <audio  className='clip' />Z</div> 
           <div className="key"onClick={props.keypress} value="X"> <audio  className='clip' />X</div> 
           <div className="key"onClick={props.keypress} value="C"> <audio  className='clip' />C</div> 
        </div>
    );
}

export default DrumPadsA;
