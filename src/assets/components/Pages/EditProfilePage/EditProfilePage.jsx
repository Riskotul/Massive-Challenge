import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";

const handleLogout = async (navigate, setMsg) => {
  try {
    await axios.delete("http://localhost:5000/logout");
    localStorage.clear();
    navigate("/home");
  } catch (error) {
    if (error.response) {
      setMsg(error.response.data.msg);
    }
  }
};

const PopUpTerkirim = ({ isPopUpOpen, handlePopUp, handleLogout }) => {
  return (
    <div
      className={
        isPopUpOpen
          ? "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm flex"
          : "fixed inset-0 z-[60] items-center justify-center backdrop-filter backdrop-brightness-[.7] backdrop-blur-sm hidden"
      }
    >
      <div className="w-[90%] max-w-[400px] h-[480px] rounded-[20px] bg-white relative border">
        <div className="w-[180px] h-[180px] rounded-full bg-[#FA4242] absolute -top-[95px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <img src="/images/ProfilePage/!.png" alt="" />
        </div>
        <div className="mt-[120px] w-full flex flex-col items-center gap-4">
          <h1 className="text-[36px] lg:text-[48px] font-bold">Perhatian</h1>
          <div className="flex flex-col px-4">
            <p className="text-[18px] lg:text-[20px] font-medium text-center mt-2">
              Apakah anda yakin ingin keluar!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="size-fit px-[40px] lg:px-[52px] py-3 bg-[#FA4242] rounded-lg text-white text-[20px] lg:text-[24px] font-medium mt-8"
          >
            Keluar
          </button>
          <button
            onClick={handlePopUp}
            className="size-fit px-[30px] lg:px-[41px] py-3 bg-[#FA9F42] rounded-lg text-white text-[20px] lg:text-[24px] font-medium"
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
  handleLogout: PropTypes.func.isRequired,
};

const ProfilePage = () => {
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const profilePicture = "/images/ProfilePage/foto_profil.png";
  const [profileImage, setProfilImage] = useState(profilePicture);

  const handlePopUp = () => {
    setIsPopOpen(!isPopOpen);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isToken, setToken] = useState(false);

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  const refreshToken = () => {
    try {
      const tokenStorage = localStorage.getItem("token");
      if (tokenStorage) {
        setToken(true);
      } else {
        setToken(false);
      }
      const decoded = parseJwt(tokenStorage);
      setName(decoded.name);
      setEmail(decoded.email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PopUpTerkirim
        isPopUpOpen={isPopOpen}
        handlePopUp={handlePopUp}
        handleLogout={() => handleLogout(navigate, setMsg)}
      />
      <Navbar />
      <div className="py-28">
        <div className="bg-white rounded-lg shadow-lg p-8 mt-6 max-w-7xl w-full mx-auto">
          <div className="flex items-center border border-black rounded-lg p-4 mb-8 relative gap-12">
            <input
              type="file"
              id="profile-picture-input"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
            <img
              src={profileImage}
              alt="Profile"
              className="w-36 h-36 rounded-full cursor-pointer object-cover"
              onClick={() =>
                document.getElementById("profile-picture-input").click()
              }
            />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">Hai</h2>
              <p className="text-black text-xl font-bold">{name}</p>
            </div>
          </div>
          <div className="border border-black rounded-lg p-8 relative gap-12">
            <h3 className="text-xl font-semibold mb-6">Informasi Pribadi</h3>
            <button className="bg-[#FA9F42] text-white py-2 px-4 rounded-lg absolute top-4 right-4">
              <Link to="/profiles">Simpan</Link>
            </button>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div className="form-group flex flex-col">
                <label className="text-gray-600 mb-2" htmlFor="name">
                  Nama
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="text"
                  id="name"
                  defaultValue={name}
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="text-gray-600 mb-2" htmlFor="job">
                  Pekerjaan
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="text"
                  id="job"
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="text-gray-600 mb-2" htmlFor="gender">
                  Jenis Kelamin
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="text"
                  id="gender"
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="text-gray-600 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="email"
                  id="email"
                  defaultValue={email}
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="text-gray-600 mb-2" htmlFor="birthdate">
                  Tanggal Lahir
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="date"
                  id="birthdate"
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="text-gray-600 mb-2" htmlFor="phone">
                  Nomor Telepon
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="tel"
                  id="phone"
                />
              </div>
              <div className="form-group flex flex-col ">
                <label className="text-gray-600 mb-2" htmlFor="address">
                  Alamat
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="text"
                  id="address"
                />
              </div>
            </form>
          </div>
          <button
            type="button"
            onClick={handlePopUp}
            className="bg-red-600 text-white py-2 px-4 rounded-xl col-span-1 md:col-span-2 justify-self-center mt-10"
          >
            Keluar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
