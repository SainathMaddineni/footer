import React ,{useRef}from "react";
import IdleTimer from "react-idle-timer";

function IdleTimerContainer(){
     const idelTimerRef= useRef(null)

     const onIdle = () =>{
         localStorage.clear();
     }
    return(
        <div>
            <IdleTimer ref ={idelTimerRef} timeout = {5 * 1000} onIdle = {onIdle}></IdleTimer>
        </div>

    )
}
export default IdleTimerContainer
