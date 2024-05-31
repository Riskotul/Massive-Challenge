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
      className={
        isOpen
          ? "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm flex"
          : "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm hidden"
      }
    >
      <div className="w-[788px] h-[664px] rounded-[32px] bg-white py-[128px] px-16 flex flex-col gap-10 items-center relative">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute cursor-pointer top-8 right-10 size-6"
          onClick={handleChange}
        />
        <h1 className="text-[36px] font-bold">Adopsi apa sekarang?</h1>
        <div className="flex items-center gap-8">
          <Link to="/adopsi-kucing">
            <img
              src="/images/ServicesPage/adopsi-kucing.png"
              alt=""
              className="size-[314px] cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link to="/adopsi-anjing">
            <img
              src="/images/ServicesPage/adopsi-anjing.png"
              alt=""
              className="size-[314px] cursor-pointer hover:scale-110 transition-all duration-300"
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
    <div className="w-[1288px] h-[468px] rounded-[32px] bg-[#8DD67A] flex items-center gap-[64px] pl-[64px]">
      <PopUpAdopsi onClickChange={handlePopUpAdopsi} isOpen={popUpAdopsi} />
      <div className="flex flex-col max-w-[516px] gap-4">
        <h1 className="text-[36px] font-bold">
          Hey! Ayo adopsi calon peliharaanmu sekarang
        </h1>
        <h2>
          Cari dan temukan teman untuk dibawa pulang ke rumah sekarang juga
        </h2>
        <button
          onClick={handlePopUpAdopsi}
          className="w-[87px] h-fit py-[10px] bg-white rounded-lg font-semibold mt-4"
        >
          Adopsi
        </button>
      </div>
      <img
        src="/images/ServicesPage/services-hero.png "
        alt=""
        className="w-[644px]"
      />
    </div>
  );
};

export default ServicesHeroSection;
