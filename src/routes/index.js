import { Navigate, useRoutes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Dashboard from "../components/Dashboard";
import ListLessonPage from "../pages/ListLessonPage";
import LessonPage from "../pages/LessonPage";
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/ResultPage";
import ListSectionPage from "../pages/ListSectionPage";
import ProfilePage from "../pages/ProfilePage";
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
                    path: "/lesson/:id_content",
                    element: <LessonPage />,
                },
                {
                    path: "/test",
                    element: <TestPage />,
                },
                {
                    path: "/result",
                    element:<ResultPage/>,
                },
                {
                    path: "/search/:keyword",
                    element:<ListSectionPage/>
                },
                {
                    path: "/profile",
                    element:<ProfilePage/>
                }
            ],
        },
    ]);
}
