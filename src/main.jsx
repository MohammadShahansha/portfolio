import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Skills from './component/Skills/Skills';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Project from './component/Project/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"about",
        element:<About></About>
      },
      {
        path: "skill",
        element:<Skills></Skills>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "project",
        element: <Project></Project>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
