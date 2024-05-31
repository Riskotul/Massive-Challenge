import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HeaderDetailSectionAnjing = () => {
  return (
    <section className="w-[1220px] flex gap-[60px] mt-[77px] relative">
      <Link
        to="/services"
        className="text-[30px] absolute left-[-70px] top-[-44px] cursor-pointer active:scale-90 transition-all"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>

      <div className="flex flex-col gap-6">
        <div className="w-[550px] h-[408px] rounded-[20px] overflow-hidden relative shadow-400">
          <img
            src="/images/DetailServicePage/detail-img-anjing1.png"
            alt=""
            className="object-cover size-full"
          />
          <div className="absolute right-6 top-6 w-[125px] h-[56px] rounded-[10px] bg-[#8DD67A] text-white flex items-center justify-center text-[24px] font-bold shadow-500">
            Jantan
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="w-[250px] h-[118px] rounded-[20px] shadow-400">
            {" "}
            <img
              src="/images/DetailServicePage/detail-img-anjing2.png"
              alt=""
              className="object-cover size-full"
            />
          </div>
          <div className="w-[250px] h-[118px] rounded-[20px] shadow-400">
            {" "}
            <img
              src="/images/DetailServicePage/detail-img-anjing3.png"
              alt=""
              className="object-cover size-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        <h1 className="text-[48px] font-bold">Galtier</h1>
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-7">
            <h1 className="text-[24px]">Ukuran</h1>
            <div className="w-[610px] h-6 rounded-[10px] bg-[#8DD67A] shadow-500">
              <div className="w-[305px] h-full rounded-[10px] bg-[#FA9F42]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-[24px]">Ceria</h1>
            <div className="w-[610px] h-6 rounded-[10px] bg-[#8DD67A] shadow-500">
              <div className="w-[451px] h-full rounded-[10px] bg-[#FA9F42]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-[24px]">Ramah</h1>
            <div className="w-[610px] h-6 rounded-[10px] bg-[#8DD67A] shadow-500">
              <div className="w-[451px] h-full rounded-[10px] bg-[#FA9F42]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-[24px]">Energi</h1>
            <div className="w-[610px] h-6 rounded-[10px] bg-[#8DD67A] shadow-500">
              <div className="w-[451px] h-full rounded-[10px] bg-[#FA9F42]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDetailSectionAnjing;
