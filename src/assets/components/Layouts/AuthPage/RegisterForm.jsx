import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Text } from "../../Elements/Text/Text";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm({ className }) {
  const [showPassword, setShowPassword] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user", {
        name: fullname,
        email: email,
        password: password,
        confPassword: confirmPassword,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div
      className={`inset-0 z-10 flex w-full max-w-[586px] flex-col gap-[82px] bg-white/10 px-[37px] pt-[37px] backdrop-blur-[6px] ${className}`}
    >
      <Link to="/" className="flex items-center justify-between w-full">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="cursor-pointer size-6 text-primary-800 active:scale-90"
        />
        <img
          src="images/app-logo-m.png"
          alt=""
          className="h-[85px] w-[158px] object-cover"
        />
      </Link>
      <div className="flex w-full flex-col gap-[30px] px-[85px]">
        <Text textType="h2Bold" className="text-white">
          Daftar
        </Text>
        <form onSubmit={handleRegisterClick}>
          <div
            id="login-form"
            className="flex w-[354px] flex-col gap-[10px] px-[5px]"
          >
            <p className="text-[#FF0000] text-center text-sm">{msg}</p>
            <label htmlFor="registerFullname" className="">
              <Text
                textType="subtitle"
                className="mb-0.5 text-primary-50 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Nama Lengkap
              </Text>
              <input
                type="text"
                name="registerFullname"
                id="registerFullname"
                placeholder="Nama Lengkap"
                className="h-[42px] w-full rounded-lg border-[rgb(77,112,108,0.4)] p-3 font-sans font-medium focus:border-primary-700 focus:ring-primary-600"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
              />
            </label>
            <label htmlFor="registerEmail" className="">
              <Text
                textType="subtitle"
                className="mb-0.5 text-primary-50 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Email
              </Text>
              <input
                type="email"
                name="registerEmail"
                id="registerEmail"
                placeholder="Alamat Email"
                className="peer h-[42px] w-full rounded-lg border-[rgb(77,112,108,0.4)] p-3 font-sans font-medium focus:border-primary-700 focus:ring-primary-600 invalid:focus:border-red-700 invalid:focus:ring-red-600"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <div className="ml-0.5 mt-1 hidden w-fit select-none rounded-xl bg-red-600 px-2 py-[1px] text-sm text-white peer-invalid:block">
                Format email salah
              </div>
            </label>
            <label htmlFor="registerPassword" className="">
              <Text
                textType="subtitle"
                className="mb-0.5 text-primary-50 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Kata Sandi
              </Text>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="registerPassword"
                  id="registerPassword"
                  placeholder="Masukkan Kata Sandi"
                  className="h-[42px] w-full rounded-lg border-[rgb(77,112,108,0.4)] p-3 font-sans font-medium focus:border-primary-700 focus:ring-primary-600"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 flex items-center text-sm leading-5 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="h-[15px] w-[22px] text-gray-600 hover:text-gray-500"
                  />
                </button>
              </div>
            </label>
            <label htmlFor="registerPasswordConfirm" className="">
              <Text
                textType="subtitle"
                className="mb-0.5 text-primary-50 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Konfirmasi Kata Sandi
              </Text>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="registerPasswordConfirm"
                  id="registerPasswordConfirm"
                  placeholder="Ulangi Kata Sandi"
                  className="h-[42px] w-full rounded-lg border-[rgb(77,112,108,0.4)] p-3 font-sans font-medium focus:border-primary-700 focus:ring-primary-600"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 flex items-center text-sm leading-5 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="h-[15px] w-[22px] text-gray-600 hover:text-gray-500"
                  />
                </button>
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <button className="flex w-[354px] items-center justify-center rounded-3xl bg-primary-600 py-[10px] text-gray-50 transition duration-300 hover:bg-[#8DD67A] active:scale-95 active:bg-[#8DD67A] mt-6">
              Buat Akun Baru
            </button>
            <Text textType="caption" className="self-center text-white">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="font-bold underline text-Caption hover:text-sky-400 active:text-sky-600"
              >
                Masuk
              </Link>
            </Text>
          </div>
        </form>
      </div>
    </div>
  );
}

RegisterForm.propTypes = {
  className: PropTypes.string,
};

export default RegisterForm;
