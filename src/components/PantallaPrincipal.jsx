import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./PantallaPrincipal.css";

function PantallaPrincipal() {
  //const [view, setView] = useState("home");
  const [pantalla, setPantalla] = useState("sub1");
  const [monitorView, setMonitorView] = useState("visible");
  const [msgMonitor, setMsgMonitor] = useState("123");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const addMsgMonitor = (strMsg) =>
    setMsgMonitor(strMsg);

  return (
    <div className="PantallaPrincipal">
      <Header className="header" />
      <div className="main">
        <Sidebar className="sidebar" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setPantalla={setPantalla} setMonitorView={setMonitorView} />
        <Content className="content" pantalla={pantalla} addMsgMonitor={addMsgMonitor} /> 
      </div>

      {/* <div className="monitor" style={{visibility:monitorView}}>
      {msgMonitor} {msgMonitor}
      </div> */}
    
    </div>
  );
}

export default PantallaPrincipal;