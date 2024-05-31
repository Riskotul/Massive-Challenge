import { useNavigate } from "react-router-dom";
import Footer from "../../Fragments/Footer/Footer";
import { NavbarLogin } from "../../Fragments/Navbar/Navbar";

const dogs = [
  {
    name: "Xero",
    age: "1 tahun",
    breed: "Dalmatian",
    image: "/images/AdopsiAnjingPage/anjing_xero.png",
  },
  {
    name: "Galtier",
    age: "6 bulan",
    breed: "Cavallier",
    image: "/images/AdopsiAnjingPage/anjing_galtier.png",
  },
  {
    name: "Putih",
    age: "8 bulan",
    breed: "Dalmatian",
    image: "/images/AdopsiAnjingPage/anjing_putih.png",
  },
  {
    name: "Susu",
    age: "10 bulan",
    breed: "Anatolian",
    image: "/images/AdopsiAnjingPage/anjing_susu.png",
  },
  {
    name: "Woofy",
    age: "5 bulan",
    breed: "Anatolian",
    image: "/images/AdopsiAnjingPage/anjing_woofy.png",
  },
  {
    name: "Love",
    age: "2 tahun",
    breed: "Dalmatian",
    image: "/images/AdopsiAnjingPage/anjing_love.png",
  },
];

const AdopsiAnjingPage = () => {
  const navigate = useNavigate();
  const HeaderAdopsianjing = "/images/AdopsiAnjingPage/header_adopsianjing.png";
  const handleClickNavigate = () => {
    navigate("/services-detail-anjing");
  };

  return (
    <>
      <NavbarLogin />{" "}
      <div>
        <div className="bg-[#8DD67A] py-12 px-16 flex justify-between items-center">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-5xl font-bold mb-5">Hallo pecinta anjing</h1>
            <p className="text-xl">
              “Temukan sahabat anjing impianmu di sini. Kami menyediakan anjing
              yang siap untuk diadopsi. Ayo, selamatkan dan rawat anjing
              ini bersama kami!”
            </p>
          </div>
          <img
            src={HeaderAdopsianjing}
            alt="Deskripsi gambar"
            className="w-[774px] h-[478px]"
          />
        </div>

        <div className="mt-10">
          <h1 className="text-center text-4xl font-bold mb-20 mt-20">
            Temukan Teman Terbaik Kamu
          </h1>
          <div className="flex flex-wrap justify-center gap-20 mx-20">
            {dogs.map((dog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md m-3 w-80 h-96 transform hover:scale-105 transition-transform flex flex-col justify-between mt-20"
              >
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-[320px] h-[250px] object-cover "
                />
                <div className="bg-[#8DD67A] p-4 flex flex-col items-center text-center shadow-xl">
                  <h2 className="text-xl font-bold mb-2">{dog.name}</h2>
                  <p className="mb-2">
                    {dog.age}, {dog.breed}
                  </p>
                  <button
                    onClick={handleClickNavigate}
                    className="bg-[#FA9F42] text-white py-2 px-4 rounded-lg shadow-xl"
                  >
                    Lihat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdopsiAnjingPage;
