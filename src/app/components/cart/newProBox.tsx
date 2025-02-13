export default function NewProBox({ data }: { data: any }) {
  return (
    <div className="relative w-full bg-[#fff] rounded-lg my-[8px] p-[14px] hover:shadow-lg flex flex-col space-y-[8px]">
      <img src={`/images/${data.image}`} alt="" className="rounded" />
      <p>{data.name}</p>
      <div className="text-[#D92D20]">
        {data.price.toLocaleString("vi-VN")}đ
        <span className="text-[#000000] opacity-60 line-through ml-[8px]">
          {data.priceSale.toLocaleString("vi-VN")}đ
        </span>
      </div>
      <p>223 lượt mua</p>
      <div className="absolute w-[50px] bg-[#034292] text-white text-sm flex justify-center rounded-2xl right-[6px] top-0">
        New
      </div>
    </div>
  );
}
