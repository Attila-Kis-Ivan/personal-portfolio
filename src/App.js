import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  Link,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Projects from "./routes/Projects/Projects";
import Resume from "./routes/Resume/Resume";
import Contact from "./routes/Contact/Contact";
import NavBar from "./Components/Navbar/NavBar";
import ErrorPage from "./routes/Error-Page/ErrorPage";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
