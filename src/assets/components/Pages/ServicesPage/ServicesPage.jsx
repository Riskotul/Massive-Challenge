import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";
import OtherServicesSection from "../../Layouts/ServicesPage/OtherServicesSection/OtherServicesSection";
import ServicesHeroSection from "../../Layouts/ServicesPage/ServicesHeroSection/ServicesHeroSection";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full mt-20 mb-20">
        <ServicesHeroSection />
        <OtherServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
