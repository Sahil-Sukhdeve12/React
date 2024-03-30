import { useEffect, useState } from "react"

export default function User({name}){
    const [count,setcount]=useState(0);

    useEffect(()=>{
        const timer=setInterval(() => {
            console.log("Hii");
        }, 1000);
        console.log("useEffect");

        return()=>{
            clearInterval(timer);
            console.log("useEffect return");
        }
    },[]);

    return(
        <div className="user-card">
            <h4>Count={count}</h4>
            {/* setcount={count}; */}
            {/* <h2>Name:Sahil</h2> */}
            <h2>Name:{name}</h2>
            <h3>Location:Nagpur</h3>
            <h3>Userid:@sahils15</h3>
            
        </div>
        
    )
}