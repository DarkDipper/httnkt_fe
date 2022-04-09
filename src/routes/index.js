import { Navigate, useRoutes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Dashboard from "../components/Dashboard";
export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Dashboard />,
            children: [
                {
                    element: <Navigate to="/homepage"/>,
                    index: true
                },
                {
                    path: "/homepage",
                    element: <HomePage />,
                },
            ],
        },
    ]);
}
