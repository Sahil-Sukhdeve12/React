import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
import { useState } from "react";

export default function RestMenu(){
    // const [resInfo,setresInfo]=useState(null);
    const {resId}=useParams();

    const dummy="dummy data";

    const resInfo=useRestMenu(resId);

    const[showIndex,setshowIndex]=useState(null); // for collapsing categories(at a time one)

    if (resInfo===null ) return <Shimmer/>;

    // const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const rest=resInfo.cards[2].card.card.info;
    const itemCards = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    
    // console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    // console.log(resInfo)

    // const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter((c)=>
    //     c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // );

    //we need to filter card which has following text inside it
    const categories = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter( 
        (c) => c.card.card["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{rest?.name}</h1> 
            <h3 className="font-bold text-lg">{rest?.costForTwoMessage}</h3>
            <p className="mt-2">
                Cuisines: {rest?.cuisines.join(",")}
            </p>

            {/* categories accordians */}
            {categories?.map((category,index)=>(
                //controlled component
                <RestCategory key={category.card.card.title} data={category.card.card} 
                    showItems={index === showIndex ? true : false}
                    setshowIndex={()=>setshowIndex(index)} dummy={dummy}
                    />
            ))}

            {/* <ul>
                {itemCards?.map((item)=>(
                    <li key={item.card.info.id}>
                        <h3>{item.card.info.name}</h3>
                        <p>{item.card.info.description}</p>
                        <h4>Price: Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</h4>
                    </li>
                ))}
            </ul> */}

            

        </div>
    )
}