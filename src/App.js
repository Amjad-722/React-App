import React from "react";
import Apple from "./Components/Apple/Apple";
import Banana from "./Components/Banana/Banana";
import Graps from "./Components/Graps/graps"; 
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-evenly">
        <h1 className="flex flex-col items-center font-extrabold">
          My Favorite Fruits
        </h1>
        <div />
        <div className="justify-start">
          <nav className="flex space-x-2">
            <ul className="flex space-x-6 justify-evenly">
              <li>
                <Link to="/Apple">Apple</Link>
              </li>
              <li>
                <Link to="/Banana">Banana</Link>
              </li>
              <li>
                <Link to="/Graps">Graps</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/Apple" element={<Apple />} />
            <Route path="/Banana" element={<Banana />} />
            <Route path="/Graps" element={<Graps />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
