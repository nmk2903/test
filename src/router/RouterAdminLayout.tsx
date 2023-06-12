import React, { lazy } from "react";
import { IRouter } from "../@type/router.type";
import { AdminComment, AdminProduct, AdminUser } from "../pages/admin";
import AdminContact from "../pages/admin/Contract/AdminContact";
import AdminBill from "../pages/admin/Bill/AdminBill";
// import AdminUser from "../pages/admin/User/AdminUser";
// import AdminProduct from "../pages/admin/Product/AdminProduct";
// const AdminProduct = lazy(() => import("../pages/admin/Product/AdminProduct"));
// const AdminUser = lazy(() => import("../pages/admin/User/AdminUser"));

const RouterAdminLayout: IRouter[] = [
    {
        name: "AdminUser",
        path: "users",
        index: true,
        public: true,
        children: [],
        element: () => <AdminUser />,
    },
    {
        name: "AdminProduct",
        path: "products",
        index: true,
        public: true,
        children: [],
        element: () => <AdminProduct />,
    },
    // {
    //     name: "AdminBlog",
    //     path: "blogs",
    //     index: true,
    //     public: true,
    //     children: [],
    //     element: () => <AdminBlog />,
    // },
    // {
    //     name: "AdminBooking",
    //     path: "bookings",
    //     index: true,
    //     public: true,
    //     children: [],
    //     element: () => <AdminBooking />,
    // },
    {
        name: "AdminContact",
        path: "contacts",
        index: true,
        public: true,
        children: [],
        element: () => <AdminContact />,
    },
    {
        name: "AdminComment",
        path: "comments",
        index: true,
        public: true,
        children: [],
        element: () => <AdminComment />,
    },
    {
        name: "AdminBill",
        path: "bills",
        index: true,
        public: true,
        children: [],
        element: () => <AdminBill />,
    },
];

export default RouterAdminLayout;
