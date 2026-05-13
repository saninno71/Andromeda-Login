
import fondoLogo from "./styles/res/fondo-logo.png";

import "./styles/Content.css";

function Content() {


  return (
 
 
    <div
      className="content"
      
      // style={{backgroundImage: `url(${fondoLogo})`}}
    >
      <img className="fondo-logo" src={fondoLogo} />
    </div>




  );
}

export default Content;