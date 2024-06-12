import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-auto bg-[#8DD67A] flex flex-col lg:flex-row gap-6 lg:gap-[100px] px-6 lg:pl-[112px] pt-20 pb-8">
      <div className="lg:max-w-[608px] text-center lg:text-left mt-10 lg:mt-20">
        <p className="text-[26px] lg:text-[33px] font-bold mb-4 lg:mb-8">
          Ayo, adopsi sekarang di Heywani!
        </p>
        <p className="text-xl lg:text-2xl">
          “Beri mereka kesempatan kedua untuk hidup bahagia. Pilih teman setia
          Anda dan jadilah bagian dari perubahan.”
        </p>
      </div>
      <img
        src="/images/DetailServicePage/detail-service-hero.png"
        alt="Hero"
        className="w-full lg:w-[698px] h-auto lg:h-[310px] object-cover mt-6 lg:mt-20 lg:ml-0"
      />
    </section>
  );
};

export default HeroSection;
