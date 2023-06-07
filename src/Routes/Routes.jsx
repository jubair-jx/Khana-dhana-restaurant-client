import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home/Home";
import Menu from "../components/Pages/Menu/Menu";
import Order from "../components/Pages/Order/Order";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";
import Secret from "../components/Pages/Secret/Secret";
import PrivateRoute from "../ProtectedRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../components/Pages/Dashboard/MyCart/MyCart";
import AllUser from "../components/Pages/AllUser/AllUser";
import AddItem from "../components/Pages/Dashboard/MyCart/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../components/Pages/Dashboard/ManageItem";
import Payment from "../components/Pages/Dashboard/Payment/Payment";
import AdminHome from "../components/Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../components/Pages/Dashboard/UserHome/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>,
          </AdminRoute>
        ),
      },
      {
        path: "manageitem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
export default router;
