import React from "react";

import { Contacts } from "./pages/Contacts";
import { Corporate } from "./pages/Corporate";
import { Main } from "./pages/Main";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Contacts/> */}
      {/* <Main/> */}
      <Corporate />
    </div>
  );
}

export default App;
