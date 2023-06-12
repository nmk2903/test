import React from "react";

const SizeOption = ({
    size,
    active,
    onclick,
}: {
    size: productDetail;
    active?: boolean;
    onclick?: (data: productDetail) => void;
}) => {
    const colorStyle = {
        backgroundColor: `${active ? "black" : "#d9d9d9"}`,
        color: `${active ? "white" : "black"}`,
    };
    return (
        <>
            {size.in_stock > 0 ? (
                <div
                    style={colorStyle}
                    onClick={onclick ? () => onclick(size) : () => {}}
                    className=" bg-grayText rounded-lg text-black py-1 min-w-[50px] cursor-pointer hover:bg-black
                     hover:text-white transition-all mr-2"
                >
                    <div className="flex justify-center">{size.size}</div>
                </div>
            ) : (
                ""
            )}
            {/* <div
                className=" bg-grayText rounded-lg text-black py-1 min-w-[50px] cursor-pointer hover:bg-black
                        hover:text-white transition-all mr-2"
            >
                <div className="flex justify-center">{size.size}</div>
            </div> */}
        </>
    );
};

export default SizeOption;
