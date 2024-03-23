import RestaurantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
  const[listOfResturants,setListOfResturants]=useState([]);
  // const arr=useState();
  // const[listOfResturants,setListOfResturants]=arr;

   const[filteredRest,setfilteredRest]=useState([]);

  const [searchText,setsearchText]=useState("");

  
  // console.log("Body rendered");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{ 
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();

    // console.log(json);
    setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //implemented optional chaining
    
    //updating for if we make a empty search in search bar
    setfilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  } 

  //conditional rendering
  if(listOfResturants.length===0){
    return <Shimmer/>
  }
 
  return (
    <div className="body">
      
          <div className="search">
              <input type="text" className="search-box" placeholder="Search for restaurants" value={searchText} 
                  onChange={(e)=>{
                  setsearchText(e.target.value);

                  const filteredList = listOfResturants.filter(
                  (res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                );
                setfilteredRest(filteredList);

              }}/>
          
              <button className="search-btn"
              onClick={()=>{
              // console.log(searchText);

              const filteredRest=listOfResturants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRest(filteredRest);
              // setListOfResturants(filteredRest);
              }} 
              >Search</button>
          </div>

          <div className="filter">
              <button className="filter-btn"
              onClick={()=>{
              const filteredList=listOfResturants.filter(
              (res)=>res.info.avgRating>4
              );
              // console.log(listOfResturants);
              // console.log(filteredList);
              
              setListOfResturants(filteredList);
              }}><h3>Top Rated Resturants</h3></button>
          
            </div>

        
        <div className="res-container">
            {filteredRest.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
        </div>
        
    </div>
    
  )
}

export default Body;

