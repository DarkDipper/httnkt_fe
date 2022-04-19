import { Navigate, useRoutes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Dashboard from "../components/Dashboard";
import ListLessonPage from "../pages/ListLessonPage";
import LessonPage from "../pages/LessonPage";
import TestPage from "../pages/TestPage";
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
                {
                    path: "/listlesson/:id",
                    element: <ListLessonPage />,
                },
                {
                    path: "/lesson",
                    element: <LessonPage />,
                },
                {
                    path: "/test",
                    element: <TestPage />,
                },
            ],
        },
    ]);
}
