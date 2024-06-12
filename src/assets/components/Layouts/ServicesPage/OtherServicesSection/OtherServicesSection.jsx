import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const PopUpDetailLayanan = ({
  img,
  jenis,
  layanan,
  namaLayanan,
  jadwal,
  lokasi,
  hewan,
  popUpClick,
  isOpen,
}) => {
  const [jenisHewan, setJenisHewan] = useState([]);
  useEffect(() => {
    if (hewan === "1") {
      setJenisHewan(["Kucing"]);
    } else if (hewan === "2") {
      setJenisHewan(["Anjing"]);
    } else if (hewan === "3") {
      setJenisHewan(["Kucing", "Anjing"]);
    } else {
      setJenisHewan(["Anjing"]);
    }
  }, [hewan]);

  const handleChange = () => {
    popUpClick();
  };

  return (
    <div
      className={
        isOpen
          ? "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm flex"
          : "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm hidden"
      }
    >
      <div className="max-w-[788px] w-full h-auto rounded-2xl bg-white flex flex-col items-center pb-[37px] pt-[25px] font-inter relative">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute cursor-pointer top-8 right-10 size-6"
          onClick={handleChange}
        />
        <img src={img} alt="" className="max-w-full h-[200px] object-contain" />
        <div className="w-full h-[49px] flex py-4 justify-between px-[45px]">
          <h1 className="text-[14px]">{jenis}</h1>
          <h1 className="text-[14px]">{layanan}</h1>
        </div>
        <div className="w-full py-2 px-[45px] flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[60%] h-auto">
            <h1 className="text-[18px] font-semibold">{namaLayanan}</h1>
            <div className="flex items-center gap-2 mt-1">
              <img
                src="/images/ServicesPage/service-date-icon.png"
                alt=""
                className="size-5"
              />
              <h1 className="text-[14px]">{jadwal}</h1>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <img
                src="/images/ServicesPage/service-map-icon.png"
                alt=""
                className="size-5"
              />
              <h1 className="text-[14px]">{lokasi}</h1>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {jenisHewan.map((hewan, index) => (
                <h1
                  key={index}
                  className="text-[14px] size-fit px-2 py-1 rounded-full bg-[#E7E7E7]"
                >
                  {hewan}
                </h1>
              ))}
            </div>
            <button className="font-bold size-fit px-4 py-[10px] rounded-[32px] bg-[#FA9F42] text-white mt-4">
              Daftar sekarang
            </button>
          </div>
          <div className="flex flex-col w-full md:w-[40%] gap-1 mt-4 md:mt-0">
            <h1 className="text-[18px] font-semibold">Syarat & Ketentuan</h1>
            <ol className="ml-5 list-decimal">
              <li>Domisili Kota Bekasi</li>
              <li>Usia hewan minimal 6 bulan</li>
              <li>Dalam keadaan sehat</li>
              <li>Minimal 3 hari, jeda waktu setelah mandi</li>
              <li>Minimal 2 minggu, jeda waktu pasca sakit</li>
              <li>Harap membawa fotocopy KTP</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const LayananCard = ({
  img,
  jenis,
  layanan,
  namaLayanan,
  jadwal,
  lokasi,
  hewan,
  popUpClick,
  setPopUpDetailLayananData,
}) => {
  const [jenisHewan, setJenisHewan] = useState([]);
  const handleChange = () => {
    setPopUpDetailLayananData({
      img,
      jenis,
      layanan,
      namaLayanan,
      jadwal,
      lokasi,
      hewan,
    });
    popUpClick();
  };

  useEffect(() => {
    if (hewan === "1") {
      setJenisHewan(["Kucing"]);
    } else if (hewan === "2") {
      setJenisHewan(["Anjing"]);
    } else if (hewan === "3") {
      setJenisHewan(["Kucing", "Anjing"]);
    } else {
      setJenisHewan(["Anjing"]);
    }
  }, [hewan]);

  return (
    <div className="w-full md:w-[320px] h-auto md:h-[432px] flex flex-col rounded-2xl shadow-300 hover:-translate-y-2 transition duration-300 cursor-pointer font-inter">
      <div className="w-full h-[49px] flex items-center justify-between px-4">
        <h1 className="text-[14px]">{jenis}</h1>
        <h1 className="text-[14px]">{layanan}</h1>
      </div>
      <div className="w-full h-[180px]">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-[131px] py-4 px-4">
        <h1 className="text-[18px] font-semibold">{namaLayanan}</h1>
        <div className="flex items-center gap-2 mt-1">
          <img
            src="/images/ServicesPage/service-date-icon.png"
            alt=""
            className="size-5"
          />
          <h1 className="text-[14px]">{jadwal}</h1>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img
            src="/images/ServicesPage/service-map-icon.png"
            alt=""
            className="size-5"
          />
          <h1 className="text-[14px]">{lokasi}</h1>
        </div>
        <div className="flex items-center gap-3 mt-5">
          {jenisHewan.map((hewan, index) => (
            <h1
              key={index}
              className="text-[14px] size-fit px-2 py-1 rounded-full bg-[#E7E7E7]"
            >
              {hewan}
            </h1>
          ))}
        </div>
      </div>
      <div className="w-full h-[52px] py-4 px-4 mt-4 flex justify-between items-center">
        <h1 className="text-[14px] font-semibold">Detail</h1>
        <img
          src="/images/ServicesPage/services-detail-icon.png"
          alt=""
          className="size-5"
          onClick={handleChange}
        />
      </div>
    </div>
  );
};

const OtherServicesSection = () => {
  const [popPopUpDetailLayanan, setPopUpDetailLayanan] = useState(false);
  const [popUpDetailLayananData, setPopUpDetailLayananData] = useState({});

  const handleClickPopUpDetailLayanan = () => {
    setPopUpDetailLayanan(!popPopUpDetailLayanan);
  };

  return (
    <section className="mt-8 w-full md:w-[1288px] flex flex-col gap-4 mx-auto px-4">
      <PopUpDetailLayanan
        {...popUpDetailLayananData}
        popUpClick={handleClickPopUpDetailLayanan}
        isOpen={popPopUpDetailLayanan}
      />
      <div>
        <h1 className="font-semibold text-[30px]">Layanan lainnya</h1>
        <div className="w-[64px] h-[4px] bg-[#D9D9D9] mt-4"></div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-4">
        <div className="flex flex-col gap-4 md:w-[256px]">
          <div className="flex flex-col">
            <h1 className="font-semibold">Jenis layanan</h1>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="all"
                  name="radio-1"
                  className="radio radio-primary size-4"
                  defaultChecked
                />
                <label
                  htmlFor="all"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Semua
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="vaksinisasi"
                  name="radio-1"
                  className="radio radio-primary size-4"
                />
                <label
                  htmlFor="vaksinisasi"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Vaksinisasi
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="sterilisasi"
                  name="radio-1"
                  className="radio radio-primary size-4"
                />
                <label
                  htmlFor="sterilisasi"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Sterilisasi{" "}
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Harga</h1>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="semua"
                  name="radio-2"
                  className="radio radio-primary size-4"
                  defaultChecked
                />
                <label
                  htmlFor="semua"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Semua
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="berbayar"
                  name="radio-2"
                  className="radio radio-primary size-4"
                />
                <label
                  htmlFor="berbayar"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Berbayar
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="gratis"
                  name="radio-2"
                  className="radio radio-primary size-4"
                />
                <label
                  htmlFor="gratis"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Gratis{" "}
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Jenis Hewan</h1>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="semua-hewan"
                  name="radio-3"
                  className="radio radio-primary size-4"
                  defaultChecked
                />
                <label
                  htmlFor="semua-hewan"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Semua
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="kucing"
                  name="radio-3"
                  className="radio radio-primary size-4"
                />
                <label
                  htmlFor="kucing"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Kucing
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="anjing"
                  name="radio-3"
                  className="radio radio-primary size-4"
                />
                <label
                  htmlFor="anjing"
                  className="text-[14px] font-medium text-[#344054] cursor-pointer"
                >
                  Anjing{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <LayananCard
            img="/images/ServicesPage/layanan-1.png"
            jenis="Vaksinasi"
            layanan="Gratis"
            namaLayanan="Vaksinasi Rabies"
            jadwal="10.00-11.30 19/01/2024"
            lokasi="Aula Stadion"
            hewan="3"
            popUpClick={handleClickPopUpDetailLayanan}
            setPopUpDetailLayananData={setPopUpDetailLayananData}
          />
          <LayananCard
            img="/images/ServicesPage/layanan-2.png"
            jenis="Strerilisasi"
            layanan="Berbayar"
            namaLayanan="Steril Kucing"
            jadwal="08.00-13.00 16/02/2024"
            lokasi="Puskeswan Cibarusah"
            hewan="1"
            popUpClick={handleClickPopUpDetailLayanan}
            setPopUpDetailLayananData={setPopUpDetailLayananData}
          />
          <LayananCard
            img="/images/ServicesPage/layanan-3.png"
            jenis="Vaksinasi"
            layanan="Berbayar"
            namaLayanan="Vaksinasi Tricat"
            jadwal="08.15-11.50 27/01/2024"
            lokasi="UPTD Pusat Kesehatan Hewan Depok"
            hewan="1"
            popUpClick={handleClickPopUpDetailLayanan}
            setPopUpDetailLayananData={setPopUpDetailLayananData}
          />
          <LayananCard
            img="/images/ServicesPage/layanan-4.png"
            jenis="Vaksinasi"
            layanan="Gratis"
            namaLayanan="Vaksinasi Distemper"
            jadwal="10.00-13.30 19/03/2024"
            lokasi="Klinik Hewan Sehat"
            hewan="2"
            popUpClick={handleClickPopUpDetailLayanan}
            setPopUpDetailLayananData={setPopUpDetailLayananData}
          />
          <LayananCard
            img="/images/ServicesPage/layanan-5.png"
            jenis="Vaksinasi"
            layanan="Berbayar"
            namaLayanan="Vaksinasi Parainfluenza"
            jadwal="09.00-11.30 19/04/2024"
            lokasi="Grha VETMA PUSVETMA"
            hewan="2"
            popUpClick={handleClickPopUpDetailLayanan}
            setPopUpDetailLayananData={setPopUpDetailLayananData}
          />
          <LayananCard
            img="/images/ServicesPage/layanan-6.png"
            jenis="Sterilisasi"
            layanan="Gratis"
            namaLayanan="Program Sterilisasi Subsidi"
            jadwal="07.30-12.30 06/03/2024"
            lokasi="Klinik Hewan Cimareme"
            hewan="3"
            popUpClick={handleClickPopUpDetailLayanan}
            setPopUpDetailLayananData={setPopUpDetailLayananData}
          />
        </div>
      </div>
    </section>
  );
};

LayananCard.propTypes = {
  img: PropTypes.string.isRequired,
  jenis: PropTypes.string.isRequired,
  layanan: PropTypes.string.isRequired,
  namaLayanan: PropTypes.string.isRequired,
  jadwal: PropTypes.string.isRequired,
  lokasi: PropTypes.string.isRequired,
  hewan: PropTypes.string.isRequired,
  popUpClick: PropTypes.func.isRequired,
  setPopUpDetailLayananData: PropTypes.func.isRequired,
};

PopUpDetailLayanan.propTypes = {
  img: PropTypes.string.isRequired,
  jenis: PropTypes.string.isRequired,
  layanan: PropTypes.string.isRequired,
  namaLayanan: PropTypes.string.isRequired,
  jadwal: PropTypes.string.isRequired,
  lokasi: PropTypes.string.isRequired,
  hewan: PropTypes.string.isRequired,
  popUpClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default OtherServicesSection;
