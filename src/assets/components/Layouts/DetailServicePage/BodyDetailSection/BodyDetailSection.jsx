import { useNavigate } from "react-router-dom";

const BodyDetailSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-[1320px] mt-12 flex flex-col items-center gap-8 px-4 md:px-8 lg:px-12">
      <p className="text-sm md:text-base lg:text-lg text-justify">
        Lucky (1 Tahun) adalah seekor Kucing Himalaya yang ditelantarkan oleh
        pemiliknya dan ditemukan dalam kondisi yang sangat memprihatinkan,
        dengan salah satu kakinya mengalami luka serius yang bahkan membuatnya
        kehilangan sebagian besar kulit di sekitarnya. Dokter hewan yang
        menanganinya segera menyadari bahwa tindakan cepat diperlukan untuk
        mencegah infeksi yang dapat mengancam nyawanya. Oleh karena itu, mereka
        memutuskan bahwa satu-satunya pilihan yang tersisa adalah melakukan
        amputasi pada kaki yang terluka. Meskipun prosedur ini sulit bagi Lucky,
        semangatnya untuk sembuh dan beradaptasi dengan keadaan baru sungguh
        mengagumkan. <br />
        <br /> Meskipun mengalami cobaan yang begitu besar, Lucky tidak
        menyerah. Dia menunjukkan semangat yang luar biasa dan keinginan yang
        kuat untuk sembuh. Dukungan yang diberikan oleh tim medis dan para
        penyelamat telah membantu Lucky dalam proses pemulihannya. Saat ini,
        Lucky sangat berharap untuk menemukan sebuah rumah yang penuh kasih
        sayang, di mana dia bisa mendapatkan perawatan lanjutan dan cinta yang
        pantas dia dapatkan setelah melalui perjuangan yang begitu besar.
      </p>
      <button
        onClick={() => navigate("/form-adopsi")}
        className="min-w-[200px] w-full md:w-auto px-8 py-3 rounded-[32px] text-white bg-[#FA9F42] text-lg md:text-xl font-semibold"
      >
        Adopsi
      </button>
    </section>
  );
};

export default BodyDetailSection;
