export default function CheckOut() {
  return (
    <div className="m-[48px] flex justify-between tracking-wide">
      {/* customer info */}
      <div className="w-[48%]">
        <p className="text-3xl font-bold">Thông tin giao hàng</p>
        <form
          action=""
          className="w-full bg-[#fff] rounded-lg mt-[24px] px-[20px] py-[16px] flex flex-wrap gap-x-[16px] gap-y-[18px]"
        >
          <div className="w-[310px] flex flex-col">
            <label htmlFor="name" className="font-bold">
              Họ và tên
            </label>
            <input
              type="text"
              id="name"
              placeholder="Oách Xà Lách"
              className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            />
          </div>

          <div className="w-[310px] flex flex-col">
            <label htmlFor="phone" className="font-bold">
              Số điện thoại
            </label>
            <input
              type="text"
              id="phone"
              placeholder="079xxxxxxx"
              className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            />
          </div>

          <div className="w-[240px] flex flex-col">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="OachXaLach123@gmail.com"
              className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            />
          </div>

          <div className="w-[140px] flex flex-col">
            <label htmlFor="zipcode" className="font-bold">
              ZIP
            </label>
            <input
              type="text"
              id="zipcode"
              placeholder="90250"
              className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="address" className="font-bold">
              Địa chỉ
            </label>
            <input
              type="text"
              id="address"
              placeholder="58 Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Thành phố Hà Nội"
              className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            />
          </div>

          <div className="w-[202px] flex flex-col">
            <label htmlFor="province" className="font-bold">
              Tỉnh/Thành phố
            </label>
            <input
              type="text"
              id="province"
              placeholder="Hà Nội"
              className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            />
          </div>

          <div className="w-[202px] flex flex-col">
            <label htmlFor="district" className="font-bold">
              Quận/Huyện
            </label>
            <input
              type="text"
              id="district"
              placeholder="Cầu Giấy"
              className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            />
          </div>

          <div className="w-[202px] flex flex-col">
            <label htmlFor="commune" className="font-bold">
              Phường/Xã
            </label>
            <input
              type="text"
              id="commune"
              placeholder="Quan Hoa"
              className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="note" className="font-bold">
              Ghi chú
            </label>
            <textarea
              id="note"
              placeholder="dunno :v"
              className="w-full h-[100px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
            ></textarea>
          </div>
        </form>
      </div>
      {/* payment method */}
      <div className="w-[48%]">
        <p className="text-3xl font-bold">Phương thức thanh toán</p>

        <div className="bg-[#fff] mt-[24px] rounded-lg px-[30px] py-[20px] flex justify-evenly">
          <div className="w-[240px] flex justify-center items-center">
            <input
              type="radio"
              name="paymentMethod"
              id="cod"
              defaultChecked
              className="w-[14px] h-[14px] cursor-pointer"
            />
            <label htmlFor="cod" className="ml-[8px] cursor-pointer">
              COD
            </label>
          </div>

          <div className="w-[240px] flex justify-center items-center">
            <input
              type="radio"
              name="paymentMethod"
              id="pos"
              className="w-[14px] h-[14px] cursor-pointer"
            />
            <label htmlFor="pos" className="ml-[8px] cursor-pointer">
              POS
            </label>
          </div>

          <div className="w-[240px] flex justify-center items-center">
            <input
              type="radio"
              name="paymentMethod"
              id="creditCard"
              className="w-[14px] h-[14px] cursor-pointer"
            />
            <label htmlFor="creditCard" className="ml-[8px] cursor-pointer">
              Thẻ tín dụng
            </label>
          </div>
        </div>

        <div className="bg-[#fff] mt-[18px] rounded-lg px-[30px] py-[30px]">
          <p className="text-[20px] font-bold">Thông tin thẻ ngân hàng</p>

          <div className="w-full flex flex-wrap items-center gap-x-[18px] gap-y-[18px] mt-[18px]">
            <div className="w-[400px] flex flex-col">
              <label htmlFor="bankNumber" className="font-bold">
                Số thẻ*
              </label>
              <input
                type="text"
                id="bankNumber"
                placeholder="1234 1234 1234 1234"
                className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
              />
            </div>

            <div className="w-[180px] mt-[24px] flex justify-between">
              <img
                src="/images/payment-mastercard-icon.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
              <img
                src="/images/payment-paypal-icon.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
              <img
                src="/images/payment-visa-icon.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="w-[240px] flex flex-col">
              <label htmlFor="dateExpire" className="font-bold">
                Ngày hết hạn*
              </label>
              <input
                type="text"
                id="dateExpire"
                placeholder="MM / YY"
                className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
              />
            </div>

            <div className="w-[240px] flex flex-col">
              <label htmlFor="cvc" className="font-bold">
                CVC*
              </label>
              <input
                type="text"
                id="cvc"
                placeholder="012"
                className="h-[40px] text-[14px] mt-[8px] px-[12px] py-[10px] border-[2px] rounded focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#fff] mt-[18px] rounded-lg px-[30px] py-[30px]">
          <p className="text-[20px] font-bold">Đơn hàng</p>

          <div className="w-full mt-[18px] flex justify-between items-center">
            <div className="h-[40px] flex items-center space-x-[8px]">
              <img
                src="/images/box-icon.png"
                alt=""
                className="w-[36px] h-[36px]"
              />
              <p>4 sản phẩm</p>
            </div>
            <p>2.800.000đ</p>
          </div>

          <div className="w-full mt-[18px] flex justify-between items-center">
            <div className="h-[40px] flex items-center space-x-[8px]">
              <img
                src="/images/truck-icon.png"
                alt=""
                className="w-[36px] h-[36px]"
              />
              <p>Chi phí vận chuyển</p>
            </div>
            <p>40.000đ</p>
          </div>

          <div className="w-full mt-[18px] flex justify-between items-center">
            <div className="h-[40px] flex items-center space-x-[8px]">
              <img
                src="/images/ticket-icon.png"
                alt=""
                className="w-[36px] h-[36px]"
              />
              <p>Mã giảm giá</p>
            </div>
            <p>Chưa áp dụng</p>
          </div>

          <div className="w-full border-b-[4px] border-[#000000] mt-[18px]"></div>

          <div className="w-full mt-[18px] flex justify-between items-center">
            <div className="w-[400px] flex items-center">
              <p>Tổng</p>
            </div>
            <div className="flex space-x-[16px]">
              <p className="text-[#D92D20]">2.700.000đ(-20%)</p>
              <p className="line-through">2.800.000đ</p>
            </div>
          </div>

          <div className="w-full border-b-[4px] border-[#000000] mt-[18px]"></div>

          <button className="w-full h-[40px] bg-[#034292] text-[#fff] mt-[18px] rounded">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}
