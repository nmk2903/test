import React, { lazy } from "react";
import { IRouter } from "../@type/router.type";
import RouterLayout from "./RouterLayout";
import RouterAdminLayout from "./RouterAdminLayout";
const AdminLogin = lazy(() => import("../pages/admin/Login/AdminLogin"));
const Layout = lazy(() => import("../componenets/layouts/Layout"));
const AdminLayout = lazy(() => import("../componenets/layouts/AdminLayout"));

const RouterView: IRouter[] = [
    {
        path: "",
        public: true,
        name: "Layout",
        element: () => <Layout />,
        children: [...RouterLayout],
        // children: [...RouterLayout],
    },
    // {
    //     path: "*",
    //     public: true,
    //     name: "NotFound",
    //     children: [],
    //     element: () => <NotFound />,
    // },
    {
        name: "Admin",
        path: "admin",
        index: false,
        public: true,
        children: [],
        element: () => <AdminLogin />,
    },
    {
        name: "Dashboard",
        path: "dashboard",
        index: true,
        public: true,
        children: [...RouterAdminLayout],
        element: () => <AdminLayout />,
    },
];

export default RouterView;
