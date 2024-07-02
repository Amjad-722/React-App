import React from "react";
import { Link, Outlet } from "react-router-dom";

function Banana() {
  return (
    <div className="font-extrabold text-yellow-400 p-10">
      <h1> This is Banana</h1>
      <img
        src="https://images.theconversation.com/files/227374/original/file-20180712-27021-7iamol.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
        alt="Graps Image"
        className="mt-4 rounded-3xl"
      />

      <nav>
        <ul>
          <li>
            <Link to="details">Details</Link>
          </li>
          <li>
            <Link to="nutrition">Nutrition</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Banana;
