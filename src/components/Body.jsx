import RestaurantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body=()=>{
  // const[listOfResturants,setListOfResturants]=useState(resList);
  const arr=useState(resList);
  const[listOfResturants,setListOfResturants]=arr;

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

