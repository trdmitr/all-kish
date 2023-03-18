import React, { useCallback, useContext, useMemo } from 'react'
import { useParams } from "react-router";
import classes from "./components.module.css"
import { useNavigate } from 'react-router-dom'
import { Context } from './context'
const SinglPage = (songs) => {
    const navigate = useNavigate();
    const params = useParams();
    const {sings, setSings} = useContext(Context);
    console.log("sings: ", sings)
    const currSings = sings.filter(sings => sings.id === params.id);
      console.log(currSings)  
    return (
        <div className="device device-iphone-x">
        <div className="device-frame">
            <div className="device-content">
    
              {/* <h1>SinglPage</h1>  */}
            </div>
        </div>
        <div className="device-stripe"></div>
        <div className="device-header">
            <div className="device-sensors"></div>
        </div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
    </div>
      )
}

export default SinglPage