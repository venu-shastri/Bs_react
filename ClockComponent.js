import React,{useState,useEffect} from 'react'
import {StoreContext} from './reduxhook/store';


export default function ClockComponent(props,context){

    //Component DidMount
    useEffect(()=>{

        console.log(context);
       let timerCleanup= setInterval(() => {
            let currentTime=new Date().toTimeString();

            setTime(currentTime);
        }, 1000);
        return function(){
            //WillUnmount
            timerCleanup();
        }

    },[]);

    const [time,setTime]=useState(new Date().toTimeString());
    return(
        <StoreContext.Consumer>
            {
            ({state,dispatch})=>(
                   
                    <div>
                    <output>{state.count}</output>
                    <button onClick={()=>{dispatch({type:"test_action"})}}>ChangeTime</button>
                </div>
             )
            }
            
        </StoreContext.Consumer>
        
    );

}