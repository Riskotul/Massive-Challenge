import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const PopUpAdopsi = ({ onClickChange, isOpen }) => {
  const handleChange = () => {
    onClickChange();
  };

  return (
    <div
      className={`fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="w-full max-w-[788px] h-auto md:h-[664px] rounded-[32px] bg-white py-10 md:py-[128px] px-4 md:px-16 flex flex-col gap-10 items-center relative">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute cursor-pointer top-4 right-6 md:top-8 md:right-10 text-2xl md:text-3xl"
          onClick={handleChange}
        />
        <h1 className="text-[24px] md:text-[36px] font-bold text-center">
          Adopsi apa sekarang?
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Link to="/adopsi-kucing">
            <img
              src="/images/ServicesPage/adopsi-kucing.png"
              alt="Adopsi Kucing"
              className="w-full max-w-[314px] cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link to="/adopsi-anjing">
            <img
              src="/images/ServicesPage/adopsi-anjing.png"
              alt="Adopsi Anjing"
              className="w-full max-w-[314px] cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

PopUpAdopsi.propTypes = {
  onClickChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const ServicesHeroSection = () => {
  const [popUpAdopsi, setPopUpAdopsi] = useState(false);

  const handlePopUpAdopsi = () => {
    setPopUpAdopsi(!popUpAdopsi);
  };

  return (
    <div className="w-full max-w-[1288px] h-auto md:h-[468px] rounded-[32px] bg-[#8DD67A] flex flex-col md:flex-row items-center gap-[32px] md:gap-[64px] p-4 md:pl-[64px] mx-auto">
      <PopUpAdopsi onClickChange={handlePopUpAdopsi} isOpen={popUpAdopsi} />
      <div className="flex flex-col max-w-full md:max-w-[516px] gap-4 text-center md:text-left">
        <h1 className="text-[24px] md:text-[36px] font-bold">
          Hey! Ayo adopsi calon peliharaanmu sekarang
        </h1>
        <h2 className="text-xl md:text-2xl">
          Cari dan temukan teman untuk dibawa pulang ke rumah sekarang juga
        </h2>
        <button
          onClick={handlePopUpAdopsi}
          className="w-full md:w-[200px] h-fit py-[10px] bg-white rounded-lg font-semibold text-2xl mt-4"
        >
          Adopsi
        </button>
      </div>
      <img
        src="/images/ServicesPage/services-hero.png"
        alt="Services Hero"
        className="w-full max-w-[644px] h-auto"
      />
    </div>
  );
};

export default ServicesHeroSection;
