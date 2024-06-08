import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";
import BodyDetailSection from "../../Layouts/DetailServicePage/BodyDetailSection/BodyDetailSection";
import BodyDetailSectionAnjing from "../../Layouts/DetailServicePage/BodyDetailSection/BodyDetailSectionAnjing";
import HeaderDetailSection from "../../Layouts/DetailServicePage/HeaderDetailSection/HeaderDetailSection";
import HeaderDetailSectionAnjing from "../../Layouts/DetailServicePage/HeaderDetailSection/HeaderDetailSectionAnjing";
import HeroSection from "../../Layouts/DetailServicePage/HeroSection/HeroSection";

const DetailServicePageAnjing = () => {
  return (
    <>
      {" "}
      <Navbar />
      <main className="flex flex-col items-center w-full mb-[60px]">
        <HeroSection />
        <HeaderDetailSectionAnjing />
        <BodyDetailSectionAnjing />
      </main>
      <Footer />
    </>
  );
};

export default DetailServicePageAnjing;
