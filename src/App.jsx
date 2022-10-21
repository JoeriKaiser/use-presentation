import "./App.css";
import { Suspense } from "react";
import Names from "./components/Names";

function App() {
  return (
    <div className="App">
      <h1>Presentation use</h1>
      <Suspense>
        <Names />
      </Suspense>
    </div>
  );
}

export default App;
