import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";
import DonationFormSection from "../../Layouts/DonationPage/DonationFormSection/DonationFormSection";
import HeaderSection from "../../Layouts/DonationPage/HeaderSection/HeaderSection";

const DonationPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full mt-[56px] mb-[46px]">
        <HeaderSection />
        <DonationFormSection />
      </main>
      <Footer />
    </>
  );
};

export default DonationPage;
