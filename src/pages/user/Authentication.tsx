import { useState, useEffect, useRef } from "react";
import React from "react";
import "../../sass/Authentication/index.scss";
import { Form, Input, Button, Typography } from "antd";
import Login from "../../modules/authentication/Login";
import Register from "../../modules/authentication/Register";

const Authentication = () => {
    const [clickChange, setClickChange] = useState<boolean>(true);

    let className = "active";
    let idLogin = document.getElementById("loginRef");
    let idRegister = document.getElementById("registerRef");

    if (clickChange === true) {
        idLogin?.classList.add(className);
        idRegister?.classList.remove(className);
    } else {
        idRegister?.classList.add(className);
        idLogin?.classList.remove(className);
    }
    return (
        <>
            <div className="login-logout__wrapper">
                <div
                    className="login-logout--login active"
                    id="loginRef"
                    onClick={() => setClickChange(true)}
                >
                    Đăng nhập
                </div>

                <div
                    className="login-logout--logout"
                    id="registerRef"
                    onClick={() => setClickChange(false)}
                >
                    Đăng ký
                </div>
            </div>
            {clickChange === true ? <Login /> : <Register />};
        </>
    );
};

export default Authentication;
