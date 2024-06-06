import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";
import HeroSection from "../../Layouts/DetailServicePage/HeroSection/HeroSection";
import FormSection from "../../Layouts/FormAdopsiPage/FormSection";

const FormAdopsiPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <FormSection />
      </main>
      <Footer />
    </>
  );
};

export default FormAdopsiPage;
