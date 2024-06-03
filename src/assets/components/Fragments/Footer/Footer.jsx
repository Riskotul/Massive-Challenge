import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#8DD67A] flex flex-col md:flex-row justify-center items-center gap-28 py-8 md:py-12 px-6 md:px-24 lg:px-32">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="w-[138px] h-[65px] rounded-[20px] bg-white flex items-center justify-center">
            <img src="/images/app-logo-m.png" alt="" className="w-32 h-auto" />
          </div>
          <p className="text-center md:text-left max-w-[374px] text-sm md:text-base font-medium">
            “Bersama Heywani, mari selamatkan dan adopsi hewan yang membutuhkan.
            Setiap tindakan kita memberi harapan baru bagi mereka.”
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h1 className="text-[24px] font-medium">Kami Melayani</h1>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 items-center">
              <img src="/images/footer-paw-icon.png" alt="" className="w-8 h-auto" />
              <h1 className="text-[15px] font-medium">Penyelamatan hewan</h1>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/images/footer-paw-icon.png" alt="" className="w-8 h-auto" />
              <h1 className="text-[15px] font-medium">Adopsi hewan</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h1 className="text-[24px] font-medium">Hubungi Kami</h1>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 items-center">
              <img src="/images/footer-location-icon.png" alt="" className="w-8 h-auto" />
              <h1 className="text-[15px] font-medium">Pulau Jawa</h1>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/images/footer-telp-icon.png" alt="" className="w-8 h-auto" />
              <h1 className="text-[15px] font-medium">08123456789</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h1 className="text-[24px] font-medium">Follow Us</h1>
          <div className="flex gap-6 items-center">
            <FontAwesomeIcon icon={faInstagram} className="text-white w-6 h-6" />
            <FontAwesomeIcon icon={faTwitter} className="text-white w-6 h-6" />
            <FontAwesomeIcon icon={faTiktok} className="text-white w-6 h-6" />
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#8DD67A] py-2 flex items-center justify-center text-sm font-medium">
        Copyright 2024 © Heywani. All rights Reserved.
      </div>
    </>
  );
};

export default Footer;
