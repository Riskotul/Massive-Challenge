import Footer from '../../Fragments/Footer/Footer';
import { NavbarLogin } from '../../Fragments/Navbar/Navbar';
import ContactSection from '../../Layouts/ContactPage/ContactSection/ContactSection';
import FormSection from '../../Layouts/ContactPage/FormSection/FormSection';
import HeroSection from '../../Layouts/ContactPage/HeroSection/HeroSection';

const ContactPage = () => {
  return (
    <>
      <NavbarLogin />
      <main className="flex flex-col items-center">
        <HeroSection />
        <ContactSection />
        <FormSection />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
