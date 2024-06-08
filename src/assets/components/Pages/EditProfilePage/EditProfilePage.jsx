import { useState } from "react";
import Footer from "../../Fragments/Footer/Footer";
import { Navbar } from "../../Fragments/Navbar/Navbar";
import { Link } from "react-router-dom";

const EditProfilePage = () => {
  const profilePicture = "/images/ProfilePage/foto_profil.png";

  const [profileImage, setProfilImage] = useState(profilePicture);

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

  return (
    <>
      <Navbar />
      <div>
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
              <p className="text-black text-xl font-bold">Dimas Rahmatullah</p>
            </div>
          </div>
          <div className="border border-black rounded-lg p-8 relative gap-12">
            <h3 className="text-xl font-semibold mb-6">Informasi Pribadi</h3>
            <button className="bg-[#FA9F42] text-white py-2 px-4 rounded-lg absolute top-4 right-4">
              <Link to="/profile">Simpan</Link>
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
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="text-gray-600 mb-2" htmlFor="birthdate">
                  Tanggal Lahir
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="text"
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
              <div className="form-group flex flex-col ">
                <label className="text-gray-600 mb-2" htmlFor="password">
                  Kata Sandi
                </label>
                <input
                  className="p-2 border border-black rounded-md text-gray-700"
                  type="password"
                  id="password"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfilePage;
