import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 
import About from "./components/About";
import Contactus from "./components/Contact";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contactus",
            element:<Contactus/>

        },
        {
            path:"/restaurants/:resId",
            element:<RestMenu/>
        }
        ],
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

