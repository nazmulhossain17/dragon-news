import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Catagory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Profile from "../Pages/Others/Profile/Profile";
import TermsAndConditions from "../Pages/Others/TermsAndConditions";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`),
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/terms',
                element: <TermsAndConditions/>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])
   


