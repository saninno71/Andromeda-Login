import { useState } from "react";
import menuData  from "./simul/menu.json";
import "./styles/Sidebar2.css";

function Sidebar({ sidebarOpen,setSidebarOpen}) {


return (
<aside className="sidebar"
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}>

  <div className={`sidebar-inner ${sidebarOpen ? "expanded" : ""}`}>

    <div className="sidebar-top">

        {/* INICIO Menu Items Auto desde Jscon */}
        {menuData.map((item, index) => (

        <div className="menu-item" key={item.id}>

          <div className="menu-main">
            <span className="icon">
              <img
                src={`${import.meta.env.BASE_URL}/images/menu-principal/${item.icon}.png`}
                alt={item.label}
              />
            </span>
            <span className="label">{item.label}</span>
          </div>

          {item.children && (
            <div className="sub-menu">

            {item.children.map((subItem) => (

              <div
                className="sub-menu-item"
                key={subItem.id}
              >
                <span className="sub-icon">▸</span>
                <span>{subItem.label}</span>
              </div>

            ))}

          </div>

        )}

        </div>
        )
        )}  

    </div>

    {/* <div className="sidebar-search">
      <div className="menu-item">
        <div className="menu-main">
          <span className="icon">
            <img
            src={`${import.meta.env.BASE_URL}/images/menu-principal/buscar.png`}
            />
          </span>
        </div>
      </div>
    </div> */}

    <div className="search-box">

    {!sidebarOpen && (
      <div className="menu-item">
        <div className="menu-main">
          <span className="icon">
            <img
              src={`${import.meta.env.BASE_URL}/images/menu-principal/buscar.png`}
            />
          </span>
        </div>
      </div>
    )}

  {sidebarOpen && (
    <div className="search-input-wrapper">

    <input
      type="text"
      placeholder="Buscar"
      className="search-input"
    />

    <span className="search-input-icon">
      <img
              src={`${import.meta.env.BASE_URL}/images/menu-principal/buscar.png`}
      />
    </span>

  </div>
  )}

</div>


    <div className="sidebar-bottom">
      <div className="menu-item">
        <div className="menu-main">
          <span className="icon">
            <img
            src={`${import.meta.env.BASE_URL}/images/menu-principal/Config.png`}
            />
          </span>
          <span className="label">Configuración</span>
        </div>
      </div>
    </div>


  </div>    
</aside>
  );
}

export default Sidebar;