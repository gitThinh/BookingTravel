import * as React from "react";
import { Link } from "react-router-dom";

import {
  SearchBoard,
  HeaderSection,
  BoardBox,
  Evaluates,
  BlogBox,
} from "@/constants/components";
import { boardData } from "@/constants/data";

import style from "./style.module.css";

interface evaluted {
  id: string;
  userName: string;
  text: string;
  boardName?: string;
}

interface IAppProps {}

const index: React.FunctionComponent<IAppProps> = (props) => {
  console.log(props);
  
  const [activeEvaluated, setActiveEvaluated] = React.useState(0);

  // set auto change evaluated
  React.useEffect(() => {
    setTimeout(() => {
      if (activeEvaluated === evalutes.length - 1) {
        setActiveEvaluated(0);
        return;
      }
      setActiveEvaluated((prev) => prev + 1);
    }, 5000);
  }, [activeEvaluated]);

  //fake data evaluated
  const evalutes: evaluted[] = [
    {
      id: "001",
      userName: "Bạn Minh Hoàng",
      text: "Cảm ơn team đã cho mình trải nghiệm quá ưng ý. \nĐi đúng hôm thời tiết đẹp,ngắm cảnh vịnh Hạ Long đẹp tuyệt vời. \nNhân viên tư vấn nhiệt tình còn note lại khách dị ứng món gì,phục vụ chu đáo, buffet hải sản tươi ngon,phòng ốc đẹp \nTuyệt vời lắm !!!",
    },
    {
      id: "002",
      userName: "Anh Khánh",
      boardName: "Du thuyền Stellar of the Seas",
      text: "Anh chọn ngày đi tàu trùng với sinh nhật vợ anh. Muốn là món quà tặng vợ. Với lại, vợ anh thích chụp ảnh nữa. Anh thấy bạn bè bảo đặt tàu này hơi khó vì rất hot, hay kín phòng. May quá bên em lại có phòng tàu này.\nCảm ơn dịch vụ của bên em nhé!\nTàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.",
    },
    {
      id: "003",
      userName: "Chị Thu Hà",
      boardName: "Du thuyền Heritage Bình Chuẩn",
      text: "Chị rất cảm ơn team đã tư vấn cho chị chọn du thuyền Heritage Bình Chuẩn. Bố mẹ chị rất ưng í em ạ!\nTàu đẹp, mang đậm phong cách Á Đông. Đồ ăn hợp khẩu vị. Các bạn nhân viên trên tàu nhiệt tình và chu đáo.",
    },
    {
      id: "004",
      userName: "Cô Thanh Hằng và bạn",
      text: "Du thuyền 5 sao và sự trải nghiệm tuyệt vời. Tour của chúng tôi đi rất đầy đủ như theo chương trình đã thông báo trước. Đồ ăn khá đa dạng, nấu vừa với khẩu vị của tất cả mọi độ tuổi từ bé đến các bác U80.\nChúng tôi được trải nghiệm gần như đầy đủ các hoạt động chèo kayak,thăm hang,thăm vịnh.... và loại hải sản tươi ngon\nRất đáng nhớ !!!",
    },
  ];

  return (
    <div className={"max-w-[1600px] relative z-0 mx-auto"}>
      <header className="mb-32">
        <div className="mx-20 rounded-3xl bg-slate-700 overflow-hidden aspect-video">
          <video
            className=""
            src="https://minio.fares.vn/mixivivu-dev/video/Mixivivuduthuyen.mp4"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
        <div className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 w-[1008px]">
          <SearchBoard />
        </div>
      </header>
      <section className="size-container">
        <HeaderSection
          titleLine1="Du thuyền mới"
          titleLine2="và phổ biến nhất"
          details="Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên."
        />
        <div className={style.boardGridBox}>
          {boardData.boards.map((board, index) => {
            if (index < 6)
              return (
                <div key={index}>
                  <BoardBox
                    imageBoard={board.imageBoard}
                    evaluate={board.evaluate}
                    placeBoard={board.placeBoard}
                    nameBoard={board.nameBoard}
                    description={board.description}
                    priceBoard={board.priceBoard}
                    index={index}
                  />
                </div>
              );
          })}
        </div>
        <div className="mt-24 w-full ">
          <Link
            to="tim-du-thuyen"
            className="w-max block border rounded-3xl mx-auto shadow-sm shadow-slate-300 hover:bg-slate-100"
          >
            <div className="flex flex-row justify-between items-center px-5 py-3">
              <p className="text-black text-base font-medium">
                Xem tất cả du thuyền
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="size-container bg-section w-full bg-[#f3ffff]">
        <HeaderSection
          titleLine1="Đánh giá từ những"
          titleLine2="người đã trải nghiệm"
          details="Khách hàng chia sẻ về những kỷ niệm tuyệt vời trên chuyến du lịch với chúng tôi."
        />
        <div className="pt-6">
          <div className="">
            {evalutes.map((item, index) => {
              if (index === activeEvaluated)
                return (
                  <div key={index}>
                    <Evaluates
                      id={item.id}
                      userName={item.userName}
                      text={item.text}
                      boardName={item.boardName}
                    />
                  </div>
                );
            })}
          </div>
          <div className="list-user mt-16 flex gap-6">
            {evalutes.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setActiveEvaluated(index)}
                  className={
                    (index === activeEvaluated && style.activeEvaluatedBtn) +
                    " bg-[#fff8f8] border border-gray-400 rounded-3xl font-semibold text-base text-[#344054]"
                  }
                >
                  {item.userName}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <section className="size-container">
        <div className="w-[500px] mx-auto text-center">
          <p className="font-bold text-4xl mb-5 text-[#101828]">Các điểm đến của TravelWeb</p>
          <p className="text-[#5e6d84] text-lg font-semibold">
            Khám phá vẻ đẹp tuyệt vời của Du thuyền Hạ Long: Hành trình đến
            thiên đường thiên nhiên
          </p>
          <div className="under-line mt-8 mx-auto w-max">
            <div className=" flex gap-1">
              <span className="underline-item-header"></span>
              <span className="underline-item-header"></span>
              <span className="underline-item-header"></span>
              <span className="underline-item-header"></span>
              <span className="underline-item-header"></span>
              <span className="underline-item-header"></span>
              <span className="underline-item-header"></span>
              <span className="underline-item-header"></span>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-row flex-wrap gap-8 justify-center">
          <div className="flex flex-col w-max text-center p-4 shadow-md shadow-slate-300 rounded-3xl gap-4 text-[#101828]">
            <div className="img rounded-3xl overflow-hidden">
              <img
                src="https://minio.fares.vn/mixivivu-dev/home-page/547b7d230cacd9f280bd3.jpg"
                alt=""
                className="w-[352px] h-[216px] "
              />
            </div>
            <p className="font-bold text-[26px]">Vịnh Hạ Long</p>
            <Link
              to="tim-du-thuyen"
              className="have-outline mx-auto shadow-sm shadow-slate-400 w-max rounded-full px-3 py-2 text-black text-sm font-medium
              hover:text-black hover:bg-slate-100"
            >
              Xem ngay
            </Link>
          </div>
          <div className="flex flex-col w-max text-center p-4 shadow-md shadow-slate-300 rounded-3xl gap-4 text-[#101828]">
            <div className="img rounded-3xl overflow-hidden">
              <img
                src="https://minio.fares.vn/mixivivu-dev/home-page/6063b331c2be17e04eaf1.jpg"
                alt=""
                className="w-[352px] h-[216px] "
              />
            </div>
            <p className="font-bold text-[26px]">Vịnh Lan Hạ</p>
            <Link
              to="tim-du-thuyen"
              className="have-outline mx-auto shadow-sm shadow-slate-400 w-max rounded-full px-3 py-2 text-black text-sm font-medium
              hover:text-black hover:bg-slate-100"
            >
              Xem ngay
            </Link>
          </div>
          <div className="flex flex-col w-max text-center p-4 shadow-md shadow-slate-300 rounded-3xl gap-4 text-[#101828]">
            <div className="img rounded-3xl overflow-hidden">
              <img
                src="https://minio.fares.vn/mixivivu-dev/home-page/ded9108b6104b45aed152.jpg"
                alt=""
                className="w-[352px] h-[216px] "
              />
            </div>
            <p className="font-bold text-[26px]">Đảo Cát Bà</p>
            <Link
              to="tim-du-thuyen"
              className="have-outline mx-auto shadow-sm shadow-slate-400 w-max rounded-full px-3 py-2 text-black text-sm font-medium
              hover:text-black hover:bg-slate-100"
            >
              Xem ngay
            </Link>
          </div>
        </div>
      </section>
      <section className="size-container bg-section bg-[#f2f4f7]">
        <HeaderSection
          titleLine1="Đối tác Cùng các"
          titleLine2="Hãng Du thuyền Lớn"
          details="Đối tác hàng đầu với các hãng du thuyền danh tiếng: Ưu đãi độc quyền dành riêng cho bạn"
        />
        <div className={style.gridPartner}>
          <div>
            <img
              src="https://mixivivu.com/partners/partner1.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner2.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner3.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner4.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner5.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner6.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner7.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner8.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner9.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner10.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner11.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner12.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner13.png"
              alt="Đối tác 1"
            />
          </div>
          <div>
            <img
              src="https://mixivivu.com/partners/partner14.png"
              alt="Đối tác 1"
            />
          </div>
        </div>
      </section>
      <section className="size-container">
        <HeaderSection
          titleLine1="Hạ Long: Khám phá Sự đặc sắc"
          titleLine2="và Cập nhật tin tức mới nhất"
          details="Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này."
        />
        <div className="flex flex-wrap justify-center flex-row gap-8">
          <BlogBox
            blogId="top5resort"
            blogMainImg="https://minio.fares.vn/mixivivu-dev/tour/blog/images/apbb39vj3e99sczz.webp"
            blogTitle="Top 5 resort nổi tiếng ở Hạ Long"
            blogDescription="Nếu như bạn chưa tìm được khu nghỉ dưỡng sang xịn tại Hạ Long, hãy để TravelWeb gợi ý giúp bạn top 5 resort tại Hạ Long phù hợp nhất"
            blogDateUploaded="26/02/2024"
          />
          <BlogBox
            blogId="chuanoitieng"
            blogMainImg="https://minio.fares.vn/mixivivu-dev/tour/blog/images/cln5y6yqd6421o39.webp"
            blogTitle="Khám phá 3 ngôi chùa nổi tiếng ở Hạ Long"
            blogDescription="Không chỉ được biết đến là một địa điểm du lịch nổi tiếng bao gồm: Vịnh Hạ Long, Vịnh Lan Hạ, Đảo Cát Bà, Đảo Tuần Châu,..."
            blogDateUploaded="26/02/2024"
          />
          <BlogBox
            blogId="topdacsan"
            blogMainImg="https://minio.fares.vn/mixivivu-dev/tour/blog/images/kyqf5ueuwzqre45j.webp"
            blogTitle="TOP ĐẶC SẢN QUẢNG NINH LÀM QUÀ NỔI TIẾNG"
            blogDescription="Sau những trải nghiệm du lịch hấp dẫn, nhiều du khách tìm kiếm các đặc sản QUẢNG Ninh làm quà tặng cho người thân, đồng nghiệp,..."
            blogDateUploaded="25/02/2024"
          />
        </div>
        <div className="mt-24 w-full ">
          <Link
            to="blog"
            className="w-max block border rounded-3xl mx-auto shadow-sm shadow-slate-300 hover:bg-slate-100"
          >
            <div className="flex flex-row justify-between items-center px-5 py-3">
              <p className="text-black text-base font-medium">
                Xem tất cả bài viết
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default index;
