import * as React from "react";
import { Link } from "react-router-dom";

interface IAppProps {
  imageBoard: string;
  evaluate: number[];
  placeBoard: string;
  nameBoard: string;
  description: string;
  priceBoard: string;
  index: number;
}

const index: React.FunctionComponent<IAppProps> = (props) => {
  //averaged evaluates
  const handleEvaluatedStar = (): number => {
    if (props.evaluate.length) {
      let sumEvaluated: number = props.evaluate.reduce(
        (value, num) => num + value
      );
      return sumEvaluated / props.evaluate.length;
    }
    return 5
  };


  return (
    <Link to={`/board-${props.index}`} className="w-max block">
      <div className="w-96 rounded-xl shadow-md shadow-gray-400 p-5 text-[#444] flex flex-col gap-2">
        <div className="relative rounded-xl shadow-sm shadow-gray-500">
          <img
            src={props.imageBoard}
            alt=""
            className="rounded-xl h-52 w-full"
          />
          <div className="absolute top-3 left-4 bg-[#fedf89] px-2 py-1 rounded-2xl text-[#a92a2a]">
            <p className="text-xs font-medium">
              {handleEvaluatedStar() + ' '}
              ({props.evaluate.length}) đánh giá
            </p>
          </div>
        </div>
        <div className="info flex gap-2 flex-col">
          <div className="px-2 py-1 bg-slate-100 w-max rounded-3xl text-[12px] font-medium mt-2 text-[#444]">
            {props.placeBoard}
          </div>
          <div className="font-bold text-[18px] text-[#485467]">
            {props.nameBoard}
          </div>
          <div className="text-[14px] font-normal text-gray-500">
            {props.description}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-2">
          <div className="cost whitespace-nowrap text-lg font-semibold text-[#1a4f4f]">
            {props.priceBoard}
          </div>
          <button
            className="primary-btn have-outline"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
            }}
          >
            Đặt Ngay
          </button>
        </div>
      </div>
    </Link>
  );
};

export default index;
