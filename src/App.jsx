import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { findLongestWord, countOccurrences, calculateTotal, addEntry, Tab, searchById } from "./Ecmascript/fichier";

import "./App.css";
import Header from "./header";
import Footer from "./footer";

function App() {
  const [count, setCount] = useState(0);

  addEntry("Alice", 25);
  addEntry("Bob", 30);

  return (
    <>
      <div>
        <Header/>
        <main>

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
      </main>
     <Footer/>
     </div>
    </>
  );
}

export default App;
