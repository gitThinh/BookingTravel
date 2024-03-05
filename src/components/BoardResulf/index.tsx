import * as React from "react";
import { Link } from "react-router-dom";

import handleEvaluatedStar from "@/utils/countEvaluatedStar";

interface IAppProps {
  imageBoard: string;
  evaluate: number[];
  placeBoard: string;
  nameBoard: string;
  description: string;
  priceBoard: string;
  index: number;
  utilities: string[];
}

const index: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Link to={`/board-${props.index}`} className="w-max block">
      <div className="w-[900px] rounded-[32px] shadow-md shadow-gray-400 p-4 text-[#444] flex flex-row gap-9 items-center bg-white">
        <div className="relative rounded-3xl overflow-hidden shadow-sm shadow-gray-500 min-w-[352px] min-h-[264px]">
          <img src={props.imageBoard} alt="" className=" h-[264px] w-[352px]" />
          <div className="absolute top-3 left-4 bg-[#fedf89] px-2 py-1 rounded-2xl text-[#a92a2a]">
            <p className="text-xs font-medium">{handleEvaluatedStar(props.evaluate)} ({props.evaluate.length}) đánh giá</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="info flex gap-2 flex-col border-b py-5">
            <div className="px-2 py-1 bg-slate-100 w-max rounded-3xl text-xs font-medium mt-2 text-[#444]">
              {props.placeBoard}
            </div>
            <div className="font-bold text-2xl text-[#485467]">
              {props.nameBoard}
            </div>
            <div className="text-sm font-normal text-gray-500">
              {props.description}
            </div>
            <div className="flex flex-row gap-2 flex-wrap mt-3">
              {props.utilities.map((item, index) => {
                if (index < 5)
                  return (
                    <div
                      key={index}
                      className="text-xs font-medium text-[#344054] bg-[#f2f4f7] rounded-2xl py-1 px-2"
                    >
                      <p className="whitespace-nowrap">{item}</p>
                    </div>
                  );
              })}
              <div className="text-xs font-medium text-[#344054] bg-[#f2f4f7] rounded-2xl py-1 px-2">
                <p className="whitespace-nowrap">+ {props.utilities.length - 5}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-5">
            <div className="cost whitespace-nowrap text-lg font-semibold text-[#1a4f4f]">
              {props.priceBoard}
            </div>
            <button
              className="primary-btn have-outline text-sm"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
              }}
            >
              Đặt Ngay
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default index;
