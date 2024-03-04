import * as React from "react";

import style from "./style.module.css";

interface IAppProps {}

const index: React.FunctionComponent<IAppProps> = (props) => {
  const locationRef = React.useRef<HTMLDivElement>(null);
  const locationOptionsRef = React.useRef<HTMLDivElement>(null);
  const priceRef = React.useRef<HTMLDivElement>(null);
  const priceOptionsRef = React.useRef<HTMLDivElement>(null);

  // check click outside table
  const checkTarget = (e: any, father: HTMLElement, child: HTMLElement) => {
    if (!father.contains(e.target as Node)) child.style.display = "none";
  };
  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (locationRef.current && locationOptionsRef.current)
        checkTarget(e, locationRef.current, locationOptionsRef.current);
      if (priceRef.current && priceOptionsRef.current)
        checkTarget(e, priceRef.current, priceOptionsRef.current);
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-center p-6 bg-white shadow-md shadow-gray-400 rounded-3xl">
      <p className="font-bold text-4xl mt-3 text-[#101828]">
        Bạn lựa chọn du thuyền Hạ Long nào?
      </p>
      <p className="text-[#7a7d87] text-lg mt-4">
        Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn
      </p>
      <div className="flex flex-row gap-5 mt-10">
        <div className="rounded-3xl border border-gray-400 have-outline px-5 py-3 flex flex-row flex-1 gap-3 text-[#101828]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="TÌm kiếm..."
            className=" flex-1 border-none outline-none"
          />
        </div>
        <div className="relative text-[#101828]">
          <div
            ref={locationRef}
            className="label flex items-center h-full border-gray-400 border rounded-3xl px-5 py-3 gap-3"
            onClick={() => {
              locationOptionsRef.current &&
                (locationOptionsRef.current.style.display = "block");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="cursor-default">Tất cả địa điểm</p>
          </div>
          <div className={style.optionsGroup} ref={locationOptionsRef}>
            <div className={style.selectOptions}>Tất cả địa điểm</div>
            <div className={style.selectOptions}>Vịnh Hạ Long</div>
            <div className={style.selectOptions}>Vịnh Lan Hạ</div>
            <div className={style.selectOptions}>Đảo Cát Bà</div>
          </div>
        </div>
        <div className="relative text-[#101828]">
          <div
            ref={priceRef}
            className="label flex items-center h-full border-gray-400 border rounded-3xl px-5 py-3 gap-3"
            onClick={() => {
              priceOptionsRef.current &&
                (priceOptionsRef.current.style.display = "block");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 10V9.91667C15 8.85812 14.1419 8 13.0833 8H11C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12H13C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H10.9583C9.87678 16 9 15.1232 9 14.0417V14M12 17.5V6.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#101828"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="cursor-default">Tất cả mức giá</p>
          </div>
          <div className={style.optionsGroup} ref={priceOptionsRef}>
            <div className={style.selectOptions}>Tất cả mức giá</div>
            <div className={style.selectOptions}>Từ 1 đến 3 triệu</div>
            <div className={style.selectOptions}>Từ 3 đến 6 triệu</div>
            <div className={style.selectOptions}>Trên 6 triệu</div>
          </div>
        </div>
        <button className="primary-btn have-outline">Tìm kiếm</button>
      </div>
    </div>
  );
};

export default index;
