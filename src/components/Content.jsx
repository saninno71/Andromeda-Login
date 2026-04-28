//import { useState } from "react";
// import { useEffect } from "react";
import "./Content.css";

function Content({ pantalla,addMsgMonitor }) {

  // useEffect(() => {
  //   addMsgMonitor("Inicio Content");
  // }, []);
  // console.log("Hola");

  return (
    <div className="content">
      {pantalla === "sub1" && <h1>sub1 456 Pantalla principal</h1>}
      {pantalla === "sub3" && <h1>sub3 Manola, Hola mundo 👋</h1>}
    </div>
  );
}

export default Content;