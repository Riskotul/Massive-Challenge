import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";

const AboutPage = () => {
  const headerAbout = "/images/AboutPage/header_about.png";
  const teamImage1 = "/images/AboutPage/Yezika.png";
  const teamImage2 = "/images/AboutPage/eka.png";
  const teamImage3 = "/images/AboutPage/novi.png";
  const teamImage4 = "/images/AboutPage/riskotul.png";
  const teamImage5 = "/images/AboutPage/akmal.png";
  const galleryImage1 = "/images/AboutPage/gallery_1.png";
  const galleryImage2 = "/images/AboutPage/gallery_2.png";
  const galleryImage3 = "/images/AboutPage/gallery_3.png";
  const galleryImage4 = "/images/AboutPage/gallery_4.png";

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-white w-full py-10 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col justify-between items-center gap-10 mt-20">
          <div className="container mx-auto">
            <div className="main-content flex flex-col lg:flex-row items-center gap-10">
              <div className="content flex-1 mt-10 lg:mt-0">
                <h1 className="text-4xl font-bold mb-12">Tentang Kami</h1>
                <p className="text-xl leading-7">
                  Kami berkomitmen untuk menyelamatkan, merawat, dan mencarikan
                  rumah baru bagi hewan-hewan terlantar di Pulau Jawa. Melalui
                  program adopsi yang bertanggung jawab, kami berusaha
                  mengurangi populasi hewan jalanan dan memberikan mereka
                  kesempatan hidup yang lebih baik. Misi kami mencakup
                  penyelamatan dan perawatan hewan terlantar, menghubungkan
                  mereka dengan keluarga yang penuh kasih, serta mengedukasi
                  masyarakat tentang pentingnya adopsi dan perawatan hewan. Kami
                  juga menyediakan layanan sterilisasi dan vaksinasi untuk
                  mengurangi populasi hewan jalanan. Anda bisa membantu dengan
                  mengadopsi hewan, menjadi relawan, atau memberikan donasi.
                  Bersama, kita bisa menciptakan kehidupan yang lebih baik bagi
                  hewan-hewan di Pulau Jawa.
                </p>
              </div>
              <img
                src={headerAbout}
                alt="Misi Kami"
                className="w-full lg:w-[563px] h-auto"
              />
            </div>

            <h1 className="section-title text-3xl md:text-4xl lg:text-4xl font-bold text-center mt-20 mb-16">
              Tim Kami
            </h1>
            <div className="tim-kami flex flex-wrap justify-center">
              <div className="item text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center">
                <div className="image-container w-[200px] h-[200px] overflow-hidden rounded-full mb-4">
                  <img
                    src={teamImage1}
                    alt="Yezika Rachman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-bold">Yezika Rachman</p>
                <span className="text-lg">Product Manager</span>
              </div>
              <div className="item text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center">
                <div className="image-container w-[200px] h-[200px] overflow-hidden rounded-full mb-4">
                  <img
                    src={teamImage2}
                    alt="Eka Kurnia F"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-bold">Eka Kurnia F</p>
                <span className="text-lg">Product Designer</span>
              </div>
              <div className="item text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center">
                <div className="image-container w-[200px] h-[200px] overflow-hidden rounded-full mb-4">
                  <img
                    src={teamImage3}
                    alt="Novi Indah P.S"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-bold">Novi Indah P.S</p>
                <span className="text-lg">Product Designer</span>
              </div>
              <div className="item text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center">
                <div className="image-container w-[200px] h-[200px] overflow-hidden rounded-full mb-4">
                  <img
                    src={teamImage4}
                    alt="Riskotul M"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-bold">Riskotul M</p>
                <span className="text-lg">Programmer</span>
              </div>
              <div className="item text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center">
                <div className="image-container w-[200px] h-[200px] overflow-hidden rounded-full mb-4">
                  <img
                    src={teamImage5}
                    alt="Akhiratul Akmal A"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-bold">Akhiratul Akmal A</p>
                <span className="text-lg">Programmer</span>
              </div>
            </div>

            <h1 className="section-title1 text-4xl font-bold text-center mt-40 mb-20">
              Foto
            </h1>
            <div className="zigzag-container flex flex-wrap justify-center mb-5 gap-5">
              <div className="zigzag-item">
                <img
                  src={galleryImage1}
                  alt="Gambar 1"
                  className="w-full lg:w-[300px] h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
              <div className="zigzag-item">
                <img
                  src={galleryImage2}
                  alt="Gambar 2"
                  className="w-full lg:w-[300px] h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
              <div className="zigzag-item">
                <img
                  src={galleryImage3}
                  alt="Gambar 3"
                  className="w-full lg:w-[300px] h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
              <div className="zigzag-item">
                <img
                  src={galleryImage4}
                  alt="Gambar 4"
                  className="w-full lg:w-[300px] h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
