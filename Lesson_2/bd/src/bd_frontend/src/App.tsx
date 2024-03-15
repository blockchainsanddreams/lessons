import * as React from "react";
import { RouteObject, Link, useRoutes } from "react-router-dom";
//import Home from "./pages/Home";
//import About from "./pages/About";


export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ];


  let element = useRoutes(routes);

  return (
    <>
      {element}
    </>
  );
  
}



function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        <Link to="/about">Go to the about page</Link>
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
