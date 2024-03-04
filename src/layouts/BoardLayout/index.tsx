import * as React from "react";

import { BoardResulf, SearchBoard } from "@/constants/components";
import { boardData } from "@/constants/data";

import style from "./style.module.css";

interface IAppProps {}

const index: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={style.wrapper}>
      <div className="size-container">
        <SearchBoard />
      </div>
      <div className="size-container">
        <div className=""></div>
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
                    utilities={[
                      "Wifi free",
                      "Có bể bơi ngoài trời",
                      "Lễ tân 24 giờ",
                      "Quầy bar",
                      "Giáp biển",
                      "Nhà hàng",
                      "Phòng gia đình",
                      "Bao gồm tất cả bữa ăn",
                      "Có bể sục",
                      "Khu vực bãi tắm riêng",
                      "Trung tâm thể dục",
                      "Phòng có bồn tắm",
                      "Miễn phí kayaking",
                      "Trung tâm Spa & chăm sóc sức khoẻ",
                      "Chổ đỗ xe miễn phí",
                      "Miễn phí xe đưa đón",
                      "Phòng không hút thuốc",
                      "Du thuyền 5 sao",
                      "Nhìn ra biển",
                      "Điều hòa",
                      "Sạc điện thoại",
                      "Ban công riêng",
                      "Két an toàn",
                      "Cửa sổ từ sàn đến trần",
                      "Wifi",
                      "Hồ bơi có tầm nhìn",
                    ]}
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
