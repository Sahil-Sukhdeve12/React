import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestMenu=()=>{
    const [resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();

        console.log(json);
        setresInfo(json.data);
    };

    return resInfo===null ? (<Shimmer/>) : (
        <div className="menu">
            <h1></h1>
        </div>
    )

}