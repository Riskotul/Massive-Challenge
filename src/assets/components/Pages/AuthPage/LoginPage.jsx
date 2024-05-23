import LoginForm from '../../Layouts/AuthPage/LoginForm';
import { Text } from '../../Elements/Text/Text';

function LoginPage() {
  const bgImage = 'images/AuthPage/login-bg-img.png';

  return (
    <div
      id="main-content"
      className="relative flex size-full h-svh justify-center gap-[132px] bg-cover bg-top"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute z-[1] size-full bg-gradient-to-b from-[rgb(61,83,80,0.6)] to-[#1F2C2A] opacity-60"></div>
      <LoginForm />
      <div className="z-10 flex h-full w-[507px] flex-col justify-end gap-[15px] pb-[232px] text-gray-50">
        <Text className="text-xl font-normal ">Selamat Datang di Heywani</Text>
        <Text className="font-poppins text-[30px] font-bold">
          Terima kasih telah mendukung kesejahteraan hewan.
        </Text>
        <Text className="text-xl font-normal ">
          Masuk untuk menjelajahi hewan-hewan yang siap untuk diadopsi dan
          menjadi bagian dari keluarga Anda.
        </Text>
      </div>
    </div>
  );
}

export default LoginPage;
