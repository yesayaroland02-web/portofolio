import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts";

import Hero from "../pages/hero";
import Skill from "../pages/skill";
import Contacts from "../pages/contacts";
import Portofolio from "../pages/portofolio";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
       {
        path: "portofolio",
        element: <Portofolio />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);