import React, { useState, useEffect } from "react";
import { Layout, Menu, message, MenuProps } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    CodeSandboxOutlined,
    BookOutlined,
    FormOutlined,
    ContactsOutlined,
    CommentOutlined,
    PayCircleOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { AdminLogin } from "../../pages/admin";
import "../../sass/Admin/AdminLayout.scss";
import AdminIcon from "../cores/AdminIcon";
import icon from "../../assets/images/logo.png";

const AdminLayout = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    // const { isAdmin } = useAuthContext();
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = () => {
        setCollapsed(!collapsed);
    };
    const { Header, Sider, Content, Footer } = Layout;

    type MenuItem = Required<MenuProps>["items"][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode
    ): MenuItem {
        return {
            key,
            icon,
            label,
        } as MenuItem;
    }

    useEffect(() => {
        const handleResize = () => {
            if (!(window.innerWidth > 800) && collapsed === false) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
            if (!(window.innerHeight > 400)) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
        };
        window.addEventListener("resize", handleResize, true);

        return () => {
            window.removeEventListener("resize", handleResize, true);
        };
    });

    // const items: MenuProps['items']= [
    //     {
    //         key: "1",
    //         icon: <UserOutlined />,
    //         label: "User",
    //         path: "users",
    //     },
    //     {
    //         key: "2",
    //         icon: <CodeSandboxOutlined />,
    //         label: "Product",
    //         path: "products",
    //     },
    //     {
    //         key: "3",
    //         icon: <BookOutlined />,
    //         label: "Blog",
    //         path: "blogs",
    //     },
    //     {
    //         key: "4",
    //         icon: <FormOutlined />,
    //         label: "Bookings",
    //         path: "bookings",
    //     },
    //     {
    //         key: "5",
    //         icon: <ContactsOutlined />,
    //         label: "Contacts",
    //         path: "contacts",
    //     },
    //     {
    //         key: "6",
    //         icon: <CommentOutlined />,
    //         label: "Comments",
    //         path: "comments",
    //     },
    //     {
    //         key: "7",
    //         icon: <PayCircleOutlined />,
    //         label: "Bills",
    //         path: "bill",
    //     },
    // ];

    const items: MenuProps["items"] = [
        getItem(<Link to="users">User</Link>, "1", <UserOutlined />),
        getItem(
            <Link to="products">Product</Link>,
            "2",
            <CodeSandboxOutlined />
        ),
        // getItem(<Link to="blogs">Blog</Link>, "3", <BookOutlined />),
        // getItem(<Link to="bookings">Bookings</Link>, "4", <FormOutlined />),
        getItem(<Link to="contacts">Contacts</Link>, "3", <ContactsOutlined />),
        getItem(<Link to="comments">Comments</Link>, "4", <CommentOutlined />),
        getItem(<Link to="bills">Bills</Link>, "5", <PayCircleOutlined />),
    ];

    return (
        <Layout className="Admin_Layout" style={{ height: "100%" }}>
            <Sider
                width="15%"
                style={{ height: "100vh", position: "sticky", top: "0" }}
                theme="light"
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div
                    className="logo"
                    style={{
                        padding: "10px",
                        height: "30%",
                        position: "relative",
                        top: "1%",
                    }}
                >
                    <img src={icon} alt="logo" style={{ width: "50%" }} />
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["0"]}
                    items={items}
                ></Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        backgroundColor: "white",
                        position: "sticky",
                        top: "0",
                        zIndex: "500",
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            style: { marginRight: "1%" },
                            className: "trigger",
                            onClick: onToggle,
                        }
                    )}
                    Welcome to Admin!
                    <AdminIcon />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        backgroundColor: "white",
                        wordWrap: "break-word",
                        display: "block",
                    }}
                >
                    <Outlet />
                </Content>
                <Footer
                    style={{
                        backgroundColor: "white",
                        textAlign: "center",
                        position: "sticky",
                        bottom: "0",
                    }}
                >
                    {" "}
                    CoolmateShop &copy;2022 Created by BangNguKhoiNgu
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
