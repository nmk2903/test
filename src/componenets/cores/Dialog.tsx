import React, { useState } from "react";
import { Image, Button, Modal } from "antd";

const Dialog = ({ img }: { img: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="md:max-w-ss min-w-xs">
                <img src={img} onClick={showModal} />

                <Modal
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div className="ml:flex ml:items-center">
                        <img src={img} className="ml:max-w-2xl ml:w-3/5 " />
                        <div className="flex justify-center mt-4 ">
                            <a href="#" className="flex gap-5 max-w-sm ">
                                <div className="max-w-xs rounded-lg overflow-hidden ml-4 ">
                                    <img src={img} className="" />
                                </div>
                                <div className="font-bold">
                                    <p className="my-2 text-blackText">
                                        Áo thun chạy bộ nam Essential Fast &
                                        Free Run
                                    </p>
                                    <p className="text-blackText">159.000đ</p>
                                    <div className="inline-flex justify-center items-center bg-blueBtn h-8 py-4 rounded-xl w-full text-sm font-bold mt-2 text-white hover:bg-black">
                                        Mua
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default Dialog;
