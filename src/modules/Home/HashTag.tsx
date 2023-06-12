import React from "react";

const HashTag = () => {
    return (
        <div className="py-2 px-2 ml:py-10 ml:px-4 bg-black">
            <div className="flex ml:justify-between justify-center text-white">
                <p className="hidden ml:block">
                    {
                        "CÁC SẢN PHẨM TỰ HÀO SẢN XUẤT TẠI VIỆT NAM VÀ DÀNH CHO NGƯỜI VIỆT NAM!"
                    }
                    <br />
                    {
                        "HƠN 3 TRIỆU SẢN PHẨM ĐÃ ĐƯỢC GỬI TỚI TAY KHÁCH HÀNG SỬ DỤNG VÀ HÀI LÒNG!"
                    }
                </p>
                <p className="text-5xl text-center ml:px-4 ">#Coolmate</p>
                <p className="hidden ml:block">
                    {"GIẢI PHÁP MUA SẮM"}
                    <br />
                    {"CẢ TỦ ĐỒ DÀNH CHO NAM GIỚI"}
                </p>
            </div>
        </div>
    );
};

export default HashTag;
