import { useNavigate } from "react-router-dom";

const BodyDetailSectionAnjing = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-[1320px] mt-12 flex flex-col items-center gap-8 px-4 md:px-8 lg:px-12">
      <p className="text-sm md:text-base lg:text-lg text-justify">
        Galtier (6 Bulan) adalah seekor anjing yang memiliki keterbatasan dalam
        melihat. Saat ditemukan, dia terlihat sangat takut dan sulit untuk
        mempercayai manusia, sering kali terlihat bingung dan cenderung pendiam.
        Namun, setelah beberapa waktu berlalu dan dia mulai beradaptasi dengan
        lingkungan barunya, perubahan luar biasa terjadi. Galtier mulai merasa
        nyaman dengan kehadiran teman-temannya dan menunjukkan sifat yang lembut
        dan manja. Sekarang, dia tidak hanya menjadi bagian dari kelompok,
        tetapi juga menjadi sahabat yang setia bagi siapapun yang memberinya
        cinta dan perhatian.
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

export default BodyDetailSectionAnjing;
