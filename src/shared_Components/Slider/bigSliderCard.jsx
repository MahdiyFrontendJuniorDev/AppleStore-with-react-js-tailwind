import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function AboutPage() {
  return (
    <div className="">
      <Swiper
        className="shadow-xl bg-white rounded-md shadow-slate-800 space-x-3"
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="">
          <SwiperSlide>
            <div className=" bg-white shadow-md shadow-slate-800 rounded-lg p-8">
              <span className="hidden lg:block absolute text-xl font-semibold ">
                Don't take it lightly. From $1199 or $99.91/mo.per month for 12
                mo.months Footnote
              </span>
              <img
                className="w-128 rounded-md"
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202206?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1652743701977"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-xl shadow-slate-800 rounded-lg p-8">
              <div className=" absolute hidden lg:block ">
                <div>
                  <h1 className="text-2xl font-bold">
                    Save on Mac or iPad for college.
                  </h1>
                  <span className="text-lg font-bold">
                    Shop with an education discount.² Plus get a gift card up to
                    $150.³
                  </span>
                </div>
              </div>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-bts-202206?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1654827390286" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md shadow-slate-700 rounded-lg p-8">
              <div className="flex absolute">
                <div className="hidden lg:block">
                  <h1 className="text-2xl font-semibold">
                    Your New SuperPower
                  </h1>
                  <span className="">
                    Now in Green. From $699.00 or $29.12/mo.per month for 24
                    mo.months before trade-inFootnote
                  </span>
                </div>
              </div>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290452" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md shadow-slate-700 rounded-lg p-8">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-pro-202206?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1652803481192" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md shadow-slate-700 rounded-lg p-8">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290504" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md shadow-slate-700 rounded-lg p-8">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645636337374" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-md shadow-slate-700 rounded-lg p-8">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-se-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052592978" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default AboutPage;
