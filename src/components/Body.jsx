import RestaurantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
  const[listOfResturants,setListOfResturants]=useState([]);
  // const arr=useState();
  // const[listOfResturants,setListOfResturants]=arr;

  const [searchText,setsearchText]=useState("");

  const[filteredRest,setfilterRest]=useState("");

  // console.log("Body rendered");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{ 
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();

    console.log(json);
    setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //implemented optional chaining
  }

  //conditional rendering
  if(listOfResturants.length===0){
    return <Shimmer/>
  }

  return (
    <div className="body">

        <div className="filter">
          <div className="search">
          <input type="text" className="search-box" value={searchText} 
          onChange={(e)=>{
            setsearchText(e.target.value);
          }}/>
          <button
            onClick={()=>{
              console.log(searchText);

              const filteredRest=listOfResturants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setfilterRest(filteredRest);
              setListOfResturants(filteredRest); 
            }}
          >Search</button>
        </div>

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

