import { useNavigate } from "react-router-dom";

const BodyDetailSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-[1220px] mt-[46px] flex flex-col items-center gap-8">
      <p>
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
        className="size-fit px-[61px] py-3 rounded-lg text-white bg-[#FA9F42] text-[24px] font-medium"
      >
        Adopsi
      </button>
    </section>
  );
};

export default BodyDetailSection;
