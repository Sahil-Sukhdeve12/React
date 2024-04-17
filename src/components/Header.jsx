import { LOGO_URL } from "../utils/constants";
import { useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {logo_main} from './logo_main.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon } from "@fortawesome/free-solid-svg-icons";
// import DarkMode from "./DarkMode";
import UserContext from "../utils/UserContext";

export default function Header(){
    const [btnNameReact,setbtnNameReact]=useState("Login");

    const loggedInUser=useContext(UserContext);
    console.log(loggedInUser);

    const [darkbtn,setdarkbtn]=useState(false);
    // console.log("header render");

    // useEffect(()=>{
    //     console.log("useEffect is called");
    // });

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

    const onlineStatus=useOnlineStatus();
    
    return(
        <div className="flex justify-between bg-yellow-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src={logo_main}/>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li>Online Status:{onlineStatus?"✅":"🛑"}</li>
                    <li className="px-4">
                        <Link to="/">
                        Home </Link></li>
                    <li className="px-4">
                        <Link to="/About">
                        About Us</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/Contactus">
                        Contact us </Link>
                    </li> 
                    <li className="px-4">
                        <Link to="/Grocery">Store</Link>
                    </li>

                    <div className=" dark:bg-black flex ">
                    <button className="rounded-3xl" 
                    // onClick={()=>{
                    //     // darkbtn===<FontAwesomeIcon icon={faSun}/> ? setdarkbtn(<FontAwesomeIcon icon={faMoon}/>):setdarkbtn(<FontAwesomeIcon icon={faSun}/>);
                    //     setdarkbtn(!darkbtn);
                    // }}
                    onClick={handleThemeSwitch}
                    >
                        Dark{/* {theme ===  "Dark" ? "Light" :"dark"} */}
                       </button>
                    </div>

                    <li className="px-4">Cart</li>
                    
                    {/* <li className="px-4">{loggedInUser}</li> */}

                    <button className="login" onClick={()=>{
                        btnNameReact==="login" ? setbtnNameReact("logout"):setbtnNameReact("login");
                    }}>
                        {btnNameReact}  </button>

                        
                </ul>
            </div>
        </div>
    )
};

