import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SlidebarData";

import "./Navbar.css";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { user,setUser } = useAuth();
  const navigate = useNavigate();
  // console.log(user);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {console.log(user)}
          {user.currentUser ? <><p style={{ color: "#fff" }}>{user.currentUser?.username}</p><button onClick={() => { setUser({ currentUser: null }); navigate("/") }} > Logout </button></> : <button onClick={()=>{navigate("/")}}> Login </button>
          }
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}