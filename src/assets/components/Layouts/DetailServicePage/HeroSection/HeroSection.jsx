const HeroSection = () => {
  return (
    <section className="w-full h-[424px] bg-[#8DD67A] flex gap-[22px] pl-[112px]">
      <p className="max-w-[608px] text-[26px] font-medium mt-[110px]">
        <p className="text-[33px] font-bold mb-8">
          Ayo, adopsi sekarang di Heywani!
        </p>
        “Beri mereka kesempatan kedua untuk hidup bahagia. Pilih teman setia
        Anda dan jadilah bagian dari perubahan. “
      </p>
      <img
        src="/images/DetailServicePage/detail-service-hero.png"
        alt=""
        className="w-[698px] h-[310px] object-cover mt-[38px]"
      />
    </section>
  );
};

export default HeroSection;
