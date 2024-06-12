const HeroSection = () => {
  return (
    <section className="w-full h-auto lg:h-[433px] bg-[#8DD67A] flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 text-black px-4 lg:px-0 py-8 lg:py-0 mt-20">
      <div className="flex flex-col gap-7 text-center lg:text-left max-w-full lg:max-w-[548px]">
        <h1 className="text-2xl lg:text-[36px] font-bold mt-0 lg:mt-[64px]">
          Kontak Kami
        </h1>
        <p className="text-base lg:text-2xl">
          Kami siap membantu anda dengan segala pertanyaan mengenai adopsi hewan
          dan program kami. Jika anda ingin mengadopsi hewan, menjadi relawan
          atau mendukung misi kami, jangan ragu untuk menghubungi kami. Kami
          akan dengan senang hati membantu anda.
        </p>
      </div>
      <img
        src="/images/ContactPage/hero-contact.png"
        alt="Hero Contact"
        className="w-full lg:w-[600px] h-auto lg:h-[350px] mt-4 lg:mt-0"
      />
    </section>
  );
};

export default HeroSection;
