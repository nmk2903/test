import React from "react";

const ShippingInformation = () => {
    return (
        <>
            <div>
                {/* title */}
                <div className="font-bold text-[30px] mb-6 ">
                    {"Thông tin vận chuyển"}
                </div>
                {/* info */}
                <div>
                    <form action="">
                        {/* name, phone */}
                        <div className="flex">
                            {/* name */}
                            <div className="py-2 w-1/2 pr-1">
                                <input
                                    type="text"
                                    placeholder="Họ tên"
                                    name="full_name"
                                    className="bg-white border-solid border-2 rounded-2xl h-10 w-full py-1 px-5"
                                />
                            </div>
                            {/* phone */}
                            <div className="py-2 w-1/2 px-1">
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                    name="phone"
                                    className="bg-white border-solid border-2 rounded-2xl h-10 w-full py-1 px-5"
                                />
                            </div>
                        </div>
                        {/* Email */}
                        <div className="py-2 w-full pr-1 ">
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                className="bg-white border-solid border-2 rounded-2xl h-10 w-full py-1 px-5"
                            />
                        </div>
                        {/* address */}
                        <div className="py-2 w-full pr-1">
                            <input
                                type="text"
                                placeholder="Địa chỉ(ví dụ: ktx khu B DHQG,TPHCM)"
                                name="address"
                                className="bg-white border-solid border-2 rounded-2xl h-10 w-full py-1 px-5"
                            />
                        </div>
                        {/* note */}
                        <div className="py-2 w-full pr-1">
                            <input
                                type="text"
                                placeholder="Ghi chú thêm(ví dụ: Giao giờ hành chính)"
                                name="note"
                                className="bg-white border-solid border-2 rounded-2xl h-10 w-full py-1 px-5"
                            />
                        </div>
                        <button className="hover:bg-grayText hover:text-black bg-black text-xl rounded-2xl py-4 px-5 h-14 w-full text-white text-center cursor-pointer transition-all mt-5">
                            {"Thanh toán "}
                            <span>{"55k"}</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ShippingInformation;
