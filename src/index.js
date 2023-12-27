import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchPage from './pages/SearchPage';
import Anime from './pages/Anime/Anime';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute ><App /></ProtectedRoute>,
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "/anime",
    element : <Anime />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/account",
    element: <Account />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
