"use client";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-[#fff] px-[40px] py-[20px]">
      {/* Top Navbar */}
      <div className="container">
        {/* Left Menu */}
        <div className="w-[80%] text-xl uppercase mx-auto flex justify-evenly items-center">
          <div className="flex space-x-6 text-gray-800 font-medium">
            <Link href="/">Trang chủ</Link>
          </div>
          <div className="flex space-x-6 text-gray-800 font-medium">
            <Link href="/">Chính sách đổi trả</Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Image src="/images/sp1.webp" alt="Logo" width={140} height={140} />
          </div>

          <div className="flex space-x-6 text-gray-800 font-medium">
            <Link href="/">Trang chủ</Link>
          </div>
          <div className="flex space-x-6 text-gray-800 font-medium">
            <Link href="/">Trang chủ</Link>
          </div>
          {/* Right Icons */}
          {/* <div className="flex space-x-4 text-gray-700">
            <Search className="w-6 h-6 cursor-pointer" />
            <Heart className="w-6 h-6 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
            <div className="relative">
              <ShoppingBag className="w-6 h-6 cursor-pointer" />
              <span className="absolute -top-2 -right-2 text-sm text-blue-600">
                0
              </span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="py-3">
        <div className="container text-gray-800 text-xl font-medium">
          <div className="w-[80%] mx-auto flex justify-between">
            <Link href="/" className="underline-effect">
              Tất cả sản phẩm
            </Link>
            <Link href="/" className="underline-effect">
              Danh mục
            </Link>
            <Link href="/" className="underline-effect">
              Sản phẩm mới
            </Link>
            <Link href="/" className="underline-effect">
              Giày nam
            </Link>
            <Link href="/" className="underline-effect">
              Giày nữ
            </Link>
            <Link href="/" className="underline-effect">
              Phụ kiện
            </Link>
            <Link href="/" className="underline-effect">
              Tin Tức
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
