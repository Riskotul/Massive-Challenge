import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";
import BodyDetailSection from "../../Layouts/DetailServicePage/BodyDetailSection/BodyDetailSection";
import HeaderDetailSection from "../../Layouts/DetailServicePage/HeaderDetailSection/HeaderDetailSection";
import HeroSection from "../../Layouts/DetailServicePage/HeroSection/HeroSection";

const DetailServicePage = () => {
  return (
    <>
      {" "}
      <Navbar />
      <main className="flex flex-col items-center w-full mb-[60px]">
        <HeroSection />
        <HeaderDetailSection />
        <BodyDetailSection />
      </main>
      <Footer />
    </>
  );
};

export default DetailServicePage;
