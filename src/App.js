import logo from "./logo.svg";
import "./App.css";

import ContadorHooks from "./componentes/ContadorHooks";
import ScrollHoohks from "./componentes/ScrollHoohks";
import RelojHooks from "./componentes/RelojHooks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContadorHooks />
        <hr />

        <ScrollHoohks />
        <hr></hr>

        <RelojHooks />
      </header>
    </div>
  );
}

export default App;
