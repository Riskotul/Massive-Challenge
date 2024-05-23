import { Link } from 'react-router-dom';

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
  return (
    <nav className="flex h-[97px] w-full items-center justify-center gap-20 px-12">
      <img src="/images/app-logo-m.png" alt="" className="h-16 w-fit" />
      <div className="flex items-center gap-10">
        <Link className="text-[24px] font-bold text-[#FA9F42]">Beranda</Link>
        <Link className="text-[24px] font-bold text-[#FA9F42]">
          Tentang Kami
        </Link>
        <Link to="/services" className="text-[24px] font-bold text-[#FA9F42]">
          Layanan
        </Link>
        <Link to="/contact" className="text-[24px] font-bold text-[#FA9F42]">
          Kontak
        </Link>
        <Link to="/donation" className="text-[24px] font-bold text-[#FA9F42]">
          Donasi
        </Link>
      </div>
      <div className="flex items-center gap-[9px]">
        <img src="/images/profile-picture.png" alt="" className="size-[70px]" />
        <h1 className="font-bold text-black">Dimas Rahmatullah</h1>
      </div>
    </nav>
  );
};
