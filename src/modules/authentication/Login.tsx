import { useState } from "react";
import React from "react";
import { connect } from "react-redux";
import "../../sass/Authentication/index.scss";
import logo from "../../assets/images/logo.png";
import { Form, Input, Button, Checkbox } from "antd";
import authService from "../../services/auth";
import { toast } from "react-toastify";
import { LoginPayload } from "../../@type/auth.type";
import { useNavigate } from "react-router-dom";
import { StorageKey } from "../../constants/StorageKey";
// import { useNavigate } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { LOGIN } from "../../../graphql/mutations/login.graphql";
// import JWTManager from "../../utils/jwt"
// import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const handleFinish = async (values: any) => {
        setLoading(true);
        const payload: LoginPayload = {
            email: values.email,
            password: values.password,
        };

        authService.login(payload).then(
            (res: any) => {
                if (!res) {
                    setLoading(false);
                    return;
                }
                localStorage.setItem(StorageKey.ACCESS_TOKEN, res.access_token);
                localStorage.setItem(StorageKey.FULL_NAME, res.user.full_name);
                toast.success("Đăng nhập thành công!");
                setLoading(false);
                navigate("/");
            },
            (err: any) => {
                toast.error(`Có lỗi xảy ra!`);
                setLoading(false);
            }
        );
    };
    return (
        <div className="login">
            <div className="login--logo">
                <img src={logo} alt="logo-sen-shop" />
            </div>
            {/* {errorMessage && <p style={{color:"red", textAlign: "center", fontSize:"20px"}}>{errorMessage}</p>} */}
            <div className="login--form">
                <Form
                    className="form--form"
                    layout="vertical"
                    wrapperCol={{ span: 24 }}
                    name="login"
                    autoComplete="off"
                    onFinish={handleFinish}
                >
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Email không được để trống!",
                            },
                        ]}
                    >
                        <Input className="input--css" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật Khẩu"
                        rules={[
                            {
                                required: true,
                                message: "Mật khẩu không được bỏ trống!",
                            },
                            {
                                min: 6,
                                message: "Độ dài từ 6 kí tự",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Nhớ mật khẩu</Checkbox>
                    </Form.Item>
                    <Form.Item name="submit">
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                        >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <div className="login--text">
                <p>
                    Bạn chưa có tài khoản?
                    <span>
                        <a>Đăng ký</a>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
