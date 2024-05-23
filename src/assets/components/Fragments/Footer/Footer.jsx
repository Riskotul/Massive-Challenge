import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      {' '}
      <footer className="w-full h-[320px] bg-[#8DD67A] flex justify-center gap-[100px] pt-[52px]">
        <div className="flex flex-col gap-[25px]">
          <div className="w-[138px] h-[65px] rounded-[20px] bg-white flex items-center justify-center">
            <img src="/images/app-logo-m.png" alt="" className="scale-75" />
          </div>
          <p className="w-[374px] font-medium">
            “Bersama Heywani, mari selamatkan dan adopsi hewan yang membutuhkan.
            Setiap tindakan kita memberi harapan baru bagi mereka.”
          </p>
        </div>
        <div className="flex flex-col gap-[14px]">
          <h1 className="text-[24px] font-medium">Kami Melayani</h1>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-[6px] items-center">
              <img
                src="/images/footer-paw-icon.png"
                alt=""
                className="size-[37px]"
              />
              <h1 className="text-[15px] font-medium">Penyelamatan hewan</h1>
            </div>
            <div className="flex gap-[6px] items-center">
              <img
                src="/images/footer-paw-icon.png"
                alt=""
                className="size-[37px]"
              />
              <h1 className="text-[15px] font-medium">Adopsi hewan</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <h1 className="text-[24px] font-medium">Hubungi Kami</h1>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-[6px] items-center">
              <img
                src="/images/footer-location-icon.png"
                alt=""
                className="size-[37px]"
              />
              <h1 className="text-[15px] font-medium">Pulau Jawa</h1>
            </div>
            <div className="flex gap-[6px] items-center">
              <img
                src="/images/footer-telp-icon.png"
                alt=""
                className="size-[37px]"
              />
              <h1 className="text-[15px] font-medium">08123456789</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <h1 className="text-[24px] font-medium">Follow Us</h1>
          <div className="flex gap-[13px] items-center">
            <FontAwesomeIcon icon={faInstagram} className="text-white size-6" />
            <FontAwesomeIcon icon={faTwitter} className="text-white size-6" />
            <FontAwesomeIcon icon={faTiktok} className="text-white size-6" />
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#8DD67A] h-fit pb-4 flex items-center justify-center font-medium">
        Copyright 2024 © Heywani. All rights Reserved.
      </div>
    </>
  );
};

export default Footer;
