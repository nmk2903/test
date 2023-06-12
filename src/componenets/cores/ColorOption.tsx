import React, { useState } from "react";

const ColorOption = ({
    color,
    active,
    onclick,
}: {
    color: productColor;
    active: boolean;
    onclick: (data: productColor) => void;
}) => {
    const colorStyle = {
        backgroundColor: color.color_value,
    };
    const borderStyle: string = `relative  ${active ? "boderBefore" : ""}`;
    return (
        <>
            <div onClick={() => onclick(color)} className={borderStyle}>
                <div
                    className="w-9 h-5 rounded-lg ml:rounded-xl mx-1 my-1"
                    style={colorStyle}
                ></div>
            </div>
        </>
    );
};

export default ColorOption;
