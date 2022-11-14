import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddReview from "../Pages/AddReview/AddReview";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                
                element: <Services></Services>
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/addreview/:id",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

            },

        ]
    }
]);

