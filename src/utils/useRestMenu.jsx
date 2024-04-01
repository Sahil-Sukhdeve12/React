import { useEffect,useState } from "react";
import { MENU_API } from "../utils/constants";

export default function useRestMenu(resId){
    const[resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        setresInfo(json.data);


    };
    return resInfo;

}