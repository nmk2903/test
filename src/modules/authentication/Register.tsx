import { useState } from "react";
import React from "react";
import "../../sass/Authentication/index.scss";
import logo from "../../assets/images/logo.png";
import { Form, Input, Button, Typography, InputNumber } from "antd";
import { RegisterPayload } from "../../@type/auth.type";
import authService from "../../services/auth";
import { toast } from "react-toastify";

const Register = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();
    const [form] = Form.useForm();
    const handleFinish = (values: any) => {
        setLoading(true);
        const payload: RegisterPayload = {
            full_name: values.full_name,
            password: values.password,
            password_confirmation: values.confirm_password,
            email: values.email,
            phone_number: values.phone_number,
            address: values.address,
        };
        authService.register(payload).then(
            (res: any) => {
                toast.success("Đăng ký thành công!");
                setLoading(false);
                form.resetFields();
            },
            (err: any) => {
                const errors = JSON.parse(err.response.data);
                setError(errors);
                toast.error(`Đã có lỗi xảy ra!`);
                setLoading(false);
            }
        );
    };

    return (
        <div className="Logout">
            <div className="Logout--logo">
                <img src={logo} alt="logo-sen-shop" />
            </div>
            {/* {errorMessage && <p style={{color:"red", textAlign: "center", fontSize:"20px"}} >{errorMessage}</p>} */}
            <div className="Logout--form">
                <Form
                    form={form}
                    onFinish={handleFinish}
                    className="form--form"
                    layout="vertical"
                    wrapperCol={{ span: 24 }}
                    name="register"
                    autoComplete="off"
                >
                    <Form.Item
                        name="full_name"
                        rules={[
                            {
                                required: true,
                                message: "Tên không được để trống!",
                            },
                        ]}
                        label="Tên đăng nhập"
                    >
                        <Input className="input--css" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Email không được bỏ trống!",
                            },
                            {
                                type: "email",
                                message: "Email phải đúng định dạng!",
                            },
                        ]}
                        label="Email"
                    >
                        <Input className="input--css" />
                    </Form.Item>
                    <p className="text-red-600">{error ? error.email : ""}</p>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Password không được bỏ trống!",
                            },
                            {
                                min: 6,
                                message: "Độ dài từ 6 kí tự",
                            },
                        ]}
                        hasFeedback
                        label="Mật khẩu"
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirm_password"
                        label="Nhập lại mật khẩu"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng xác nhận mật khẩu!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "Xác nhận mật khẩu không chính xác!"
                                        )
                                    );
                                },
                            }),
                            {
                                min: 6,
                                message: "Độ dài từ 6 kí tự",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="phone_number"
                        rules={[
                            {
                                required: true,
                                message: "Number Phone không được bỏ trống!",
                            },
                            {
                                min: 10,
                                message: "Độ dài là 10 kí tự",
                            },
                        ]}
                        label="Số diện thoại"
                    >
                        <Input className="input--css" />
                    </Form.Item>
                    <Form.Item name="address" label="Địa chỉ">
                        <Input className="input--css" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginTop: "30px" }}
                            loading={loading}
                        >
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <div className="Logout--text" style={{ marginTop: "20px" }}>
                <p>
                    Bạn đã có tài khoản?
                    <span>
                        <a>Đăng nhập</a>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
