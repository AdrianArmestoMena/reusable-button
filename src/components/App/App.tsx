import React from "react";
import Button from "../Button/Button";
import AppStyled from "./AppStyled";

const App = () => {
  return (
    <AppStyled className="app-mayuscula">
      <main className="app-mayuscula__button-container">
        <Button
          action={() => console.log("primary")}
          semantic="primary"
          text={"Botton Primario"}
        />
        <Button
          action={() => console.log("secondary")}
          semantic="secondary"
          text={"Boton 2"}
        />
      </main>
    </AppStyled>
  );
};

export default App;
