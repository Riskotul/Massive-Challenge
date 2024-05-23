import { faSortDesc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DonationFormSection = () => {
  return (
    <>
      <section className="w-[1113px] h-[517px] rounded-[20px] bg-[#FA9F42] mt-[56px] pt-[39px] pb-[32px] pl-[33px] pr-[21px] flex gap-[90px]">
        <div className="flex flex-col ">
          <h1 className="text-[24px] font-bold">
            Bantu mereka dengan donasi Anda
          </h1>
          <p className="max-w-[431px] font-semibold mt-[11px]">
            Setiap donasi Anda membawa harapan dan kehidupan baru bagi mereka.
            Mari bersama, kita ciptakan perubahan nyata!
          </p>
          <div className="flex flex-col gap-[23px] mt-[45px]">
            <input
              type="text"
              className="w-[529px] h-[55px] rounded-[20px] px-4 font-semibold"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-[529px] h-[55px] rounded-[20px] px-4 font-semibold"
              placeholder="Nominal"
            />
            <div className="relative w-[400px] h-[55px]">
              {' '}
              <select className="w-[400px] h-[55px] rounded-[20px] px-4 font-semibold text-[#585858] relative appearance-none">
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
        <div className="w-[438px] h-[378px] rounded-[20px] bg-black mt-[80px]">
          <img src="/images/donation-img.png" alt="" className="size-full" />
        </div>
      </section>
      <div>
        <p className="text-center w-[915px] mt-[49px]">
          “Terima kasih atas kepedulian Anda melalui donasi terhadap hewan
          terlantar dan
          <br /> dukungan Anda terhadap program yang kami jalankan. <br />{' '}
          Kontribusi Anda, apa pun bentuk atau jumlahnya, sangat penting dalam
          memberikan
          <br /> kesempatan hidup yang lebih baik kepada hewan terlantar. ”{' '}
          <br />
          -Heywani
        </p>
      </div>
    </>
  );
};

export default DonationFormSection;
