import * as React from "react";

interface IAppProps {}

const index: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <footer>
      <div className="footer1 bg-[#101828] text-[#98a2b3] lg:px-[144px] py-12 flex flex-col md:flex-row justify-between">
        <div className="info-company">
          <div className="logo-company">
            <img
              src="/src/assets/images/white-logo.webp"
              alt=""
              className="max-w-[220px]"
            />
          </div>
          <div className="detail-company text-[#c1d1c7] w-[320px] flex flex-col gap-4 mt-4 text-base font-semibold">
            <p className="name-company">
              Công ty TNHH Du Lịch và Dịch Vụ Mixivivu
            </p>
            <p className="address-company">
              Tầng 7, số nhà 25, ngõ 38 phố Yên Lãng, phường Láng Hạ, quận Đống
              Đa, TP. Hà Nội
            </p>
            <p className="license-company">
              Mã số doanh nghiệp: 0110376372 do Sở Kế hoạch và Đầu tư Thành phố
              Hà Nội cấp ngày 05/06/2023
            </p>
          </div>
        </div>
        <div className="list-options flex flex-row justify-between gap-32">
          <div className="flex flex-col gap-4">
            <p className="text-[#667085] text-sm font-semibold uppercase">
              Giới thiệu
            </p>
            <div className="subfooter-link flex flex-col gap-3">
              <a href="" target="_blank">
                Về chúng tôi
              </a>
              <a href="" target="_blank">
                Điều khoảng và điều kiện
              </a>
              <a href="" target="_blank">
                Chính sách riêng tư
              </a>
              <a href="" target="_blank">
                Hướng dẫn sử dụng
              </a>
              <a href="" target="_blank">
                Hình thức thanh toán
              </a>
              <a href="" target="_blank">
                Liên hệ
              </a>
              <a href="" target="_blank">
                Hotline: 0xxxxxxxxx
              </a>
              <a href="mailto:abc@gmail.com">Email: abc@gmail.com"</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#667085] text-sm font-semibold uppercase">
              Điểm đến
            </p>
            <div className="subfooter-link flex flex-col gap-3">
              <a href="" target="_blank">
                Vịnh Hạ Long
              </a>
              <a href="" target="_blank">
                Vịnh Lan Hạ
              </a>
              <a href="" target="_blank">
                Đảo Cát Bà
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#667085] text-sm font-semibold uppercase">
              Du thuyền
            </p>
            <div className="subfooter-link flex flex-col gap-3">
              <a href="" target="_blank">
                Blog
              </a>
              <a href="" target="_blank">
                Quy định chung và lưu ý
              </a>
              <a href="" target="_blank">
                Câu hỏi thường gặp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2 px-[144px] py-12 bg-[#1d2939]">
        <div className="flex items-center justify-between flex-row">
          <p className="text-[#475467] text-base">Bản quyền © 2024 TralWeb.</p>
          <div className="release w-[100px] h-8 bg-white"></div>
        </div>
      </div>
    </footer>
  );
};

export default index;
