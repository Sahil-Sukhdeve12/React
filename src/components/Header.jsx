import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import logo_main from "https://github.com/Sahil-Sukhdeve12/React/blob/main/prod_utils";

export default function Header(){
    const [btnNameReact,setbtnNameReact]=useState("Login");
    // console.log("header render");

    // useEffect(()=>{
    //     console.log("useEffect is called");
    // });

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
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="login" ? setbtnNameReact("logout"):setbtnNameReact("login");
                    }}>
                        {btnNameReact}  </button>
                </ul>
            </div>
        </div>
    )
};

