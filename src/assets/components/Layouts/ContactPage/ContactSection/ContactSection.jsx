const ContactSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mt-20 px-4 ">
      <div className="w-full lg:w-[322px] h-[241px] rounded-[20px] shadow-card flex flex-col items-center">
        <div className="w-full lg:w-[189px] h-[110px] rounded-b-[20px] bg-[#FA9F42] flex items-center justify-center">
          <img
            src="/images/ContactPage/contact-telp.png"
            alt=""
            className="w-[70px] h-[70px]"
          />
        </div>
        <h1 className="text-[24px] lg:text-[36px] font-bold mt-3">Hotline</h1>
        <h1 className="text-[18px] lg:text-[24px]">0800-987-6543</h1>
      </div>
      <div className="w-full lg:w-[322px] h-[241px] rounded-[20px] shadow-card flex flex-col items-center">
        <div className="w-full lg:w-[189px] h-[110px] rounded-b-[20px] bg-[#FA9F42] flex items-center justify-center">
          <img
            src="/images/ContactPage/contact-msg.png"
            alt=""
            className="w-[53px] h-[43px]"
          />
        </div>
        <h1 className="text-[24px] lg:text-[36px] font-bold mt-3">Email</h1>
        <h1 className="text-[18px] lg:text-[24px]">heywani@gmail.com</h1>
      </div>
      <div className="w-full lg:w-[322px] h-[241px] rounded-[20px] shadow-card flex flex-col items-center">
        <div className="w-full lg:w-[189px] h-[110px] rounded-b-[20px] bg-[#FA9F42] flex items-center justify-center">
          <img
            src="/images/ContactPage/contact-location.png"
            alt=""
            className="w-[58px] h-[57px]"
          />
        </div>
        <h1 className="text-[24px] lg:text-[36px] font-bold mt-3">Alamat</h1>
        <h1 className="text-[18px] lg:text-[24px]">Pulau Jawa</h1>
      </div>
    </section>
  );
};

export default ContactSection;
