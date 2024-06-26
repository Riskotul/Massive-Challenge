import { useNavigate } from "react-router-dom";
import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";

const cats = [
  {
    name: "Peter",
    age: "3 bulan",
    breed: "Domestik",
    image: "/images/AdopsiKucingPage/kucing_peter.png",
  },
  {
    name: "Oyen",
    age: "4 bulan",
    breed: "Domestik",
    image: "/images/AdopsiKucingPage/kucing_oyen.png",
  },
  {
    name: "Lucky",
    age: "4 bulan",
    breed: "Himalaya",
    image: "/images/AdopsiKucingPage/kucing_lucky.png",
  },
  {
    name: "Cimol",
    age: "1 bulan",
    breed: "Domestik",
    image: "/images/AdopsiKucingPage/kucing_cimil.png",
  },
  {
    name: "Saset",
    age: "2 bulan",
    breed: "Persia",
    image: "/images/AdopsiKucingPage/kucing_saset.png",
  },
  {
    name: "Belang",
    age: "7 bulan",
    breed: "Persia",
    image: "/images/AdopsiKucingPage/kucing_belang.png",
  },
];

const AdopsiKucingPage = () => {
  const navigate = useNavigate();
  const HeaderAdopsikucing = "/images/AdopsiKucingPage/header_adopsikucing.png";

  const handleClickNavigate = () => {
    navigate("/services-detail-kucing");
  };

  const topCats = cats.slice(0, 3);
  const bottomCats = cats.slice(3);

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-[#8DD67A] py-12 px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center mt-10">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-2xl lg:text-4xl font-bold mb-5 text-center lg:text-left">
              Hallo pecinta kucing
            </h1>
            <p className="text-xl lg:text-2xl text-center lg:text-left mt-10">
              “Temukan sahabat kucing impianmu di sini. Kami menyediakan kucing
              yang <br />
              siap untuk diadopsi. Ayo, selamatkan dan rawat kucing ini bersama
              kami!”
            </p>
          </div>
          <img
            src={HeaderAdopsikucing}
            alt="Deskripsi gambar"
            className="w-[700px] h-[440px]"
          />
        </div>

        <div className="mt-10">
          <h1 className="text-center text-3xl lg:text-4xl font-bold mb-20 mt-20">
            Temukan Teman Terbaik Kamu
          </h1>
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 mb-20">
            {topCats.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] shadow-xl w-full h-auto transform hover:scale-105 transition-transform flex flex-col justify-between"
              >
                <div className="flex justify-center lg:justify-start">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-56 lg:h-48 object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="bg-[#ffffff] p-4 flex flex-col items-center text-center lg:text-left rounded-[16px]">
                  <h2 className="text-lg lg:text-xl font-bold mb-2">
                    {cat.name}
                  </h2>
                  <p className="text-sm lg:text-base mb-2">
                    {cat.age}, {cat.breed}
                  </p>
                  <button
                    onClick={handleClickNavigate}
                    className="bg-[#FA9F42] text-white font-semibold py-2 px-8 rounded-[32px] shadow-xl mt-3"
                  >
                    Lihat
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 mb-20">
            {bottomCats.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] shadow-xl w-full h-auto transform hover:scale-105 transition-transform flex flex-col justify-between"
              >
                <div className="flex justify-center lg:justify-start">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-56 lg:h-48 object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="bg-[#ffffff] p-4 flex flex-col items-center text-center lg:text-left rounded-[16px]">
                  <h2 className="text-lg lg:text-xl font-bold mb-2">
                    {cat.name}
                  </h2>
                  <p className="text-sm lg:text-base mb-2">
                    {cat.age}, {cat.breed}
                  </p>
                  <button
                    onClick={handleClickNavigate}
                    className="bg-[#FA9F42] text-white font-semibold py-2 px-8 rounded-[32px] shadow-xl mt-3"
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

export default AdopsiKucingPage;
