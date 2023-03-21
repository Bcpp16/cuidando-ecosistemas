import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import Home from './pages/home/Home'
// import Start from './pages/start/Start'
import Login from './pages/userModule/Login'
import CreateAccount from './pages/userModule/CreateAccount'

import Welcome from './pages/userModule/Welcome'
// import Loading from './components/Loading';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <CreateAccount />,
  },


  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,

)

