import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";


export default function Header(){
    const [btnNameReact,setbtnNameReact]=useState("Login");
    // console.log("header render");

    // useEffect(()=>{
    //     console.log("useEffect is called");
    // });
    
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                        Home </Link></li>
                    <li>
                        <Link to="/About">
                        About Us</Link>
                    </li>

                    <li>
                        <Link to="/Contactus">
                        Contact us </Link>
                    </li> 
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="login" ? setbtnNameReact("logout"):setbtnNameReact("login");
                    }}>
                        {btnNameReact}  </button>
                </ul>
            </div>
        </div>
    )
};

