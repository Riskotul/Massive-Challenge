import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

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
            <div className="w-[90%] max-w-[500px] h-[560px] rounded-[20px] bg-white relative border">
              <div className="w-[191px] h-[191px] rounded-full bg-[#8DD67A] absolute -top-[95px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                <img src="/images/ContactPage/done-icon.png" alt="" />
              </div>
              <div className="mt-[137px] w-full flex flex-col items-center gap-4">
                <h1 className="text-[36px] lg:text-[48px] font-bold">
                  Terima Kasih!
                </h1>
                <div className="flex flex-col px-4">
                  <p className="text-[18px] lg:text-[20px] font-medium text-center mt-10">
                    Pesan Anda telah kami terima dan akan segera kami tanggapi.
                    Terima kasih telah mendukung misi penyelamatan hewan
                    bersama Heywani!
                  </p>
                </div>
                <button
                  onClick={handlePopUp}
                  className="size-fit px-[40px] lg:px-[52px] py-3 bg-[#FA9F42] rounded-lg text-white text-[20px] lg:text-[24px] font-medium mt-10"
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
                    Untuk memberikan respons terbaik kepada Anda . Silahkan
                    masuk/daftar akun terlebih dahulu
                  </p>
                </div>
                <button
                  onClick={handlePopUp}
                  className="size-fit px-[40px] lg:px-[52px] py-3 bg-[#FA9F42] rounded-lg text-white text-[20px] lg:text-[24px] font-medium mt-10"
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

const FormSection = () => {
  const [isPopOpen, setIsPopOpen] = useState(false);

  const handlePopUp = () => {
    setIsPopOpen(!isPopOpen);
  };
  return (
    <>
      <PopUpTerkirim isPopUpOpen={isPopOpen} handlePopUp={handlePopUp} />
      <section className="mt-[49px] flex flex-col gap-[49px] mb-20">
        <h1 className="text-[36px] font-bold">
          Kami Siap Membantu Anda Kirimkan Pesan Kepada Kami!{" "}
        </h1>
        <div className="w-full md:w-[1113px] h-[auto] md:h-[670px] rounded-[20px] bg-[#FA9F42] py-[26px] pl-[61px] pr-[47px] flex flex-col gap-5">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-[30px]">Nama</h1>
            <input
              type="text"
              className="w-full h-[66px] rounded-[20px] py-3 px-6 text-2xl font-medium"
            />
          </div>
          <div className="w-full md:flex gap-[47px]">
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-semibold text-[30px]">No. Handphone</h1>
              <input
                type="text"
                className="w-full md:w-[483px] h-[66px] rounded-[20px] py-3 px-6 text-2xl font-medium"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-semibold text-[30px]">Email</h1>
              <input
                type="text"
                className="w-full md:w-[483px] h-[66px] rounded-[20px] py-3 px-6 text-2xl font-medium"
              />
            </div>
          </div>
          <div className="w-full md:flex gap-[47px]">
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-semibold text-[30px]">Pesan</h1>
              <textarea
                type=""
                cols={80} // Menentukan jumlah kolom
                className="w-full h-[221px] rounded-[20px] pt-6 px-6 text-2xl font-medium"
              />
            </div>
          </div>

          <button
            onClick={handlePopUp}
            className="w-full md:w-[193px] h-[53px] px-[63px] py-2 rounded-[20px] bg-white flex justify-center items-center text-[24px] font-bold self-center"
          >
            Kirim
          </button>
        </div>
      </section>
    </>
  );
};

export default FormSection;
