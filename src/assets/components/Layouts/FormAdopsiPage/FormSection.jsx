import React, { useState } from "react";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

const PopUpTerkirim = ({ isPopUpOpen, handlePopUp }) => {
  return (
    <div
      className={
        isPopUpOpen
          ? "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm flex"
          : "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm hidden"
      }
    >
      <div className="w-[90%] max-w-[500px] h-[560px] rounded-[20px] bg-white relative border">
        <div className="w-[191px] h-[191px] rounded-full bg-[#8DD67A] absolute -top-[95px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <img src="/images/ContactPage/done-icon.png" alt="" />
        </div>
        <div className="mt-[137px] w-full flex flex-col items-center gap-4">
          <h1 className="text-[36px] lg:text-[48px] font-bold">
            Terima Kasih!
          </h1>
          <div className="flex flex-col px-4">
            <p className="text-[18px] lg:text-[20px] font-medium text-center mt-10">
              Terima kasih telah memberi mereka kesempatan kedua untuk hidup
              bahagia.
            </p>
            <p className="text-[18px] lg:text-[20px] font-medium text-center mt-5">
              Untuk informasi selanjutnya, akan kami informasikan lebih lanjut
              melalui email
            </p>
          </div>
          <button
            onClick={handlePopUp}
            className="size-fit px-[40px] lg:px-[52px] py-3 bg-[#FA9F42] rounded-lg text-white text-[20px] lg:text-[24px] font-medium mt-10"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

PopUpTerkirim.propTypes = {
  isPopUpOpen: PropTypes.bool.isRequired,
  handlePopUp: PropTypes.func.isRequired,
};

const FormSection = () => {
  const [isPopOpen, setIsPopOpen] = useState(false);

  const handlePopUp = () => {
    setIsPopOpen(!isPopOpen);
  };

  return (
    <>
      <PopUpTerkirim isPopUpOpen={isPopOpen} handlePopUp={handlePopUp} />
      <section className="mt-[110px] w-full lg:w-[1096px] rounded-[20px] bg-[#FA9F42] h-fit pt-[26px] pb-[72px] shadow-card mx-auto">
        <form className="flex flex-col w-full items-center px-4 lg:px-[38px]">
          <div
            id="header-form"
            className="flex flex-col w-full pt-6 pb-6 border-y-[4px] px-4 lg:px-[30px]"
          >
            <h1 className="font-bold text-[24px]">Data Diri</h1>
          </div>
          <div className="w-full lg:w-[974px] grid grid-cols-1 lg:grid-cols-2 gap-x-[92px] gap-y-6 mt-6 mb-[50px]">
            {[
              { label: "Nama Lengkap", id: "fullname" },
              { label: "Alamat Lengkap", id: "address" },
              { label: "Tanggal Lahir", id: "birthdate" },
              { label: "Tautan Google Map Alamat", id: "map" },
              { label: "Email", id: "email" },
              {
                label: "Siapa nama hewan yang Anda adopsi?",
                id: "animal-name",
              },
            ].map(({ label, id }) => (
              <div key={id} className="flex flex-col gap-[18px]">
                <label htmlFor={id} className="text-[20px] font-medium">
                  {label}
                </label>
                <input
                  type="text"
                  id={id}
                  className="w-full lg:w-[441px] h-[57px] rounded-[10px] bg-white px-4"
                />
              </div>
            ))}
          </div>
          <div
            id="header-form"
            className="flex flex-col w-full pt-6 pb-6 border-y-[4px] px-4 lg:px-[30px]"
          >
            <h1 className="font-bold text-[24px]">Pertanyaan Personal</h1>
          </div>
          <div id="section1" className="w-full lg:w-[974px] flex flex-col mt-6">
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Mohon jelaskan alasan mengapa Anda mau mengadopsi hewan
              </h1>
              <textarea
                type="text"
                className="w-full rounded-[10px] bg-white h-[114px] p-4"
              />
            </div>
            <div className="flex flex-col mt-6">
              <h1 className="text-[20px] font-medium">
                Apakah Anda pernah memelihara kucing/anjing sebelumnya?
              </h1>
              <div className="mt-[18px]">
                {[
                  { id: "yes", label: "Ya" },
                  { id: "no", label: "Tidak" },
                ].map(({ id, label }) => (
                  <div key={id} className="flex gap-4 items-center mt-[14px]">
                    <input
                      type="radio"
                      name="radio1"
                      id={id}
                      className="block size-5"
                    />
                    <label htmlFor={id} className="text-[20px]">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="section2" className="w-full lg:w-[974px] flex flex-col mt-6">
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Jika Anda menjawab ya dan hewan tersebut tidak lagi dirawat oleh
                Anda, ceritakan alasan mengapa kucing/anjing tersebut tidak lagi
                bersama Anda saat ini sampai sekarang!
              </h1>
              <textarea
                type="text"
                className="w-full rounded-[10px] bg-white h-[114px] p-4"
              />
            </div>
          </div>
          <div id="section3" className="w-full lg:w-[974px] flex flex-col mt-6">
            {[
              {
                title:
                  "Jika Anda pernah atau saat ini memelihara kucing/anjing, apakah mereka sudah disteril (tindakan bedah untuk mengangkat ovarium betina atau kebiri buat jantan untuk mencegah kehamilan yang tidak diinginkan)?",
                name: "pilihan1",
                options: [
                  { id: "sudah1", label: "Sudah" },
                  { id: "belum1", label: "Belum" },
                ],
              },
              {
                title:
                  "Jika Anda pernah atau saat ini memelihara kucing/anjing apakah mereka sudah pernah divaksin?",
                name: "pilihan2",
                options: [
                  { id: "sudah2", label: "Sudah" },
                  { id: "belum2", label: "Belum" },
                ],
              },
              {
                title:
                  "Apakah Anda berencana memberi vaksin untuk kucing/anjing yang akan Anda adopsi?",
                name: "pilihan3",
                options: [
                  { id: "sudah3", label: "Sudah" },
                  { id: "belum3", label: "Belum" },
                ],
              },
            ].map(({ title, name, options }) => (
              <div key={name} className="flex flex-col gap-[18px] mt-6">
                <h1 className="text-[20px] font-medium">{title}</h1>
                <div>
                  {options.map(({ id, label }) => (
                    <div key={id} className="flex gap-4 items-center mt-[14px]">
                      <input
                        type="radio"
                        name={name}
                        id={id}
                        className="block size-5"
                      />
                      <label htmlFor={id} className="text-[20px]">
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            id="section4"
            className="w-full lg:w-[974px] flex flex-col mt-6 gap-6"
          >
            {[
              {
                label:
                  "Di mana hewan akan tinggal sehari-hari? Dan dimana hewan akan tidur waktu malam? Jelaskan!",
              },
              {
                label:
                  "Makanan apa yang rencananya akan Anda berikan untuk hewan yang Anda adopsi?",
              },
              {
                label:
                  "Selain makanan utama apa yang rencananya Anda berikan? *[suplemen, snack, dsb]",
              },
              {
                label:
                  "Untuk anjing, berapa sering Anda akan membawa anjing yang akan Anda adopsi untuk jalan-jalan/ excercise?",
              },
              {
                label:
                  "Apa yang akan Anda lakukan jika hewan yang Anda adopsi memiliki masalah perilaku seperti berisik, merusak furniture, buang air sembarangan, dominasi pada hewan lain atau bermasalah dengan anggota keluarga Anda yang lain?",
              },
              {
                label:
                  "Apa yang akan Anda lakukan jika hewan yang Anda adopsi sakit dan membutuhkan biaya yang tidak sedikit?",
              },
            ].map(({ label }) => (
              <div key={label} className="flex flex-col gap-[18px]">
                <h1 className="text-[20px] font-medium">{label}</h1>
                <textarea
                  type="text"
                  className="w-full rounded-[10px] bg-white h-[114px] p-4"
                />
              </div>
            ))}
          </div>
          <div
            id="header-form"
            className="flex flex-col w-full pt-6 pb-6 border-y-[4px] px-4 lg:px-[30px] mt-6 mb-[50px]"
          >
            <h1 className="font-bold text-[24px]">
              Catatan Tentang Kesehatan Kucing/Anjing
            </h1>
          </div>
          <div
            id="section1"
            className="w-full lg:w-[974px] flex flex-col mt-6 "
          >
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-reguler  text-justify ">
                Kami tidak bisa menjamin kesehatan hewan yang akan Anda adopsi,
                tetapi kami akan jujur tentang riwayat penyakit mereka dan
                menyediakan catatan medis. Adopsi hewan kami disertai dengan
                rekomendasi untuk pemeriksaan hewan oleh dokter. Meskipun kami
                percaya hewan kami dalam keadaan sehat, mereka mungkin terpapar
                penyakit jalanan. Jika hewan menunjukkan gejala penyakit, harap
                segera konsultasikan dengan dokter dan beri tahu kami. Kami
                menawarkan masa percobaan adopsi selama dua minggu. Jika
                penyakit yang sudah ada muncul selama masa percobaan, kami akan
                menanggung biayanya. Biaya untuk perawatan baru akan menjadi
                tanggung jawab Anda.
              </h1>
            </div>
            <div className="flex flex-col mt-6">
              <h1 className="text-[20px] font-medium">
                Saya telah membaca, mengerti, dan menyetujui Catatan tentang
                Kesehatan Kucing/Anjing diatas
              </h1>
              <div className="mt-[18px]">
                {[
                  { id: "yes", label: "Ya" },
                  { id: "no", label: "Tidak" },
                ].map(({ id, label }) => (
                  <div key={id} className="flex gap-4 items-center mt-[14px]">
                    <input
                      type="radio"
                      name="radio1"
                      id={id}
                      className="block size-5"
                    />
                    <label htmlFor={id} className="text-[20px]">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            id="header-form"
            className="flex flex-col w-full pt-6 pb-6 border-y-[4px] px-4 lg:px-[30px] mt-6 mb-[50px]"
          >
            <h1 className="font-bold text-[24px]">Kontrak Hukum</h1>
          </div>
          <div
            id="section1"
            className="w-full lg:w-[974px] flex flex-col mt-6 teks-justified"
          >
            <div className="flex flex-col gap-4 px-4 lg:px-8">
              <h1 className="text-[20px] font-reguler">
                <ol className="list-decimal list-inside text-justify space-y-2">
                  <li>
                    Pemindahan Kepemilikan: Pemilik setuju untuk mentransfer
                    kepemilikan hewan kepada Pengadopsi dengan persetujuan bahwa
                    Pengadopsi akan bertanggung jawab atas perawatan dan
                    kesejahteraan hewan tersebut.
                  </li>
                  <li>
                    Perawatan: Pengadopsi setuju untuk memberikan perawatan yang
                    baik dan kasih sayang kepada hewan, termasuk pemberian
                    makan, minum, perawatan medis, dan perlindungan.
                  </li>
                  <li>
                    Kesejahteraan: Pengadopsi akan memastikan bahwa hewan
                    tinggal di lingkungan yang aman dan tidak terisolasi.
                  </li>
                  <li>
                    Kesehatan: Pengadopsi setuju untuk membawa hewan ke dokter
                    hewan secara teratur dan memberikan vaksinasi yang
                    diperlukan.
                  </li>
                  <li>
                    Tanggung Jawab: Pengadopsi bertanggung jawab penuh atas
                    hewan dan setuju untuk tidak menyerahkan, menjual, atau
                    meninggalkan hewan tersebut tanpa persetujuan dari Pemilik.
                  </li>
                  <li>
                    Pemutusan Kontrak: Pemilik berhak untuk membatalkan kontrak
                    dan mengambil kembali hewan jika Pengadopsi melanggar
                    ketentuan kontrak atau tidak mampu lagi merawat hewan
                    tersebut.
                  </li>
                </ol>
              </h1>
            </div>
            <div className="flex flex-col mt-6">
              <h1 className="text-[20px] font-medium">
                Saya mengakui bahwa saya telah membaca dan memahami
                pemberitahuan kontrak di atas
              </h1>
              <div className="mt-[18px]">
                {[
                  { id: "yes", label: "Ya" },
                  { id: "no", label: "Tidak" },
                ].map(({ id, label }) => (
                  <div key={id} className="flex gap-4 items-center mt-[14px]">
                    <input
                      type="radio"
                      name="radio1"
                      id={id}
                      className="block size-5"
                    />
                    <label htmlFor={id} className="text-[20px]">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </section>
      <button
        type="submit"
        onClick={handlePopUp}
        className="size-fit px-[40px] lg:px-[52px] py-3 bg-[#FA9F42] rounded-lg text-white text-[20px] lg:text-[24px] font-medium mt-10 mb-10"
      >
        Kirim
      </button>
    </>
  );
};

export default FormSection;
