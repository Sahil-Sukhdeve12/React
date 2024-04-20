import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

export default function ItemList({items,dummy}){
    // console.log(dummy);
    // console.log(items);

    const dispatch=useDispatch();

    const handleAddItem=(event,item)=>{
        event.preventDefault();
        //dispatch an action
        dispatch(addItem(item)); //here pizza is action.payload

    };

    return(
        <div>
            {items.map((item)=>(
            item.card && item.card.info ? (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>-₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        </div>
                    
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                        
                        <button className="p-2  rounded-lg bg-white text-green shadow-lg" 
                        onClick={(event)=>handleAddItem(event,item)}>
                            Add</button>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId}/>
                    </div>
                </div>
            ) : null
        ))}
        </div>
    )
}
// In this code, item.card && item.card.info ? (...) : null checks if item.card and item.card.info exist. If they do, it renders the JSX inside the parentheses (...). If they don't, it renders null.