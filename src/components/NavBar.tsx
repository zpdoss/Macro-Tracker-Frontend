import "./NavBar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';


const NavBar: React.FC = () =>
{
    return(
        <nav className="nav">
            <h1 className="siteTitle">
                Di-orie
            </h1>
            <ul>
                <CustomLink to="/Diary">Diary</CustomLink>
                <CustomLink to="/Recipes">Custom Foods</CustomLink>
                <CustomLink to="/Account">Account</CustomLink>
                <CustomLink to="/AboutUs">About Us</CustomLink>
                <CustomLink to="/Calendar">Calendar</CustomLink>

            </ul>
        </nav> 
    );

};

function CustomLink({ to, children, ...props }:any)
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })
    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>

        </li>
            
    );

}

export default NavBar;