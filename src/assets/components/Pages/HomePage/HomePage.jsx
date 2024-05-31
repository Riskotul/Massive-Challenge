import { Link } from "react-router-dom";
import { NavbarLogin } from "../../Fragments/Navbar/Navbar";
import Footer from "../../Fragments/Footer/Footer";

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

  return (
    <>
      <NavbarLogin />
      <div>
        <div className="bg-[#8DD67A] py-[50px] px-20 flex justify-between items-center gap-10 ">
          <div className="flex-1 justify-items-center ">
            <h1 className="text-4xl mb-12 font-bold">
              Selamat Datang di Heywani
            </h1>
            <p className="text-2xl mb-12">
              Bersama, kita bisa memberi harapan dan rumah
              <br /> bagi hewan. Ayo selamatkan nyawa mereka!!
            </p>
            <button className="bg-[#FA9F42] border-none text-black py-2 px-4 cursor-pointer rounded-xl text-xl mt-2">
              <Link to="/homelogin" className="no-underline text-black">
                Selengkapnya
              </Link>
            </button>
          </div>
          <img
            src={headerImage}
            alt="Deskripsi gambar"
            className="w-[782px] h-[528px]"
          />
        </div>

        <div className="bg-white py-5 text-center mt-20">
          <div className="bg-[#FA9F42]  text-black text-4xl py-4 px-10 rounded-2xl inline-block mx-auto font-bold w-[1195px] h-[94px] leading-[94px] font-poppins">
            Terima Kasih Telah Mempercayai Kami
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="text-center m-10">
            <div className="inline-block p-5 bg-[#FA9F42]  rounded-full">
              <img
                src={animalRescueImage}
                alt="Animal Rescue"
                className="w-24 h-24"
              />
            </div>
            <p className="text-4xl font-bold mt-2">3650+</p>
            <span className="block text-2xl mt-2">
              Hewan <br /> Terselamatkan
            </span>
          </div>
          <div className="text-center m-10">
            <div className="inline-block p-5 bg-[#FA9F42]  rounded-full">
              <img
                src={rescuersListedImage}
                alt="Rescuers Listed"
                className="w-24 h-24"
              />
            </div>
            <p className="text-4xl font-bold mt-2">1540+</p>
            <span className="block text-2xl mt-2">
              Daftar <br /> Penyelamatan
            </span>
          </div>
          <div className="text-center m-10">
            <div className="inline-block p-5 bg-[#FA9F42]  rounded-full">
              <img
                src={animalHousesImage}
                alt="Animal Houses"
                className="w-24 h-24"
              />
            </div>
            <p className="text-4xl font-bold mt-2">94+</p>
            <span className="block text-2xl mt-2">
              Rumah <br />
              Bagi Hewan
            </span>
          </div>
          <div className="text-center m-10">
            <div className="inline-block p-5 bg-[#FA9F42]  rounded-full">
              <img
                src={adopterStatistikImage}
                alt="Adopter Satisfaction"
                className="w-24 h-24"
              />
            </div>
            <p className="text-4xl font-bold mt-2">100%</p>
            <span className="block text-2xl mt-2">
              Kepuasan <br /> Pengadopsi{" "}
            </span>
          </div>
        </div>

        <div className="bg-[#8DD67A] flex justify-between items-center items-end mt-20  ">
          <img
            src={headerBeranda}
            alt="Deskripsi gambar"
            className="w-[782px] h-full"
          />
          <div className="flex-1 py-20 px-20 justify-items-center ">
            <h1 className="text-2xl mb-12 font-bold">
              “Temukan cara Anda agar dapat ikut berperan dalam menyelamatkan
              dan memberikan dukungan bagi hewan di Heywani.”
            </h1>
            <button className="bg-[#FA9F42] border-none text-black py-2 px-4 cursor-pointer rounded-xl text-xl mt-2">
              <Link to="/Popupform" className="no-underline text-black">
                Donasi
              </Link>
            </button>
            <button className="bg-[#FA9F42] border-none text-black py-2 px-4 cursor-pointer rounded-xl text-xl mt-2 ml-20">
              <Link to="/popupdonasi" className="no-underline text-black">
                Evakuasi Hewan
              </Link>
            </button>
          </div>
        </div>

        <h1 className="text-center text-4xl font-bold text-black mt-20 mb-10">
          Mengapa Pilih Kami?
        </h1>
        <div className="flex justify-center gap-20 px-12 mt-20 mb-32">
          <div className="w-[370px] h-[538px] bg-[#FA9F42]  rounded-2xl p-5 box-border">
            <div className="text-center ">
              <img
                src={pilihKami1Image}
                alt="Peduli dan Berpengalaman"
                className="w-[289px] h-[242px] rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">
                Peduli dan Berpengalaman
              </h3>
              <p className="text-lg  font-reguler text-black mt-2">
                Tim kami berkomitmen dan berpengalaman dalam menyelamatkan hewan
                terlantar.
              </p>
            </div>
          </div>
          <div className="w-[370px] h-[538px] bg-[#FA9F42]  rounded-2xl p-5 box-border">
            <div className="text-center">
              <img
                src={pilihKami2Image}
                alt="Proses Adopsi yang Mudah"
                className="w-[289px] h-[242px] rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">
                Proses Adopsi yang Mudah
              </h3>
              <p className="text-lg  font-reguler text-black mt-2">
                Kami memudahkan proses adopsi untuk memastikan hewan menemukan
                rumah yang penuh kasih.
              </p>
            </div>
          </div>
          <div className="w-[370px] h-[538px] bg-[#FA9F42]  rounded-2xl p-5 box-border">
            <div className="text-center">
              <img
                src={pilihKami3Image}
                alt="Kesehatan Terjamin"
                className="w-[289px] h-[242px] rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Kesehatan Terjamin</h3>
              <p className="text-lg font-reguler text-black mt-2">
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
