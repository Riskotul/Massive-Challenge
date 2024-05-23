const ContactSection = () => {
  return (
    <section className="w-[1107px] flex gap-[61px] mt-20">
      <div className="w-[322px] h-[241px] rounded-[20px] shadow-card flex flex-col items-center">
        <div className="w-[189px] h-[110px] rounded-b-[20px] bg-[#FA9F42] flex items-center justify-center">
          <img
            src="/images/ContactPage/contact-telp.png"
            alt=""
            className="w-[53px] h-[46px]"
          />
        </div>
        <h1 className="text-[36px] font-bold mt-3">Hotline</h1>
        <h1 className="text-[24px]">0800-987-6543</h1>
      </div>
      <div className="w-[322px] h-[241px] rounded-[20px] shadow-card flex flex-col items-center">
        <div className="w-[189px] h-[110px] rounded-b-[20px] bg-[#FA9F42] flex items-center justify-center">
          <img
            src="/images/ContactPage/contact-msg.png"
            alt=""
            className="w-[50px] h-[36px]"
          />
        </div>
        <h1 className="text-[36px] font-bold mt-3">Email</h1>
        <h1 className="text-[24px]">heywani@gmail.com</h1>
      </div>
      <div className="w-[322px] h-[241px] rounded-[20px] shadow-card flex flex-col items-center">
        <div className="w-[189px] h-[110px] rounded-b-[20px] bg-[#FA9F42] flex items-center justify-center">
          <img
            src="/images/ContactPage/contact-location.png"
            alt=""
            className="w-[64px] h-[55px]"
          />
        </div>
        <h1 className="text-[36px] font-bold mt-3">Alamat</h1>
        <h1 className="text-[24px]">Pulau Jawa</h1>
      </div>
    </section>
  );
};

export default ContactSection;
