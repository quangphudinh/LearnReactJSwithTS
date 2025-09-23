import React from 'react';
// import { useState } from 'react';
import './App.css';
import Header from './layouts/header';
import HomePage from './pages/home';
import Footer from './layouts/footer';
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/main_layout';
import CreatePizzaPage from './pages/create_pizza';

const appRoutes : RouteObject[] = [
  {
    path : '/',
    element : <MainLayout/>,
    children : [
      {
        index : true,
        element : <HomePage/>
      },
      {
        path : '/create-pizza',
        element : <CreatePizzaPage/>
      }
    ]
  }
]

const router = createBrowserRouter([
  {
    element : (
      <Outlet/>
    ),
    children : appRoutes 
  }
])

function App() {
  return <RouterProvider router = {router}/>
}

export default App;
