import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Layout from "@/modules/Layout/Layout";
import Register from "@/modules/register/Register";
import Login from "@/modules/login/Login";
import LandingPage from "@/modules/landingPage/LandingPage";
import Dashboard from "@/modules/dashboard/Dashboard";
import ProjectsList from "@/modules/projectsList/ProjectsList";
import SingleProject from "@/modules/projectsList/_view/singleProject/SingleProject";
import DashboardLayout from "@/modules/dashboardLayout/DashboardLayout";
import ForgetPassword from "@/modules/forgetPassword/ForgetPassword";
import TasksList from "@/modules/tasksList/TasksList";
import TaskDetails from "@/modules/tasksList/_view/taskDetails/TaskDetails";
import TeamMember from "@/modules/teamMember/TeamMember";
import NotFoundPage from "@/shared/notFoundPage/NotFoundPage";
import Profile from "@/modules/profile/Profile";
import ErrorElement from "@/shared/errorElement/ErrorElement";

const router = createBrowserRouter(
    [
        {
            path: ROUTES.MAIN, element: <Layout />,
            errorElement: <ErrorElement />,
            children: [
                { index: true, element: <LandingPage /> },
                {
                    path: ROUTES.REGISTER, element: <Register />
                },
                {
                    path: ROUTES.LOGIN, element: <Login />
                },
                {
                    path: ROUTES.FORGET_PASSWORD, element: <ForgetPassword />
                }
            ],
        },
        {
            path: ROUTES.DASHBOARD_LAYOUT, element: <DashboardLayout />, children: [
                {
                    index: true, element: <Dashboard />
                },
                {
                    path: ROUTES.DASHBOARD, element: <Dashboard />
                },
                {
                    path: ROUTES.PROJECTS_LIST, element: <ProjectsList />
                },
                {
                    path: ROUTES.SINGLE_PROJECT, element: <SingleProject />
                },
                {
                    path: ROUTES.TASKS_LIST, element: <TasksList />
                },
                {
                    path: ROUTES.TASKS_DETAILS, element: <TaskDetails />
                },
                {
                    path: ROUTES.TEAM_MEMBER, element: <TeamMember />
                },
                {
                    path: ROUTES.PROFILE, element: <Profile />
                },
            ],
            errorElement: <ErrorElement />,
        },
        {
            path: "*", element: <NotFoundPage />
        },
    ]
)


export default router;