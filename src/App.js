import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BananaDetails from './Components/BananaDetails/BananaDetails';
import Graps from './Components/Graps/Graps';
import Apple from './Components/Apple/Apple';
import Banana from './Components/Banana/Banana';

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="flex flex-col font-extrabold">My Favorite Fruits</h1>
      <div />
      <div className="justify-start flex items-center flex-col">
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
        <div className="mt-10">
          <Routes>
            <Route path="/Apple" element={<Apple />} />
            <Route path="/Banana" element={<Banana />}>
              <Route path="/BananaDetails" element={<BananaDetails />} />
            </Route>
            <Route path="/Graps" element={<Graps />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
