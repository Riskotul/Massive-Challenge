import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();

  useEffect(() => {
    refreshToken();
  }, []);

  // Decoded Token
  const [name, setName] = useState("");
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="flex lg:fixed top-0 z-50 flex-col lg:flex-row h-auto lg:h-[97px] w-full items-center justify-between px-6 lg:px-12 py-4 lg:py-0 bg-white shadow-md">
      <img
        src="/images/app-logo-m.png"
        alt="Logo"
        className="h-16 mb-4 lg:mb-0"
      />
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 mb-4 lg:mb-0">
        <Link
          to="/home"
          className={`text-[20px] lg:text-[24px] font-bold hover:text-[#FA9F42] ${
            currentPage.includes("home") ? "text-[#FA9F42]" : "text-[#171717]"
          }`}
        >
          Beranda
        </Link>
        <Link
          to="/about"
          className={`text-[20px] lg:text-[24px] font-bold hover:text-[#FA9F42] ${
            currentPage.includes("about") ? "text-[#FA9F42]" : "text-[#171717]"
          }`}
        >
          Tentang Kami
        </Link>
        <Link
          to="/services"
          className={`text-[20px] lg:text-[24px] font-bold hover:text-[#FA9F42] ${
            currentPage.includes("services")
              ? "text-[#FA9F42]"
              : "text-[#171717]"
          }`}
        >
          Layanan
        </Link>
        <Link
          to="/contact"
          className={`text-[20px] lg:text-[24px] font-bold hover:text-[#FA9F42] ${
            currentPage.includes("contact")
              ? "text-[#FA9F42]"
              : "text-[#171717]"
          }`}
        >
          Kontak
        </Link>
        <Link
          to="/donation"
          className={`text-[20px] lg:text-[24px] font-bold hover:text-[#FA9F42] ${
            currentPage.includes("donation")
              ? "text-[#FA9F42]"
              : "text-[#171717]"
          }`}
        >
          Donasi
        </Link>
      </div>
      {isToken ? (
        <>
          <Link
            to="/profile"
            className="flex items-center gap-3 lg:gap-[9px] cursor-pointer"
          >
            <img
              src="/images/profile-picture.png"
              alt="Profile"
              className="w-8 h-8 lg:size-[65px]"
            />
            <h1 className="text-[16px] lg:text-[24px] font-bold text-black">
              {name}
            </h1>
          </Link>
        </>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
            <Link
              to="/login"
              className="text-[20px] lg:text-[24px] font-bold hover:text-[#FA9F42]"
            >
              Masuk
            </Link>
            <Link
              to="/register"
              className="flex h-[56px] w-[111px] items-center justify-center rounded-lg bg-[#8DD67A] text-[20px] lg:text-[24px] font-bold hover:text-[#FA9F42]"
            >
              Daftar
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};
