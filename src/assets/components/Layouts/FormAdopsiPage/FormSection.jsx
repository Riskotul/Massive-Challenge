import { useState } from 'react';
import PropTypes from 'prop-types';

const PopUpTerkirim = ({ isPopUpOpen, handlePopUp }) => {
  return (
    <div
      className={
        isPopUpOpen
          ? 'fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm flex'
          : 'fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm hidden'
      }
    >
      {' '}
      <div className="w-[466px] h-[560px] rounded-[20px] bg-white relative border">
        <div className="size-[191px] rounded-full bg-[#8DD67A] absolute -top-[95px] left-[137px] flex justify-center items-center">
          <img src="/images/FormAdopsiPage/done-icon.png" alt="" />
        </div>
        <div className="mt-[137px] w-full flex flex-col items-center gap-4">
          <h1 className="text-[48px] font-bold">Terkirim</h1>
          <div className="flex flex-col">
            <p className="text-[20px] font-medium text-center w-[330px]">
              Terima kasih telah memberi mereka kesempatan kedua untuk hidup
              bahagia <br />
              <br />
              Untuk informasi selanjutnya, akan kami informasikan lebih lanjut
              melalui email
            </p>
          </div>
          <button
            onClick={handlePopUp}
            className="size-fit px-[52px] py-3 bg-[#FA9F42] rounded-lg text-white text-[24px] font-medium"
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
      <section className="mt-[110px] w-[1096px] rounded-[20px] bg-[#FA9F42] h-fit pt-[26px] pb-[72px] shadow-card">
        <form className="flex flex-col w-full items-center px-[38px]">
          <div
            id="header-form"
            className="flex flex-col w-full pt-6 pb-6 border-y-[4px] px-[30px]"
          >
            <h1 className="font-bold text-[24px]">Data Diri</h1>
          </div>
          <div className="w-[974px] grid grid-cols-2 gap-x-[92px] gap-y-6 mt-6 mb-[50px]">
            <div className="flex flex-col gap-[18px]">
              <label htmlFor="fullname" className="text-[20px] font-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="fullname"
                className="w-[441px] h-[57px] rounded-[10px] bg-white px-4    "
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <label htmlFor="address" className="text-[20px] font-medium">
                Alamat Lengkap
              </label>
              <input
                type="text"
                id="address"
                className="w-[441px] h-[57px] rounded-[10px] bg-white px-4    "
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <label htmlFor="birthdate" className="text-[20px] font-medium">
                Tanggal Lahir
              </label>
              <input
                type="text"
                id="birthdate"
                className="w-[441px] h-[57px] rounded-[10px] bg-white px-4    "
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <label htmlFor="map" className="text-[20px] font-medium">
                Tautan Google Map Alamat
              </label>
              <input
                type="text"
                id="map"
                className="w-[441px] h-[57px] rounded-[10px] bg-white px-4    "
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <label htmlFor="email" className="text-[20px] font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-[441px] h-[57px] rounded-[10px] bg-white px-4    "
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <label htmlFor="animal-name" className="text-[20px] font-medium">
                Siapa nama hewan yang Anda adopsi?
              </label>
              <input
                type="text"
                id="animal-name"
                className="w-[441px] h-[57px] rounded-[10px] bg-white px-4    "
              />
            </div>
          </div>
          <div
            id="header-form"
            className="flex flex-col w-full pt-6 pb-6 border-y-[4px] px-[30px]"
          >
            <h1 className="font-bold text-[24px]">Pertanyaan Personal</h1>
          </div>
          <div id="section1" className="w-[974px] flex flex-col mt-6">
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
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="yes"
                    className="block size-5"
                  />
                  <label htmlFor="yes" className="text-[20px]">
                    Ya
                  </label>
                </div>
                <div className="flex gap-4 items-center mt-[14px]">
                  <input
                    type="radio"
                    name="radio1"
                    id="no"
                    className="block size-5 "
                  />
                  <label htmlFor="no" className="text-[20px]">
                    Tidak
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div id="section2" className="w-[974px] flex flex-col mt-6">
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
          <div id="section3" className="w-[974px] flex flex-col mt-6">
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Jika Anda pernah atau saat ini memelihara kucing/anjing, apakah
                mereka sudah disteril (tindakan bedah untuk mengangkat ovarium
                betina atau kebiri buat jantan untuk mencegah kehamilan yang
                tidak diinginkan)?
              </h1>
              <div className="">
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="pilihan1"
                    id="sudah1"
                    className="block size-5"
                  />
                  <label htmlFor="sudah1" className="text-[20px]">
                    Sudah
                  </label>
                </div>
                <div className="flex gap-4 items-center mt-[14px]">
                  <input
                    type="radio"
                    name="pilihan1"
                    id="belum1"
                    className="block size-5 "
                  />
                  <label htmlFor="belum1" className="text-[20px]">
                    Belum
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] mt-6">
              <h1 className="text-[20px] font-medium">
                Jika Anda pernah atau saat ini memelihara kucing/anjing apakah
                mereka sudah pernah divaksin?
              </h1>
              <div className="">
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="pilihan2"
                    id="sudah2"
                    className="block size-5"
                  />
                  <label htmlFor="sudah2" className="text-[20px]">
                    Sudah
                  </label>
                </div>
                <div className="flex gap-4 items-center mt-[14px]">
                  <input
                    type="radio"
                    name="pilihan2"
                    id="belum2"
                    className="block size-5 "
                  />
                  <label htmlFor="belum2" className="text-[20px]">
                    Belum
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] mt-6">
              <h1 className="text-[20px] font-medium">
                Apakah Anda berencana memberi vaksin untuk kucing/anjing yang
                akan Anda adopsi?
              </h1>
              <div className="">
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="pilihan3"
                    id="sudah3"
                    className="block size-5"
                  />
                  <label htmlFor="sudah3" className="text-[20px]">
                    Sudah
                  </label>
                </div>
                <div className="flex gap-4 items-center mt-[14px]">
                  <input
                    type="radio"
                    name="pilihan3"
                    id="belum3"
                    className="block size-5 "
                  />
                  <label htmlFor="belum3" className="text-[20px]">
                    Belum
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div id="section4" className="w-[974px] flex flex-col mt-6 gap-6">
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Di mana hewan akan tinggal sehari-hari? Dan dimana hewan akan
                tidur waktu malam? Jelaskan!
              </h1>
              <textarea
                type="text"
                className="w-full rounded-[10px] bg-white h-[114px] p-4"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Makanan apa yang rencananya akan Anda berikan untuk hewan yang
                Anda adopsi?
              </h1>
              <textarea
                type="text"
                className="w-full rounded-[10px] bg-white h-[114px] p-4"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Selain makanan utama apa yang rencananya Anda berikan?
                *[suplemen, snack, dsb]
              </h1>
              <textarea
                type="text"
                className="w-full rounded-[10px] bg-white h-[114px] p-4"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Untuk anjing, berapa sering Anda akan membawa anjing yang akan
                Anda adopsi untuk jalan-jalan/ excercise?
              </h1>
              <textarea
                type="text"
                className="w-full rounded-[10px] bg-white h-[114px] p-4"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Apa yang akan Anda lakukan jika hewan yang Anda adopsi memiliki
                masalah perilaku seperti berisik, merusak furniture, buang air
                sembarangan, dominasi pada hewan lain atau bermasalah dengan
                anggota keluarga Anda yang lain?
              </h1>
              <textarea
                type="text"
                className="w-full rounded-[10px] bg-white h-[114px] p-4"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[20px] font-medium">
                Apa yang akan Anda lakukan jika hewan yang Anda adopsi sakit dan
                membutuhkan biaya yang tidak sedikit?
              </h1>
              <textarea
                type="text"
                className="w-full rounded-[10px] bg-white h-[114px] p-4"
              />
            </div>
          </div>
          <div
            id="header-form"
            className="flex flex-col w-full pt-6 pb-6 border-y-[4px] px-[30px] mt-[50px]"
          >
            <h1 className="font-bold text-[24px]">
              Catatan Tentang Kesehatan Kucing/Anjing
            </h1>
          </div>
          <div className="w-[974px] flex flex-col mt-6">
            <p className="text-[20px] text-justify">
              Kami tidak bisa menjamin kesehatan hewan yang akan Anda adopsi,
              tetapi kami akan jujur tentang riwayat penyakit mereka dan
              menyediakan catatan medis. Adopsi hewan kami disertai dengan
              rekomendasi untuk pemeriksaan hewan oleh dokter. Meskipun kami
              percaya hewan kami dalam keadaan sehat, mereka mungkin terpapar
              penyakit jalanan. Jika hewan menunjukkan gejala penyakit, harap
              segera konsultasikan dengan dokter dan beri tahu kami. Kami
              menawarkan masa percobaan adopsi selama dua minggu. Jika penyakit
              yang sudah ada muncul selama masa percobaan, kami akan menanggung
              biayanya. Biaya untuk perawatan baru akan menjadi tanggung jawab
              Anda.
            </p>
            <div className="flex flex-col gap-[18px] mt-6">
              <h1 className="text-[20px] font-medium text-justify">
                Saya telah membaca, mengerti, dan menyetujui Catatan tentang
                Kesehatan Kucing/Anjing diatas
              </h1>
              <div className="">
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="pilihan4"
                    id="ya2"
                    className="block size-5"
                  />
                  <label htmlFor="ya2" className="text-[20px]">
                    Ya
                  </label>
                </div>
                <div className="flex gap-4 items-center mt-[14px]">
                  <input
                    type="radio"
                    name="pilihan4"
                    id="tidak2"
                    className="block size-5 "
                  />
                  <label htmlFor="tidak2" className="text-[20px]">
                    Tidak
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            id="header-form"
            className="flex flex-col w-full pt-6 pb-6 border-y-[4px] px-[30px] mt-[50px]"
          >
            <h1 className="font-bold text-[24px]">Kontrak Hukum</h1>
          </div>
          <div className="w-[974px] flex flex-col mt-6">
            <ol className="list-decimal text-[20px] ml-6">
              <li className="text-justify">
                Pemindahan Kepemilikan: Pemilik setuju untuk mentransfer
                kepemilikan hewan kepada Pengadopsi dengan persetujuan bahwa
                Pengadopsi akan bertanggung jawab atas perawatan dan
                kesejahteraan hewan tersebut.
              </li>
              <li className="text-justify">
                Perawatan: Pengadopsi setuju untuk memberikan perawatan yang
                baik dan kasih sayang kepada hewan, termasuk pemberian makan,
                minum, perawatan medis, dan perlindungan.
              </li>
              <li className="text-justify">
                Kesejahteraan: Pengadopsi akan memastikan bahwa hewan tinggal di
                lingkungan yang aman dan tidak terisolasi.
              </li>
              <li className="text-justify">
                Kesehatan: Pengadopsi setuju untuk membawa hewan ke dokter hewan
                secara teratur dan memberikan vaksinasi yang diperlukan.
              </li>
              <li className="text-justify">
                Tanggung Jawab: Pengadopsi bertanggung jawab penuh atas hewan
                dan setuju untuk tidak menyerahkan, menjual, atau meninggalkan
                hewan tersebut tanpa persetujuan dari Pemilik.
              </li>
              <li className="text-justify">
                Pemutusan Kontrak: Pemilik berhak untuk membatalkan kontrak dan
                mengambil kembali hewan jika Pengadopsi melanggar ketentuan
                kontrak atau tidak mampu lagi merawat hewan tersebut.
              </li>
            </ol>
            <div className="flex flex-col gap-[18px] mt-6">
              <h1 className="text-[20px] font-medium text-justify">
                Saya mengakui bahwa saya telah membaca dan memahami
                pemberitahuan kontrak di atas
              </h1>
              <div className="">
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="pilihan5"
                    id="ya3"
                    className="block size-5"
                  />
                  <label htmlFor="ya3" className="text-[20px]">
                    Ya
                  </label>
                </div>
                <div className="flex gap-4 items-center mt-[14px]">
                  <input
                    type="radio"
                    name="pilihan5"
                    id="tidak3"
                    className="block size-5 "
                  />
                  <label htmlFor="tidak3" className="text-[20px]">
                    Tidak
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>{' '}
      <button
        onClick={handlePopUp}
        className="rounded-lg size-fit py-3 px-[72px] text-white bg-[#FA9F42] text-[24px] font-medium mt-7 active:scale-90 transition-all duration-150"
      >
        Kirim
      </button>
    </>
  );
};

export default FormSection;
