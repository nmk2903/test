import React from "react";
import imgCoolMateStory1 from "../../assets/images/home/mceclip0_26.jpg";
import iconStory from "../../assets/images/home/story.svg";
const Services = () => {
    return (
        <div className="px-4 my-12">
            <div>
                <div className="relative md:flex ">
                    <div className="mb-6 md:mr-4">
                        <a href="#" className="relative text-white cursor-auto">
                            <div className="overflow-hidden rounded-lg">
                                <img src={imgCoolMateStory1} alt="#" />
                            </div>
                            <div className="flex justify-between items-end absolute left-0 bottom-0 w-full px-6 py-6 font-bold">
                                <span>Câu chuyện Coolmate</span>
                                <span className="bg-white rounded-full flex justify-center h-10 w-10">
                                    <img
                                        src={iconStory}
                                        alt=""
                                        className="max-w-xxxxxs"
                                    />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="mb-6">
                        <a href="#" className="relative text-white cursor-auto">
                            <div className="overflow-hidden rounded-lg">
                                <img src={imgCoolMateStory1} alt="#" />
                            </div>
                            <div className="flex justify-between items-end absolute left-0 bottom-0 w-full px-6 py-6 font-bold">
                                <span>Dịch vụ hài lòng 100%</span>
                                <span className="bg-white rounded-full flex justify-center h-10 w-10">
                                    <img
                                        src={iconStory}
                                        alt=""
                                        className="max-w-xxxxxs"
                                    />
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-2 ml:flex ml:gap-8">
                    <div className="w-full items-start p-3 bg-grayText max-w-md rounded-md ml:flex ml:items-center">
                        <div className="ml:flex-none ml:mr-4">
                            <img src={iconStory} alt="" />
                        </div>
                        <p className="mt-6 ml:text-xs">
                            MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TRÊN 200K
                        </p>
                    </div>
                    <div className="w-full items-start p-3 bg-grayText max-w-md rounded-md ml:flex ml:items-center">
                        <div className="ml:flex-none ml:mr-4">
                            <img src={iconStory} alt="" />
                        </div>
                        <p className="mt-6 ml:text-xs">
                            MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TRÊN 200K
                        </p>
                    </div>
                    <div className="w-full items-start p-3 bg-grayText max-w-md rounded-md ml:flex ml:items-center">
                        <div className="ml:flex-none ml:mr-4">
                            <img src={iconStory} alt="" />
                        </div>
                        <p className="mt-6 ml:text-xs">
                            MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TRÊN 200K
                        </p>
                    </div>
                    <div className="w-full items-start p-3 bg-grayText max-w-md rounded-md ml:flex ml:items-center">
                        <div className="ml:flex-none ml:mr-4">
                            <img src={iconStory} alt="" />
                        </div>
                        <p className="mt-6 ml:text-xs">
                            MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TRÊN 200K
                        </p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Services;
