import { faSortDesc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DonationFormSection = () => {
  return (
    <>
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
              className="w-full max-w-[529px] h-[55px] rounded-[20px] px-4 font-semibold"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full max-w-[529px] h-[55px] rounded-[20px] px-4 font-semibold"
              placeholder="Nominal"
            />
            <div className="relative w-full max-w-[400px] h-[55px]">
              {" "}
              <select className="w-full h-[55px] rounded-[20px] px-4 font-semibold text-[#585858] appearance-none">
                <option value="" disabled selected hidden>
                  Metode Pembayaran
                </option>
                <option
                  value="Bank Transfer"
                  className="w-[400px] h-[55px] rounded-[20px] px-4 font-semibold text-[#585858] relative"
                >
                  Bank Transfer
                </option>
                <option
                  value="Paylater"
                  className="w-[400px] h-[55px] rounded-[20px] px-4 font-semibold text-[#585858] relative"
                >
                  Paylater
                </option>
                <option
                  value="Lainnya"
                  className="w-[400px] h-[55px] rounded-[20px] px-4 font-semibold text-[#585858] relative"
                >
                  Lainnya
                </option>
              </select>
              <FontAwesomeIcon
                icon={faSortDesc}
                className="absolute text-[#484747] size-9 right-4 bottom-4"
              />
            </div>
            <button className="w-[172px] h-fit py-3 rounded-[20px] bg-white font-bold self-center mt-[19px]">
              Donasi
            </button>
          </div>
        </div>
        <div className="w-full max-w-[438px] h-[200px] lg:h-[378px] rounded-[20px] bg-black mt-[20px] lg:mt-[80px] mx-auto lg:mx-0">
          <img
            src="/images/donation-img.png"
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
