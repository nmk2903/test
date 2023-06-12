import React, { ReactNode, useState } from "react";

const Button = ({
    styleProps,
    children,
}: {
    styleProps: buttonProp;
    children: ReactNode;
}) => {
    const [hover, setHover] = useState<boolean>(false);

    const styleNormal: buttonProp = {
        fontWeight: styleProps.fontWeight ? styleProps.fontWeight : "700",
        fontSize: styleProps.fontSize ? styleProps.fontSize : "1rem",
        display: styleProps.display ? styleProps.display : "inline-flex",
        justifyContent: styleProps.justifyContent
            ? styleProps.justifyContent
            : "center",
        alignItems: styleProps.alignItems ? styleProps.alignItems : "center",
        height: styleProps.height ? styleProps.height : "40px",
        borderRadius: styleProps.borderRadius
            ? styleProps.borderRadius
            : "16px",
        border: styleProps.border ? styleProps.border : "none",
        backgroundColor: styleProps.backgroundColor
            ? styleProps.backgroundColor
            : "#2f5acf",
        color: styleProps.color ? styleProps.color : "#FFFFFF",
        padding: styleProps.padding ? styleProps.padding : "0 30px",
        transition: styleProps.transition ? styleProps.transition : "all .2s",
        cursor: styleProps.cursor ? styleProps.cursor : "pointer",
        onclick: styleProps.onclick ? styleProps.onclick : () => {},
    };
    const styleHover = {
        backgroundColor: styleProps.hoverBgColor
            ? styleProps.hoverBgColor
            : "#000",
        color: styleProps.hoverTextColor ? styleProps.hoverTextColor : "#fff",
    };
    return (
        <>
            <div
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                style={{ ...styleNormal, ...(hover ? styleHover : null) }}
            >
                {children}
            </div>{" "}
        </>
    );
};

export default Button;
