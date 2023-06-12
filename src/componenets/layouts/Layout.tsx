import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../layouts";
import { ScrollToTop } from "../cores";

const Layout = () => {
    return (
        <>
            <Header />
            {/* <Navigation /> */}
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
