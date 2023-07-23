import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg">
        Edit App.tsx to add more routes. If you want to go through all the
        available routes. Visit the following Links:
      </p>
      <div className="flex justify-center items-center gap-4 mt-5">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/post/1" className="text-blue-500 hover:underline">
          Post 1
        </Link>
        <Link to="/post/70" className="text-blue-500 hover:underline">
          Post 70
        </Link>
        <Link to="/aboutus" className="text-blue-500 hover:underline">
          About
        </Link>
      </div>
    </div>
  );
};

export default Home;
