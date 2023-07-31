import React from "react";
import  ReactDOM  from "react-dom";
import './App.css';
import styles from './demo.module.css';
import img1 from './ak.jpg';
class Reactstyle extends React.Component{
    render()
    {
        const mystyle={
            
            color:"yellow",
        fontFamily:"Arial"
        };
    
    return(
        <div>
            <h1 style={{color:'blue',textAlign:'left'}}>Happy Days</h1>
            <h2 style={mystyle}>ok</h2>
            <h3 className="App">Rocking</h3>
            <h3 className={styles.heading}>MODULE-CSS</h3>
            <img src={img1} alt="car" width="400" height="400"></img>
        </div>
    )
}
}
ReactDOM.render(<Reactstyle/>,document.getElementById("root"));