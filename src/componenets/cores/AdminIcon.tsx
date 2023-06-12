import { Avatar, Dropdown, message, Space, MenuProps, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { items } from "./AdminIconDropDown";

const AdminIcon = () => {
    return (
        <>
            <div
                style={{
                    display: "inline-block",
                    position: "absolute",
                    right: "0",
                    marginRight: "2%",
                    minWidth: "8%",
                }}
            >
                <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
                    <Space>
                        <Avatar
                            style={{
                                color: "#f56a00",
                                backgroundColor: "#fde3cf",
                                marginRight: "10px",
                            }}
                            icon={<UserOutlined />}
                        />
                        {/* {JWTManager.getUsername()} */}
                        Admin
                    </Space>
                </Dropdown>
            </div>
        </>
    );
};

export default AdminIcon;
