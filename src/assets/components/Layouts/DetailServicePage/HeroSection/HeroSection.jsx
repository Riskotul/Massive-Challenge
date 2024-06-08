import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full h-auto bg-[#8DD67A] flex flex-col lg:flex-row gap-6 lg:gap-[100px] px-6 lg:pl-[112px] py-8 mt-20">
      <div className="lg:max-w-[608px] text-center lg:text-left mt-10">
        <p className="text-[26px] lg:text-[33px] font-bold mb-4 lg:mb-8">
          Ayo, adopsi sekarang di Heywani!
        </p>
        <p className="text-[20px] lg:text-[26px] font-medium">
          “Beri mereka kesempatan kedua untuk hidup bahagia. Pilih teman setia Anda dan jadilah bagian dari perubahan.”
        </p>
      </div>
      <img
        src="/images/DetailServicePage/detail-service-hero.png"
        alt="Hero"
        className="w-full lg:w-[698px] h-auto lg:h-[310px] object-cover mt-6 lg:mt-[20px] lg:ml-[340px]"
      />
    </section>
  );
};

export default HeroSection;
