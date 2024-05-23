const HeroSection = () => {
  return (
    <section className="w-full h-[433px] bg-[#8DD67A] flex justify-center gap-[50px] text-black">
      <div className="flex flex-col gap-7">
        <h1 className="text-[36px] font-bold mt-[64px]">Kontak Kami</h1>
        <p className="text-2xl max-w-[548px]">
          Kami siap membantu anda dengan segala pertanyaan mengenai adopsi hewan
          dan program kami. Jika anda ingin mengadopsi hewan,menjadi relawan
          atau mendukung misi kami, jangan ragu untuk menghubungi kami. Kami
          akan dengan senang hati membantu anda{' '}
        </p>
      </div>
      <img
        src="/images/ContactPage/hero-contact.png"
        alt=""
        className="w-[655px] h-[397px] mt-9"
      />
    </section>
  );
};

export default HeroSection;
