import RestaurantCard from "./ResturantCard";

import resList from "../utils/mockData";

export default function Body(){
        return (
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                    {resList.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))}
                    
                </div>
            </div>
        )
}