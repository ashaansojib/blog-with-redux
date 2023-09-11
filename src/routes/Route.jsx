import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import Dashboard from "../layout/Dashboard";
import AddPosts from "../dashboard/AddPosts";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/details',
                element: <Details />
            }
        ]
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/add-posts',
                element: <AddPosts />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;