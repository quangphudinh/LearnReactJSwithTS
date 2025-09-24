import React, { Suspense } from 'react';
import './App.css';
import HomePage from './pages/home';
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/main_layout';
import EditPizza from './pages/edit_pizza';
// import CreatePizzaPage from './pages/create_pizza';
// import DetailPizza from './pages/detail_pizza';
const DetailPizza = React.lazy(() => import('./pages/detail_pizza'))
const CreatePizzaPage = React.lazy(() => import('./pages/create_pizza'))

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
      },
      {
        path : '/pizza/:id',
        element : <DetailPizza/>
      },
      {
        path : '/edit-pizza/:id',
        element : <EditPizza/>
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
  return (
    <Suspense>
      <RouterProvider router = {router}/>
    </Suspense>
  )
}

export default App;
