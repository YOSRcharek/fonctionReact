import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { findLongestWord, countOccurrences, calculateTotal, addEntry, Tab, searchById } from "./Ecmascript/fichier";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  addEntry("Alice", 25);
  addEntry("Bob", 30);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div>
        <h2>Test des Fonctions ES6</h2>
        <p>Mot le plus long : {JSON.stringify(findLongestWord(["React", "JavaScript", "Développement", "Web"]))}</p>
        <p>Occurrences : {JSON.stringify(countOccurrences([["chat", "chien"], ["chat", "oiseau"], ["chien", "chien"]]))}</p>
        <p>Total des notes : {calculateTotal([30, 45, 60, 80, 20, 90])}</p>
        <p>Recherche ID 2 : {JSON.stringify(searchById(Tab, 2))}</p>
        <p>Recherche ID 5 : {JSON.stringify(searchById(Tab, 5))}</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
