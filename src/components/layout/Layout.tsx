import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React from "react";

const Layout: React.FC = () => {
    return (<div style={{width: "100%"}}>
        <div className="container">
           <Sidebar />
        <div className="home-container">
            <Navbar />
            <React.Suspense fallback={<div><p>loading...</p></div>}>
                <Outlet />
            </React.Suspense>   
        </div>   
        </div>
      
    </div>)
}

export default Layout;