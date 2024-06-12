import { Link } from "react-router-dom";
import { Navbar } from "../../Fragments/Navbar/Navbar";
import Footer from "../../Fragments/Footer/Footer";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

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

const HomePage = () => {
  const headerImage = "/images/HomePage/header_masuk.png";
  const animalRescueImage = "/images/HomePage/animal_resque.png";
  const rescuersListedImage = "/images/HomePage/rescuers_listed.png";
  const animalHousesImage = "/images/HomePage/animal_houses.png";
  const adopterStatistikImage = "/images/HomePage/adopter_statistik.png";
  const headerBeranda = "/images/HomePage/header_beranda.png";
  const pilihKami1Image = "/images/HomePage/pilihkami_1.png";
  const pilihKami2Image = "/images/HomePage/pilihkami_2.png";
  const pilihKami3Image = "/images/HomePage/pilihkami_3.png";

  const [popUpAdopsi, setPopUpAdopsi] = useState(false);

  const handlePopUpAdopsi = () => {
    setPopUpAdopsi(!popUpAdopsi);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-[#8DD67A] w-full py-12 md:py-10 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-10 mt-20">
          <PopUpAdopsi onClickChange={handlePopUpAdopsi} isOpen={popUpAdopsi} />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-4xl mb-4 md:mb-8 font-bold">
              Heywani
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
              Selamatkan, adopsi, dan cintai hewan-hewan terlantar bersama kami.
              Jadilah bagian dari perubahan dan berikan mereka rumah penuh
              kasih. Mari bersama-sama menciptakan dunia yang lebih baik untuk
              hewan!
            </p>
            <button
              onClick={handlePopUpAdopsi}
              className="w-full md:w-[150px] h-fit py-[10px] bg-[#FA9F42] rounded-2xl font-semibold mt-4 text-xl"
            >
              Adopsi
            </button>
          </div>
          <img
            src={headerImage}
            alt="Deskripsi gambar"
            className="w-full md:w-auto h-[320px] md:h-auto"
            style={{ maxWidth: "700px" }}
          />
        </div>

        <div className="bg-white py-5 text-center mt-20">
          <div className="bg-[#FA9F42] text-black text-xl md:text-3xl py-9 px-8 rounded-2xl inline-block mx-auto font-bold w-full md:max-w-[1195px] h-[100px] leading-[94px] font-poppins">
            Terima Kasih Telah Mempercayai Kami
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-10">
          <div className="text-center m-5 md:m-10">
            <div className="inline-block p-5 bg-[#FA9F42] rounded-full">
              <img
                src={animalRescueImage}
                alt="Animal Rescue"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <p className="text-2xl md:text-4xl font-bold mt-2">3650+</p>
            <span className="block text-lg md:text-2xl mt-2">
              Hewan <br /> Terselamatkan
            </span>
          </div>
          <div className="text-center m-5 md:m-10">
            <div className="inline-block p-5 bg-[#FA9F42] rounded-full">
              <img
                src={rescuersListedImage}
                alt="Rescuers Listed"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <p className="text-2xl md:text-4xl font-bold mt-2">1540+</p>
            <span className="block text-lg md:text-2xl mt-2">
              Daftar <br /> Penyelamatan
            </span>
          </div>
          <div className="text-center m-5 md:m-10">
            <div className="inline-block p-5 bg-[#FA9F42] rounded-full">
              <img
                src={animalHousesImage}
                alt="Animal Houses"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <p className="text-2xl md:text-4xl font-bold mt-2">94+</p>
            <span className="block text-lg md:text-2xl mt-2">
              Rumah <br /> Bagi Hewan
            </span>
          </div>
          <div className="text-center m-5 md:m-10">
            <div className="inline-block p-5 bg-[#FA9F42] rounded-full">
              <img
                src={adopterStatistikImage}
                alt="Adopter Satisfaction"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <p className="text-2xl md:text-4xl font-bold mt-2">100%</p>
            <span className="block text-lg md:text-2xl mt-2">
              Kepuasan <br /> Pengadopsi
            </span>
          </div>
        </div>

        <div className="bg-[#8DD67A] flex flex-col md:flex-row justify-between items-center mt-20">
          <img
            src={headerBeranda}
            alt="Deskripsi gambar"
            className="w-full md:w-1/2 h-auto"
            style={{ maxWidth: "800px" }}
          />
          <div className="flex-1 py-12 px-6 md:py-20 md:px-20 text-center md:text-left">
            <h1 className="text-xl md:text-2xl mb-6 md:mb-12 font-bold">
              “Temukan cara Anda agar dapat ikut berperan dalam menyelamatkan
              dan memberikan dukungan bagi hewan di Heywani.”
            </h1>
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
              <button className="bg-[#FA9F42] border-none text-black py-2 px-4 md:py-2 md:px-6 cursor-pointer rounded-xl text-lg md:text-xl mt-2 md:mt-4 md:mr-4">
                <Link to="/donation" className="no-underline text-black">
                  Donasi
                </Link>
              </button>
              <button className="bg-[#FA9F42] border-none text-black py-2 px-4 md:py-2 md:px-6 cursor-pointer rounded-xl text-lg md:text-xl mt-2 md:mt-4">
                <Link to="/contact" className="no-underline text-black">
                  Evakuasi Hewan
                </Link>
              </button>
            </div>
          </div>
        </div>

        <h1 className="text-center text-3xl md:text-4xl font-bold text-black mt-20 mb-10">
          Mengapa Pilih Kami?
        </h1>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 px-4 lg:px-0 mt-20 mb-32">
          <div className="w-full md:w-[370px] h-auto md:h-[538px] bg-[#FA9F42] rounded-2xl p-5 box-border">
            <div className="text-center">
              <img
                src={pilihKami1Image}
                alt="Peduli dan Berpengalaman"
                className="w-full md:w-[500px] h-auto md:h-[242px] rounded-2xl mb-6"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Peduli dan Berpengalaman
              </h3>
              <p className="text-base md:text-lg font-regular text-black mt-2">
                Tim kami berkomitmen dan berpengalaman dalam menyelamatkan hewan
                terlantar.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[370px] h-auto md:h-[538px] bg-[#FA9F42] rounded-2xl p-5 box-border">
            <div className="text-center">
              <img
                src={pilihKami2Image}
                alt="Proses Adopsi yang Mudah"
                className="w-full md:w-[500px] h-auto md:h-[242px] rounded-2xl mb-6"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Proses Adopsi yang Mudah
              </h3>
              <p className="text-base md:text-lg font-regular text-black mt-2">
                Kami memudahkan proses adopsi untuk memastikan hewan menemukan
                rumah yang penuh kasih.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[370px] h-auto md:h-[538px] bg-[#FA9F42] rounded-2xl p-5 box-border">
            <div className="text-center">
              <img
                src={pilihKami3Image}
                alt="Kesehatan Terjamin"
                className="w-full md:w-[500px] h-auto md:h-[242px] rounded-2xl mb-6"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Kesehatan Terjamin
              </h3>
              <p className="text-base md:text-lg font-regular text-black mt-2">
                Hewan akan mendapatkan perawatan kesehatan secara lengkap
                sebelum nanti diadopsi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
