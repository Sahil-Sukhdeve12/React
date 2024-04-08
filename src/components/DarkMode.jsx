// import "./style.css";
import { useState,useEffect } from "react";

export default function DarkMode(){
    const[theme,settheme]=useState("light");

    useEffect(()=>{
        if(theme==="dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[theme]);

    const handleThemeSwitch=()=>{
        settheme(theme==="dark"?"light":"dark");
    };

    // return theme;

    return(
        <div className="">
            <button className="" onClick={handleThemeSwitch}>Dark Mode</button>
        </div>
    )
}