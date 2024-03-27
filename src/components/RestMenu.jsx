import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import {useParams} from "react-router-dom";

export default function RestMenu(){
    const [resInfo,setresInfo]=useState(null);

    const {resId}=useParams();

    useEffect(()=>{
        fetchMenu();
    },[]); // it will be called 1 time after initial render

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();

        //console.log(json);
        setresInfo(json.data);
    };

    if (resInfo===null ) return <Shimmer/>;

    // const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const rest=resInfo.cards[2].card.card.info;
    const itemCards = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{rest?.name}</h1> 
            <h3>{rest?.costForTwoMessage}</h3>
            <p>
                Cuisines: {rest?.cuisines.join(",")}
            </p>
            <ul>
                {itemCards?.map((item)=>(
                    <li key={item.card.info.id}>
                        <h3>{item.card.info.name}</h3>
                        <p>{item.card.info.description}</p>
                        <h4>Price: Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</h4>
                    </li>
                ))}
            </ul>
            
        </div>
    )

}