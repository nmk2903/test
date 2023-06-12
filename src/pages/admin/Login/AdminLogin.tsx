import { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";

import "../../../sass/Admin/AdminLogin.scss";
import logo from "../../../assets/logo_qkit.svg";

const AdminLogin = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            style={{
                height: "20%",
                width: "40%",
                position: "absolute",
                top: "20%",
                left: "25%",
            }}
        >
            <Form.Item name="logo">
                <img
                    src={logo}
                    alt="logo"
                    className="admin_logo"
                    style={{ width: "80%", position: "relative", left: "50%" }}
                />
            </Form.Item>
            {errorMessage && (
                <p
                    style={{
                        color: "red",
                        textAlign: "center",
                        fontSize: "20px",
                    }}
                >
                    {errorMessage}
                </p>
            )}
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Username không được để trống!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Password không được để trống!",
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
                <Button htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default AdminLogin;
