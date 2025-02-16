import { lazy } from "react"
const HomeLayout = lazy(() => import("../components/layouts/Homelayout/HomeLayout"))
const Login = lazy(() => import("../pages/Login/Login"))
const ForgotPassword = lazy(() => import("../pages/ForgotPassword/ForgotPassword"))
const Home = lazy(() => import("../pages/Home/Home"))
const Register = lazy(() => import("../pages/Register/Register"))
const DashBoard = lazy(() => import("../pages/DashBoard/DashBoard"))
import {
    IconAdjustments,
    IconUsersGroup,
    IconBuilding,
} from '@tabler/icons-react';



export const paths = {
    publicRoutes: {
        home: {
            path: "/home",
            element: Home,
        },
        login: {
            path: "/login",
            element: Login
        },
        register: {
            path: "/register",
            element: Register
        },
        forgot: {
            path: "/forgotpassword",
            element: ForgotPassword
        },
    },
    privateRoutes: {
        home: {
            path: "/",
            element: HomeLayout,
            children: {
                Home: {
                    path: "/dashboard",
                    element: DashBoard,
                }
            }
        }
    }
}


export const sideBarMenu = [
    { label: 'Dashboard', icon: IconBuilding, link: '/dashboard' },
    { label: 'users', icon: IconUsersGroup, link: '/users' },
    {
        label: 'Settings',
        icon: IconAdjustments,
        links: [
            { label: 'Token', link: '/token' },
            { label: 'User Log', link: '/userlogs' },
        ],
    },
]