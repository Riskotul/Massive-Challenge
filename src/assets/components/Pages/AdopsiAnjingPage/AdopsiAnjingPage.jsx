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

  const topDogs = dogs.slice(0, 3);
  const bottomDogs = dogs.slice(3);

  return (
    <>
      <NavbarLogin />{" "}
      <div>
        <div className="bg-[#8DD67A] py-12 px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center mt-20">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl lg:text-5xl font-bold mb-5 text-center lg:text-left">Hallo pecinta Anjing</h1>
            <p className="text-lg lg:text-xl text-center lg:text-left">
              “Temukan sahabat anjing impianmu di<br /> sini. Kami menyediakan anjing yang <br />siap untuk diadopsi. Ayo, selamatkan <br />dan rawat anjing ini bersama kami!”
            </p>
          </div>
          <img
            src={HeaderAdopsianjing}
            alt="Deskripsi gambar"
            className="w-[774px] h-[478px]"
          />
        </div>

        <div className="mt-10">
          <h1 className="text-center text-3xl lg:text-4xl font-bold mb-20 mt-20">
            Temukan Teman Terbaik Kamu
          </h1>
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 shadow-lg">  
            {topDogs.map((dog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-transform flex flex-col justify-between">
                <div className="flex justify-center lg:justify-start">
                  <img src={dog.image} alt={dog.name} className="w-full h-56 lg:h-48 object-cover rounded-t-lg" />
                </div>
                <div className="bg-[#8DD67A] p-4 flex flex-col items-center text-center lg:text-left">
                  <h2 className="text-lg lg:text-xl font-bold mb-2">{dog.name}</h2>
                  <p className="text-sm lg:text-base mb-2">{dog.age}, {dog.breed}</p>
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
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-6 lg:mt-10 shadow-lg mb-20">  
            {bottomDogs.map((dog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-transform flex flex-col justify-between">
                <div className="flex justify-center lg:justify-start">
                  <img src={dog.image} alt={dog.name} className="w-full h-56 lg:h-48 object-cover rounded-t-lg" />
                </div>
                <div className="bg-[#8DD67A] p-4 flex flex-col items-center text-center lg:text-left">
                  <h2 className="text-lg lg:text-xl font-bold mb-2">{dog.name}</h2>
                  <p className="text-sm lg:text-base mb-2">{dog.age}, {dog.breed}</p>
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
