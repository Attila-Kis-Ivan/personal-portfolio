import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Projects from "./routes/Projects/Projects";
import Resume from "./routes/Resume/Resume";
import Contact from "./routes/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
