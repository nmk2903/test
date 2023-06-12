import React from "react";
import { menus } from "./data";
import iconEmail from "../../assets/images/icons/icon-email.svg";
import iconFacebook from "../../assets/images/icons/icon-facebook.svg";
import iconHotline from "../../assets/images/icons/icon-hotline.svg";
import iconInstar from "../../assets/images/icons/icon-instar.svg";
import iconYoutube from "../../assets/images/icons/icon-youtube.svg";
const Footer = () => {
    return (
        <>
            <div className="footer bg-black text-white pb-8">
                <div className="pl-4 pr-4 w-full">
                    <div className="md:flex footer-menu pb-9 flex-wrap">
                        <div className="md:flex md:flex-1 justify-between ml:justify-normal">
                            {menus.map((menu, index) => {
                                return (
                                    <div className="md:flex-1" key={index}>
                                        {menu.menuData.map(
                                            (menuItem, index) => {
                                                return (
                                                    <div key={index}>
                                                        <h4 className="text-white font-semibold text-sm leading-loose mb-3 mt-7 ">
                                                            {menuItem.title}
                                                        </h4>
                                                        <ul>
                                                            {menuItem.contextList.map(
                                                                (
                                                                    context,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="mt-2 text-xs text-grayText max-w-s transition-all hover:text-yellowText"
                                                                        >
                                                                            <a href="#">
                                                                                {
                                                                                    context.context
                                                                                }
                                                                            </a>
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mainContact ml:max-w-x ">
                            <h4 className="font-semibold text-xl leading-loose text-white first-letter mb-2 mt-7 ">
                                COOLMATE lắng nghe bạn!
                            </h4>
                            <p className="mb-2 mt-2 text-xs leading-normal text-grayText w-full ">
                                Chúng tôi luôn trân trọng và mong đợi nhận được
                                mọi ý kiến đóng góp từ khách hàng để có thể nâng
                                cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                            </p>
                            <a
                                href="#"
                                className="hover:bg-white hover:text-black
                         bg-blueBtn inline-flex justify-center items-center h-10 rounded-2xl pr-8 pl-8 text-sm font-black mb-6 transition-all leading-loose text-grayText"
                            >
                                Gửi Ý Kiến
                            </a>
                            <div className="flex justify-start items-center font-black text-xs text-white mb-3 leading-loose tracking-wide">
                                <div className="flex justify-center items-center w-8 h-8 mr-4">
                                    <img
                                        className="w-full h-full"
                                        src={iconHotline}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <span>Hotline</span>
                                    <p className="tracking-wide font-black text-xs text-white leading-loose">
                                        <a
                                            className="transition-all hover:text-blueText"
                                            href="#"
                                        >
                                            190000000{" "}
                                        </a>
                                        <a
                                            className="transition-all hover:text-blueText"
                                            href="#"
                                        >
                                            (180000000)
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center font-black text-xs text-white mb-3 leading-loose tracking-wide">
                                <div className="flex justify-center items-center w-8 h-8 mr-4">
                                    <img
                                        className="w-full h-full"
                                        src={iconEmail}
                                        alt="#"
                                    />
                                </div>
                                <div>
                                    <span>Email</span>
                                    <p className="tracking-wide font-black text-xs text-white leading-loose">
                                        <a
                                            className="transition-all hover:text-blueText"
                                            href="#"
                                        >
                                            Cool@coolmate.me
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-6 justify-between">
                                <a
                                    href="#"
                                    className="mr-4 transition-all w-2/12 h-8 flex-1"
                                >
                                    <img
                                        src={iconFacebook}
                                        alt="#"
                                        className="w-full h-full"
                                    />
                                </a>
                                <a
                                    href=""
                                    className="mr-4 transition-all w-2/12 h-8 flex-1"
                                >
                                    <img
                                        src={iconInstar}
                                        alt="#"
                                        className="w-full h-full"
                                    />
                                </a>
                                <a
                                    href=""
                                    className="mr-4 transition-all w-2/12 h-8 flex-1"
                                >
                                    <img
                                        src={iconYoutube}
                                        alt="#"
                                        className="w-full h-full"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-2 flex items-center pt-4 border-grayText text-center ">
                        <div className="flex-1">
                            <h5 className="text-xs leading-3 text-white mb-3">
                                @ TRƯỜNG CAO ĐẲNG CÔNG NGHỆ THỦ ĐỨC
                            </h5>
                            <p className="text-xs leading-3 text-white">
                                Tác giả: Trần Phan Hải Bằng, Nguyễn Minh Khôi.
                                TP Hồ Chí Minh ngày 20/05/2023.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
