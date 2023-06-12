import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";

type child = {
    label: React.ReactNode;
    key: number;
};
// : React.FC
const MenuHeader = ({ categories }: { categories: category[] }) => {
    const [current, setCurrent] = useState("mail");
    const navigate = useNavigate();

    const child: child[] = [];
    categories.map((category) => {
        let a: child = {
            label: <Link to={`category/${category.id}`}>{category.name}</Link>,
            key: category.id,
        };
        child.push(a);
    });
    const items: MenuProps["items"] = [
        {
            label: "Áo Nam",
            key: "AoName",
            icon: <SettingOutlined />,
            children: child,
        },
    ];
    const onClick: MenuProps["onClick"] = (e) => {
        //console.log("click ", e);
    };

    return (
        <Menu
            onClick={onClick}
            // selectedKeys={[current]}
            mode="horizontal"
            items={items}
        >
            {/* //<Link to={`category/1`}></Link> */}
        </Menu>
    );
};

export default MenuHeader;
