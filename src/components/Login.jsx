import './styles/Login.css'
import logo from "./styles/res/logo-andromeda.png";

function Login({onResult}) {
  
  return (
    
    <div className="login-page">
        
        <div className="login-card">
    
            <div className="login-left">
              <img src={logo} className="logo" />
              

              <div className="login-content">
                <h2 className="welcome">¡Bienvenido!</h2> 

                <form className="login-form">

                  <div className="input-group floating">
                    <input className="input-user" type="text" placeholder=" " required autoFocus />
                    <label>Usuario</label>
                  </div>

                  <input className="input-password" type="password" placeholder="Contraseña" />

                  <div className="login-actions">
                    <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>
                    <button type="submit" className="btn-login">INGRESAR</button>
                  </div>

                </form>

              </div>
            </div>

            <div className="login-right">
              <div className="right-content">
                <p className="right-phrase">
                  "Lo que no se mide, no se puede mejorar."
                </p>

                <p className="right-author">
                    — Peter Drucker
                </p>
              </div>
            </div>

        </div>
    </div>
  );
}

export default Login;