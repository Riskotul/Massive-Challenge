const FormSection = () => {
  return (
    <section className="mt-[49px] flex flex-col gap-[49px] mb-[31px]">
      <h1 className="text-[36px] font-bold">
        Kami Siap Membantu Anda Kirimkan Pesan Kepada Kami!{' '}
      </h1>
      <div className="w-[1113px] h-[670px] rounded-[20px] bg-[#FA9F42] py-[26px] pl-[61px] pr-[47px] flex flex-col gap-5">
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-semibold text-[30px]">Nama</h1>
          <input
            type="text"
            className="w-[1005px] h-[66px] rounded-[20px] py-3 px-6 text-2xl font-medium"
          />
        </div>
        <div className="w-[1005px] flex gap-[47px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-[30px]">No. Handphone</h1>
            <input
              type="text"
              className="w-[483px] h-[66px] rounded-[20px] py-3 px-6 text-2xl font-medium"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-[30px]">Email</h1>
            <input
              type="text"
              className="w-[483px] h-[66px] rounded-[20px] py-3 px-6 text-2xl font-medium"
            />
          </div>
        </div>
        <div className="w-[1005px] flex gap-[47px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-[30px]">Pesan</h1>
            <textarea
              type=""
              className="w-[1005px] h-[221px] rounded-[20px] pt-6 px-6 text-2xl font-medium"
            />
          </div>
        </div>
        <button className="w-[193px] h-[53px] px-[63px] py-2 rounded-[20px] bg-white flex justify-center items-center text-[24px] font-bold self-center">
          Kirim
        </button>
      </div>
    </section>
  );
};

export default FormSection;
