import * as React from "react";

import { BoardResulf, SearchBoard } from "@/constants/components";
import { boardData } from "@/constants/data";

import style from "./style.module.css";

interface IAppProps {}

const index: React.FunctionComponent<IAppProps> = (props) => {

  const getAllUtilities = (): string[] => {
    const utilities: string[] = [];
    boardData.boards.forEach((board) => {
      board.utilities.forEach((util) => {
        if (!utilities.includes(util)) utilities.push(util);
      });
    });
    return utilities.sort();
  };
  const utilities: string[] = getAllUtilities()



  return (
    <div className={style.wrapper}>
      <div className="size-container">
        <SearchBoard />
      </div>
      <div className="size-container flex flex-row justify-between">
        <div className="w-[280px] bg-white border rounded-2xl h-max">
          <div className="">
            <div className="title-filter flex flex-row justify-between items-center border-b p-6">
              <p className="text-[#344054] font-bold text-lg">Lọc kết quả</p>
              <button className="text-[#0e4f4f] p-0 bg-transparent text-sm font-medium hover:text-[#77dada]">đặt lại</button>
            </div>
            <div className="p-6">
              <p className="text-base text-[#344054] font-medium">Tiện ích</p>
              <div className="flex flex-col gap-2 mt-4">
                {utilities.map((util, index) => {
                  return <div className="flex flex-row gap-3 items-center text-[#344054]" key={index}>
                    <input type="checkbox" name="" id="" />
                    <p>{util}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {boardData.boards.map((board, index) => {
            if (index < 6)
              return (
                <div key={index}>
                  <BoardResulf
                    imageBoard={board.imageBoard}
                    evaluate={board.evaluate}
                    placeBoard={board.placeBoard}
                    nameBoard={board.nameBoard}
                    description={board.description}
                    priceBoard={board.priceBoard}
                    index={index}
                    utilities={board.utilities}
                  />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
