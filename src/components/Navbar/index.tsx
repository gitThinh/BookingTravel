import * as React from "react";
import { NavLink, Link } from "react-router-dom";

import style from "./style.module.css";

interface IAppProps {}

const index: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={style.wrapperHeader + " w-full h-24 z-10"}>
      <div
        className={
          style.container +
          " flex flex-row justify-between items-center h-full mx-[110px]"
        }
      >
        <div className="w-full flex gap-14 h-full items-center">
          <Link to="/">
            <img
              src="/src/assets/images/black-logo.webp"
              alt="logo"
              className="w-[156px] h-[42px]"
            />
          </Link>
          <div className="navbar flex gap-6 cursor-pointer h-full">
            <NavLink
              to="tim-du-thuyen"
              className={style.navLink + " transition-all "}
            >
              <p>Tìm du thuyền</p>
            </NavLink>
            <NavLink
              to="tim-ve-may-bay"
              className={style.navLink + " transition-all"}
            >
              <p>Tìm vé máy bay</p>
            </NavLink>
            <NavLink
              to="doanh-nghiep"
              className={style.navLink + " transition-all"}
            >
              <p>Doanh nghiệp</p>
            </NavLink>
            <NavLink to="blog" className={style.navLink + " transition-all"}>
              <p>Blog</p>
            </NavLink>
          </div>
        </div>
        <div>
          <Link to="lien-he" className="primary-btn have-outline">
              Liên hệ ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
