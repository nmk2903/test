import { Avatar, Dropdown, message, Space, MenuProps, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import AuthService from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const handleClick = () => {
    // const navigate = useNavigate();
    AuthService.logout().then((res: any) => {
        toast.success("Đăng xuất thành công!");
        localStorage.clear();
        location.reload();
        // navigate("/");
    });
};
export const items: MenuProps["items"] = [
    {
        label: <p onClick={handleClick}>Logout</p>,
        key: "1",
        icon: <LogoutOutlined />,
    },
];
