import { useState } from "react";
import Login from "./Login";
import SeleccionAmbiente from "./SeleccionDB";
// import PantallaPrincipal from "./PantallaPrincipal";
import RecuperarPassword from "./RecuperarPassword";

function App() {
  const [step, setStep] = useState("login");

  return (
    <>
      {step === "login" && (
        <Login
          onResult={(result) => {
            if (result === "success") setStep("ambiente");
            if (result === "forgot") setStep("forgot");
          }}
        />
      )}

      {step === "forgot" && (
        <RecuperarPassword onBack={() => setStep("login")} />
      )}

      {step === "ambiente" && (
        <SeleccionAmbiente onNext={() => setStep("app")} />
      )}

      {/* {step === "app" && <PantallaPrincipal />} */}
    </>
  );
}

export default App;