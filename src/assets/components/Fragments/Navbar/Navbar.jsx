import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex h-[97px] w-full items-center justify-center gap-20 px-12">
      <img src="/images/app-logo-m.png" alt="" className="h-16 w-fit" />
      <div className="flex items-center gap-10">
        <Link className="text-[24px] font-bold text-[#FA9F42]">Beranda</Link>
        <Link className="text-[24px] font-bold text-[#FA9F42]">
          Tentang Kami
        </Link>
        <Link className="text-[24px] font-bold text-[#FA9F42]">Layanan</Link>
        <Link className="text-[24px] font-bold text-[#FA9F42]">Kontak</Link>
        <Link className="text-[24px] font-bold text-[#FA9F42]">Donasi</Link>
      </div>
      <div className="flex items-center gap-5">
        <Link className="text-[24px] font-bold text-[#FA9F42]">Masuk</Link>
        <Link className="flex h-[56px] w-[111px] items-center justify-center rounded-lg bg-[#8DD67A] text-[24px] font-bold text-[#FA9F42]">
          Daftar
        </Link>
      </div>
    </nav>
  );
};

export const NavbarLogin = () => {
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();

  return (
    <nav className="flex h-[97px] w-full items-center justify-center gap-20 px-12">
      <img src="/images/app-logo-m.png" alt="" className="h-16 w-fit" />
      <div className="flex items-center gap-10">
        <Link
          to="/home"
          className="text-[24px] font-bold text-[#171717] hover:text-[#FA9F42] aria-[current=page]:text-[#FA9F42]"
          aria-current={currentPage.includes("home") ? "page" : undefined}
        >
          Beranda
        </Link>
        <Link
          to="/about"
          className="text-[24px] font-bold text-[#171717] hover:text-[#FA9F42] aria-[current=page]:text-[#FA9F42]"
          aria-current={currentPage.includes("about") ? "page" : undefined}
        >
          Tentang Kami
        </Link>
        <Link
          to="/services"
          className="text-[24px] font-bold text-[#171717] hover:text-[#FA9F42] aria-[current=page]:text-[#FA9F42]"
          aria-current={currentPage.includes("services") ? "page" : undefined}
        >
          Layanan
        </Link>
        <Link
          to="/contact"
          className="text-[24px] font-bold text-[#171717] hover:text-[#FA9F42] aria-[current=page]:text-[#FA9F42]"
          aria-current={currentPage.includes("contact") ? "page" : undefined}
        >
          Kontak
        </Link>
        <Link
          to="/donation"
          className="text-[24px] font-bold text-[#171717] hover:text-[#FA9F42] aria-[current=page]:text-[#FA9F42]"
          aria-current={currentPage.includes("donation") ? "page" : undefined}
        >
          Donasi
        </Link>
      </div>
      <Link
        to="/profile"
        className="flex items-center gap-[9px] cursor-pointer"
      >
        <img src="/images/profile-picture.png" alt="" className="size-[70px]" />
        <h1 className="font-bold text-black">Dimas Rahmatullah</h1>
      </Link>
    </nav>
  );
};