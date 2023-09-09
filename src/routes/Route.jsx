import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import Dashboard from "../layout/Dashboard";
import AddPosts from "../dashboard/AddPosts";

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