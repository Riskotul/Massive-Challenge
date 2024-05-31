import Footer from "../../Fragments/Footer/Footer";
import { NavbarLogin } from "../../Fragments/Navbar/Navbar";
import OtherServicesSection from "../../Layouts/ServicesPage/OtherServicesSection/OtherServicesSection";
import ServicesHeroSection from "../../Layouts/ServicesPage/ServicesHeroSection/ServicesHeroSection";

const ServicesPage = () => {
  return (
    <>
      <NavbarLogin />
      <main className="flex flex-col items-center w-full mt-4 mb-4">
        <ServicesHeroSection />
        <OtherServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
