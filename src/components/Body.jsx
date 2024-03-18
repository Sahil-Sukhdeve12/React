import RestaurantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";


const Body=()=>{
  const[listOfResturants,setListOfResturants]=useState([]);
  // const arr=useState();
  // const[listOfResturants,setListOfResturants]=arr;

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{ 
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();

    console.log(json);
    setListOfResturants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  return (
    <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            const filteredList=listOfResturants.filter(
              (res)=>res.info.avgRating>4
            );
            setListOfResturants(filteredList);
          }}>Top Rated Resturants</button>
        </div>

        <div className="res-container">
            {listOfResturants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
            
        </div>
    </div>
  )
}

export default Body;

