"use client";
import Link from "next/link";

export default function CartEmpty() {
  return (
    <div className="flex flex-col items-center space-y-[24px]">
      <div></div>
      <img
        src="/images/bag-icon.png"
        alt=""
        style={{ width: "100px", height: "100px" }}
      />
      <p className="text-2xl">Giỏ hàng của bạn đang trống</p>
      <Link href="/">
        <button className="w-[200px] h-[40px] bg-[#034292] text-white rounded">
          Mua sắm ngay
        </button>
      </Link>
    </div>
  );
}
