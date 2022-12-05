import React from "react";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import {Outlet} from 'react-router-dom';

export default function Layout({Children}){
    return(
        <div>
        <MainNavigation/>
        <main>
        {Children}
        <Outlet/>
        </main>
    
        </div>
    )
}