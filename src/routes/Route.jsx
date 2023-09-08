import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";

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
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;