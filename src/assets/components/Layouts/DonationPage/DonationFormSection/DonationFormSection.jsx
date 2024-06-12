import { faSortDesc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PopUpTerkirim = ({ isPopUpOpen, handlePopUp }) => {
  const [isToken, setToken] = useState(false);
  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = () => {
    try {
      const tokenStorage = localStorage.getItem("token");
      if (tokenStorage) {
        setToken(true);
      } else {
        setToken(false);
      }
      const decoded = parseJwt(tokenStorage);
      setName(decoded.name);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isToken ? (
        <>
          <div
            className={
              isPopUpOpen
                ? "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm flex"
                : "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm hidden"
            }
          >
            <div className="w-[90%] max-w-[500px] h-[560px] rounded-[20px] bg-white relative border flex flex-col justify-center items-center">
              <div className="w-[191px] h-[191px] flex justify-center items-center">
                <img
                  src="/images/DonationPage/barcode_donasi.png"
                  alt="Barcode"
                />
              </div>
              <div className="mt-[20px] w-full flex flex-col items-center gap-4">
                <h1 className="text-[30px] lg:text-[30px] font-bold">
                  Scan barcode di atas
                </h1>
                <button
                  onClick={handlePopUp}
                  className="size-fit px-[40px] lg:px-[52px] py-3 bg-[#FA9F42] rounded-[32px] text-white text-[20px] lg:text-[24px] font-medium mt-10"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={
              isPopUpOpen
                ? "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm flex"
                : "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm hidden"
            }
          >
            <div className="w-[90%] max-w-[500px] h-[560px] rounded-[20px] bg-white relative border">
              <div className="w-[191px] h-[191px] rounded-full bg-[#FA4242] absolute -top-[95px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                <img src="/images/ContactPage/!.png" alt="" />
              </div>
              <div className="mt-[137px] w-full flex flex-col items-center gap-4">
                <h1 className="text-[36px] lg:text-[48px] font-bold">
                  Perhatian
                </h1>
                <div className="flex flex-col px-4">
                  <p className="text-[18px] lg:text-[20px] font-medium text-center mt-10">
                    Untuk memproses donasi Anda dengan lancar. Silahkan
                    masuk/daftar akun terlebih dahulu
                  </p>
                </div>
                <button
                  onClick={handlePopUp}
                  className="size-fit px-[40px] lg:px-[52px] py-3 bg-[#FA9F42] rounded-[32px] text-white text-[20px] lg:text-[24px] font-medium mt-10"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

PopUpTerkirim.propTypes = {
  isPopUpOpen: PropTypes.bool.isRequired,
  handlePopUp: PropTypes.func.isRequired,
};

const DonationFormSection = () => {
  const [isPopOpen, setIsPopOpen] = useState(false);

  const handlePopUp = () => {
    setIsPopOpen(!isPopOpen);
  };
  return (
    <>
      <PopUpTerkirim isPopUpOpen={isPopOpen} handlePopUp={handlePopUp} />
      <section className="w-full max-w-[1113px] mx-auto h-auto lg:h-[517px] rounded-[20px] bg-[#FA9F42] mt-[56px] pt-[39px] pb-[32px] px-4 sm:px-6 lg:pt-[39px] lg:pb-[32px] lg:pl-[33px] lg:pr-[21px] flex flex-col lg:flex-row gap-[30px] lg:gap-[90px]">
        <div className="flex flex-col ">
          <h1 className="text-[24px] font-bold">
            Bantu mereka dengan donasi Anda
          </h1>
          <p className="max-w-full lg:max-w-[431px] font-semibold mt-[11px]">
            Setiap donasi Anda membawa harapan dan kehidupan baru bagi mereka.
            Mari bersama, kita ciptakan perubahan nyata!
          </p>
          <div className="flex flex-col gap-[23px] mt-[20px] lg:mt-[45px]">
            <input
              type="text"
              className="w-full max-w-[529px] h-[55px] rounded-[32px] px-4 font-semibold"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full max-w-[529px] h-[55px] rounded-[32px] px-4 font-semibold"
              placeholder="Nominal"
            />
            <div className="relative w-full max-w-[400px] h-[55px]">
              {" "}
              <select className="w-full h-[55px] rounded-[32px] px-4 font-semibold text-[#585858] appearance-none">
                <option value="" disabled selected hidden>
                  Metode Pembayaran
                </option>
                <option
                  value="Bank Transfer"
                  className="w-[400px] h-[55px] rounded-[32px] px-4 font-semibold text-[#585858] relative"
                >
                  Dana
                </option>
                <option
                  value="Paylater"
                  className="w-[400px] h-[55px] rounded-[32px] px-4 font-semibold text-[#585858] relative"
                >
                  Gopay
                </option>
                <option
                  value="Lainnya"
                  className="w-[400px] h-[55px] rounded-[32px] px-4 font-semibold text-[#585858] relative"
                >
                  Ovo
                </option>
                <option
                  value="Lainnya"
                  className="w-[400px] h-[55px] rounded-[32px] px-4 font-semibold text-[#585858] relative"
                >
                  LinkAja
                </option>
                <option
                  value="Lainnya"
                  className="w-[400px] h-[55px] rounded-[32px] px-4 font-semibold text-[#585858] relative"
                >
                  Shopeepay
                </option>
              </select>
              <FontAwesomeIcon
                icon={faSortDesc}
                className="absolute text-[#484747] size-9 right-4 bottom-4"
              />
            </div>
            <button
              onClick={handlePopUp}
              className="w-[172px] h-fit py-3 rounded-[32px] bg-white font-bold self-center mt-[19px]"
            >
              Donasi
            </button>
          </div>
        </div>
        <div className="w-full max-w-[438px] h-[200px] lg:h-[378px] rounded-[20px] bg-black mt-[20px] lg:mt-[80px] mx-auto lg:mx-0">
          <img
            src="/images/DonationPage/donation-img.png"
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </section>
      <div className="w-full flex justify-center mt-[49px] px-4 sm:px-6">
        <p className="text-center max-w-full lg:max-w-[915px]">
          “Terima kasih atas kepedulian Anda melalui donasi terhadap hewan
          terlantar dan
          <br className="hidden lg:block" /> dukungan Anda terhadap program yang
          kami jalankan.
          <br className="hidden lg:block" /> Kontribusi Anda, apa pun bentuk
          atau jumlahnya, sangat penting dalam memberikan
          <br className="hidden lg:block" /> kesempatan hidup yang lebih baik
          kepada hewan terlantar. ”
          <br className="hidden lg:block" />
          -Heywani
        </p>
      </div>
    </>
  );
};

export default DonationFormSection;
