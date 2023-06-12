import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import iconSearch from "../../assets/images/icons/icon-search.svg";
import iconAccount from "../../assets/images/icons/icon-account.svg";
import iconCart from "../../assets/images/icons/icon-cart.svg";
import MenuHeader from "../cores/MenuHeader";
import axios from "axios";
import { DEV_URL } from "../../@type/api.type";
import { getAllCategories } from "../../services/header";
import { Loader } from "../cores";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FULL_NAME } from "../../config/AppUI";
import { Avatar, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { items } from "../cores/AdminIconDropDown";
import { StorageKey } from "../../constants/StorageKey";
import UserService from "../../services/user";
function Header() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<category[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [fullName, setFullName] = useState<string>("");

  useEffect(() => {
    if (!localStorage.getItem(StorageKey.FULL_NAME)) {
      window.localStorage.setItem(StorageKey.FULL_NAME, "");
    }
    if (localStorage.getItem(StorageKey.FULL_NAME)) {
      let name = localStorage.getItem(StorageKey.FULL_NAME) as string;
      // UserService.getUser().then((res: any) => {
      //     setFullName(res.full_name);
      // });
      setFullName(name);
    }
  }, [localStorage.getItem(StorageKey.FULL_NAME)]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  // useEffect(()=>{
  // },[search])
  const handleNavigate = () => {
    navigate({
      pathname: "/search",
      search: `?keyword=${search}&page=${1}`,
    });
  };

  useEffect(() => {
    let fullName = localStorage.getItem(StorageKey.FULL_NAME) as string;
    // setFullName(fullName);
    getAllCategories().then((data) => {
      setCategories(data);
    });
    setLoading(true);
  }, []);

  useEffect(() => {
    const navList = document.querySelectorAll(".nav-items");
    const menuList = document.querySelectorAll(".menu-nav-items");

    menuList.forEach((f) => {
      f.style.display = "none";
    });

    navList[0].classList.add("bg-slate-600", "text-white");
    menuList[0].style.display = "flex"

    navList.forEach((e, i) => {
      e.addEventListener("mouseover", () => {
        navList.forEach((f) => {
          f.classList.remove("bg-slate-600", "text-white");
        });
        e.classList.add("bg-slate-600", "text-white");
        menuList.forEach((f, j) => {
          if (i != j) {
            f.style.display = "none";
          } else {
            f.style.display = "flex";
          }
        });
      });
    });
  }, []);

  return (
    <>
      <div className="relative text-base bg-slate-300 flex justify-center items-center">
        <Link to={""} className="nav-items uppercase font-bold px-6 py-4">
          coolmate
        </Link>
        <Link to={""} className="nav-items uppercase font-bold px-6 py-4">
          84rising
        </Link>
        <Link to={""} className="nav-items uppercase font-bold px-6 py-4">
          cm24
        </Link>
        <Link to={""} className="nav-items uppercase font-bold px-6 py-4">
          coolxprint
        </Link>
        <Link to={""} className="nav-items uppercase font-bold px-6 py-4">
          về coolmate
        </Link>
        <Link to={""} className="nav-items uppercase font-bold px-6 py-4">
          blog
        </Link>
      </div>

      <div className="w-full text-sm bg-slate-400 z-20">
        {/* Coolmate */}
        <div className="menu-nav-items flex justify-center items-center">
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Tất cả
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Đáng mua
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Bộ sưu tập
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Chạy bộ
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Áo nam
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Quần nam
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Quần lót nam
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Phụ kiện
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Giảm 50%
          </Link>
        </div>

        {/* 84Rising */}
        <div className="menu-nav-items flex justify-center items-center">
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Tất cả
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            T-shirt
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Hoodie
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Sweatshirt
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Short pants
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Socks
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Bag
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Headwear
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Sale
          </Link>
        </div>

        {/* CM24 */}
        <div className="menu-nav-items flex justify-center items-center">
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Combo CM24
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Tắm gội
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Cạo râu
          </Link>
          <Link to={""} className="px-6 py-4 hover:bg-slate-500">
            Nước hoa
          </Link>
        </div>

        {/* CoolxPrint */}
        <div className="menu-nav-items flex justify-center items-center p-6">
          <div className="flex justify-center items-center max-w-xl w-full py-3">
            <div className="w-1/3">
              <h3 className="font-bold text-3xl">CoolxPrint</h3>
              <p className="mb-2 leading-6">
                Đặt in áo theo yêu cầu <br /> Đặt sản xuất theo yêu cầu
              </p>
              <Link
                to={""}
                className="bg-blue-500 px-6 py-2 inline-block rounded-2xl font-bold text-white hover:bg-black"
              >
                Khám phá ngay
              </Link>
            </div>
            <div className="flex justify-evenly items-end w-2/3">
              <img
                src="https://media.coolmate.me/image/March2023/mceclip0_33.png"
                alt=""
                className="w-28"
              />
              <img
                src="https://media.coolmate.me/image/March2023/mceclip2_54.png"
                alt=""
                className="w-28"
              />
              <img
                src="https://media.coolmate.me/image/March2023/mceclip1_74.png"
                alt=""
                className="w-28"
              />
            </div>
          </div>
        </div>

        {/* About Coolmate */}
        <div className="menu-nav-items flex justify-center items-center p-6">
          <div className="flex justify-between items-center max-w-4xl w-full py-3">
            <div className="w-1/4 cursor-pointer">
              <div className="w-10/12 overflow-hidden rounded">
                <img
                  src="https://mcdn.coolmate.me/image/April2023/mceclip2_71.jpg"
                  alt=""
                  className="w-full hover:scale-125 ease-in-out duration-200"
                />
              </div>
              <p className="mt-4 font-bold">Coolmate 101</p>
            </div>
            <div className="w-1/4 cursor-pointer">
              <div className="w-10/12 overflow-hidden rounded">
                <img
                  src="https://mcdn.coolmate.me/image/March2023/mceclip2_86.jpg"
                  alt=""
                  className="w-full hover:scale-125 ease-in-out duration-200"
                />
              </div>
              <p className="mt-4 font-bold">DVKH xuất sắc</p>
            </div>
            <div className="w-1/4 cursor-pointer">
              <div className="w-10/12 overflow-hidden rounded">
                <img
                  src="https://mcdn.coolmate.me/image/April2023/mceclip1_62.jpg"
                  alt=""
                  className="w-full hover:scale-125 ease-in-out duration-200"
                />
              </div>
              <p className="mt-4 font-bold">Khách hàng thân thiết</p>
            </div>
            <div className="w-1/4 cursor-pointer">
              <div className="w-10/12 overflow-hidden rounded">
                <img
                  src="https://mcdn.coolmate.me/image/March2023/mceclip4_82.jpg"
                  alt=""
                  className="w-full hover:scale-125 ease-in-out duration-200"
                />
              </div>
              <p className="mt-4 font-bold">Câu chuyện</p>
            </div>
          </div>
        </div>

        {/* Blog */}
        <div className="menu-nav-items flex justify-center items-center p-6">
          <div className="flex justify-between max-w-4xl w-full py-3 font-bold">
            <div className="w-1/4 text-base text-zinc-700">
              <Link to={""} className="inline-block leading-8">
                Bài viết nổi bật
              </Link>
              <Link to={""} className="inline-block leading-8">
                Coolmate có gì mới?
              </Link>
              <Link to={""} className="inline-block leading-8">
                Bài viết mỗi ngày
              </Link>
            </div>
            <div className="w-1/4 text-base text-zinc-700">
              <h3 className="text-xl text-black leading-8">Theo Chuyên Mục</h3>
              <Link to={""} className="inline-block leading-8">
                Phối đồ
              </Link>
              <Link to={""} className="inline-block leading-8">
                Xu hướng - Phong cách
              </Link>
              <Link to={""} className="inline-block leading-8">
                Chăm sóc nam giới
              </Link>
              <Link to={""} className="inline-block leading-8">
                Giải trí
              </Link>
            </div>
            <div className="w-1/2 relative">
              <a href="https://www.coolmate.me/post/shark-tank-mua-4-coolmate?itm_source=navbar">
                <div className="overflow-hidden">
                  <img
                    src="https://mcdn.coolmate.me/image/March2023/mceclip0_206.jpg"
                    alt=""
                    className="w-full hover:scale-125 ease-in-out duration-200"
                    id="blog"
                  />
                </div>
                <div className="absolute flex justify-between items-end bottom-0 left-0 pr-4 pl-5 pb-5 text-white text-xl w-full">
                  Shark Tank mùa 4 Coolmate: <br />
                  Màn chốt deal "thần tốc" giữa <br />
                  Shark Bình và CEO Phạm Chí Nhu
                  <span className="w-10 h-10">
                    <img src="https://mcdn.coolmate.me/image/March2023/mceclip3_3.png" className="w-full hover:scale-125 ease-in-out duration-200" id="arrow"/>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="bg-white flex justify-between items-center w-full border-b-2 border-grayText h-16 pl-4 pr-4 mb-10">
        {/* logo */}
        <div className="">
          <Link to="">
            <img className="w-1/2" src={logo} alt="" />
          </Link>
        </div>
        <div className="">
          {loading ? (
            categories ? (
              <MenuHeader categories={categories} />
            ) : (
              ""
            )
          ) : (
            <Loader />
          )}
          {}
        </div>
        {/* search menu */}
        <div className="relative flex justify-start">
          {/* search */}
          {search ? (
            // <Link to={`search/keyword=${search}&page=${1}`}>
            // </Link>
            <button
              onClick={handleNavigate}
              className="absolute top-1/4 left-2 "
            >
              <img src={iconSearch} alt="" />
            </button>
          ) : (
            ""
          )}

          <input
            type="text"
            placeholder="Tên sản phẩm cần tìm"
            name="search"
            onChange={changeHandler}
            className="bg-white border-solid border-2 rounded-2xl h-10 w-full py-1 pl-10"
          />
        </div>

        {/* account and cart */}
        <div className="flex justify-center items-center">
          {/* account */}
          {fullName ? (
            <Dropdown
              menu={{ items }}
              arrow={{ pointAtCenter: true }}
              className="pr-5 "
            >
              <Space>
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    marginRight: "10px",
                  }}
                  icon={<UserOutlined />}
                />
                {/* {JWTManager.getUsername()} */}
                {fullName}
              </Space>
            </Dropdown>
          ) : (
            // <div className="w-30 h-10 flex justify-between items-center pr-3">
            //     <img src={iconAccount} alt="" />
            //     <p className="pt-[10px] ">{FULL_NAME}</p>
            // </div>
            <Link to="authentication">Đăng nhập</Link>
          )}
          {/* cart */}
          <div className="w-10 h-10">
            <Link to="cart">
              {" "}
              <img src={iconCart} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
