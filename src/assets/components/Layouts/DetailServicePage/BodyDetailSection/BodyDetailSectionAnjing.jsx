import { useNavigate } from "react-router-dom";

const BodyDetailSectionAnjing = () => {
  const navigate = useNavigate();
  return (
    <section className="w-[1220px] mt-[46px] flex flex-col items-center gap-8">
      <p>
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
        className="size-fit px-[61px] py-3 rounded-lg text-white bg-[#FA9F42] text-[24px] font-medium"
      >
        Adopsi
      </button>
    </section>
  );
};

export default BodyDetailSectionAnjing;
