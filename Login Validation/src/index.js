  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import Login from './Login';
  import Register from './Register';
  import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
  import reportWebVitals from './reportWebVitals';

  const router = createBrowserRouter([
    {
      path:"/Login",
      element: <Login/>,
    },
    {
      path:"/Register",
      element: <Register/>,
    },
  ]);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
