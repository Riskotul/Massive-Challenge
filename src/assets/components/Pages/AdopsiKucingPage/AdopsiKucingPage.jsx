import { useNavigate } from "react-router-dom";
import Footer from "../../Fragments/Footer/Footer";
import { NavbarLogin } from "../../Fragments/Navbar/Navbar";

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

  return (
    <>
      <NavbarLogin />
      <div>
        <div className="bg-[#8DD67A] py-12 px-16 flex justify-between items-center">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-5xl font-bold mb-5">Hallo pecinta kucing</h1>
            <p className="text-xl">
              “Temukan sahabat kucing impianmu di
              <br /> sini. Kami menyediakan kucing yang <br />
              siap untuk diadopsi. Ayo, selamatkan <br />
              dan rawat kucing ini bersama kami!”
            </p>
          </div>
          <img
            src={HeaderAdopsikucing}
            alt="Deskripsi gambar"
            className="w-[774px] h-[478px]"
          />
        </div>

        <div className="mt-10">
          <h1 className="text-center text-4xl font-bold mb-20 mt-20">
            Temukan Teman Terbaik Kamu
          </h1>
          <div className="flex flex-wrap justify-center gap-20 mx-20">
            {cats.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md m-3 w-80 h-96 transform hover:scale-105 transition-transform flex flex-col justify-between mt-20"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-[320px] h-[250px] object-cover "
                />
                <div className="bg-[#8DD67A] p-4 flex flex-col items-center text-center shadow-xl">
                  <h2 className="text-xl font-bold mb-2">{cat.name}</h2>
                  <p className="mb-2">
                    {cat.age}, {cat.breed}
                  </p>
                  <button
                    onClick={handleClickNavigate}
                    className="bg-[#FA9F42] text-white py-2 px-4 rounded-lg shadow-xl"
                  >
                    Adopt
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
