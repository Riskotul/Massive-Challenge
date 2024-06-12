import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HeaderDetailSectionAnjing = () => {
  return (
    <section className="w-full max-w-[1220px] flex flex-col lg:flex-row gap-6 lg:gap-12 mt-12 lg:mt-20 px-4 md:px-8 lg:px-0 relative">
      <Link
        to="/adopsi-anjing"
        className="text-[24px] md:text-[30px] absolute left-4 lg:left-[-70px] top-[-44px] cursor-pointer active:scale-90 transition-all"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>

      <div className="flex flex-col gap-6">
        <div className="w-full lg:w-[550px] h-[250px] md:h-[350px] lg:h-[408px] rounded-[20px] overflow-hidden relative shadow-400">
          <img
            src="/images/DetailServicePage/detail-img-anjing1.png"
            alt="Galtier"
            className="object-cover w-full h-full"
          />
          <div className="absolute right-4 top-4 md:right-6 md:top-6 w-[90px] h-[40px] md:w-[125px] md:h-[56px] rounded-[10px] bg-[#8DD67A] text-white flex items-center justify-center text-[16px] md:text-[24px] font-bold shadow-500">
            Jantan
          </div>
        </div>
        <div className="flex gap-4 lg:gap-[50px]">
          <div className="w-[120px] md:w-[150px] lg:w-[250px] h-[80px] md:h-[100px] lg:h-[118px] rounded-[20px] shadow-400">
            <img
              src="/images/DetailServicePage/detail-img-anjing2.png"
              alt="Detail 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[120px] md:w-[150px] lg:w-[250px] h-[80px] md:h-[100px] lg:h-[118px] rounded-[20px] shadow-400">
            <img
              src="/images/DetailServicePage/detail-img-anjing3.png"
              alt="Detail 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:gap-9 mt-6 lg:mt-0">
        <h1 className="text-[36px] md:text-[48px] font-bold">Galtier</h1>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-[20px] md:text-[24px]">Ukuran</h1>
            <div className="w-full lg:w-[610px] h-4 md:h-6 rounded-[10px] bg-[#8DD67A] shadow-500">
              <div className="w-[50%] h-full rounded-[10px] bg-[#FA9F42]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-[20px] md:text-[24px]">Ceria</h1>
            <div className="w-full lg:w-[610px] h-4 md:h-6 rounded-[10px] bg-[#8DD67A] shadow-500">
              <div className="w-[74%] h-full rounded-[10px] bg-[#FA9F42]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-[20px] md:text-[24px]">Ramah</h1>
            <div className="w-full lg:w-[610px] h-4 md:h-6 rounded-[10px] bg-[#8DD67A] shadow-500">
              <div className="w-[74%] h-full rounded-[10px] bg-[#FA9F42]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-[20px] md:text-[24px]">Energi</h1>
            <div className="w-full lg:w-[610px] h-4 md:h-6 rounded-[10px] bg-[#8DD67A] shadow-500">
              <div className="w-[40%] h-full rounded-[10px] bg-[#FA9F42]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDetailSectionAnjing;
