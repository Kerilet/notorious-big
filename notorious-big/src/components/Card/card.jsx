/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Button from "react-bootstrap/Button"
import "./style.css";
import Carousel from '../Carousel/Carousel';

export default (props) => {
    const [voicelineState, setVLState] = useState(false);
  
   return <div className="card">
   {props.isActive ? <div className="traffic-light green"> </div> : <div className="traffic-light red"></div>}
   <h2>{props.title}</h2>
   <Carousel imageSrc={props.imageSrc}/>
   <div>
     <Button onClick={() => setVLState(!voicelineState)} voiceline={props.voiceline}>Click here to toggle voicelines { voicelineState ? "off" : "on" } </Button>
   </div>
   {voicelineState && <div className="voiceline">{props.voiceline}</div>}
</div>;
}