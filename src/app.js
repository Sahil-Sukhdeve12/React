import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 
import About from "./components/About";
import Contactus from "./components/Contact";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery")); //callback function takes path as a i/p

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
            element:<Suspense fallback={<h1>loading...</h1>}><About/></Suspense>
        },
        {
            path:"/contactus",
            element:<Contactus/>

        },
        {
            path:"/restaurants/:resId",
            element:<RestMenu/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
        }
        ],
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

