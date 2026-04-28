import { useState } from "react";
import menuData  from "./simul/menu.json";
import "./Sidebar2.css";

function Sidebar({ sidebarOpen,setSidebarOpen,setPantalla,setMonitorView }) {
  // const [hoverItem, setHoverItem] = useState(null);

// console.log(menuData );

console.log("inicio");
menuData.map(item => {
  console.log(item.label);
});
console.log("fin");

  return (
<aside className="sidebar"
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}>

  <div className={`sidebar-inner ${sidebarOpen ? "expanded" : ""}`}>

    <div className="menu-item">

      <div className="menu-main">
        <span className="icon">📊</span>
        <span className="label">Dashboard</span>
      </div>
      
      <div className="sub-menu">
        <div className="sub-menu-item">1234567890121314151617181910202103343546576767</div>
        <div className="sub-menu-item">2</div>
        <div className="sub-menu-item">3</div>
      </div>
    </div>

    <div className="menu-item">

      <div className="menu-main">
        <span className="icon">⚙️</span>
        <span className="label">Configuración</span>
      </div>
      
      <div className="sub-menu">
        <div className="sub-menu-item">4</div>
        <div className="sub-menu-item">5</div>
        <div className="sub-menu-item">6</div>
      </div>
    </div>
    
    <div className="menu-item">

      <div className="menu-main">
        <span className="icon">⚙️</span>
        <span className="label">test auto</span>
      </div>

    </div>

    {/* INICIO Menu Items Auto desde Jscon */}
    {menuData.map((item, index) => (

    <div className="menu-item">

      <div className="menu-main">
        <span className="icon">⚙️</span>
        <span className="label">Auto</span>
      </div>

    </div>

    )
    )}  

    {/* INICIO Menu Items Auto desde Jscon */}



        {/* <div className="monitor-item"
          onClick={() => setMonitorView(prev => prev === "visible" ? "hidden" : "visible")}
        >Monitoreo</div> */}
  </div>    
</aside>
  );
}

export default Sidebar;