import Layout from "../../shared_Components";
import BigSlider from "../../shared_Components/Slider/bigSliderCard";

export default function HomePage() {
  {
    return (
      <Layout className="bg-gray-100">
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto p-10 grid grid-cols-2 gap-8">
            <h1 className="text-2xl lg:text-5xl  font-semibold">
              Store. The best way to buy the products you love.
            </h1>
            <h1 className="text-xl font-bold">Mahdiy</h1>
          </div>

          <div className="max-w-6xl mx-auto p-10">
            <h1 className="text-xl lg:text-3xl font-semibold">
              The latest. Take a look at what's new, right now.
            </h1>
          </div>
          <div className="p-12 ">
            <BigSlider />
          </div>
          <div className="max-w-6xl mx-auto p-10">
            <h1 className="text-3xl font-semibold">
              Help is here. Whenever and however you need it.
            </h1>
            <div className=" max-w-6xl  mx-auto pl-4 lg:pl-24  items-center p-4 rounded-md space-y-12 space-x-6">
              <div className=" grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="border shadow-md text-black rounded-lg  w-96 font-bold">
                  <div className="absolute w-96 pt-8 pl-4">
                    <h1> Apple Inc</h1>
                    <p>Save on Mac or iPad</p>
                  </div>
                  <img
                    className="rounded-lg"
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-edu-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627492399000"
                  />
                </div>
                <div className="bg-black text-white rounded-lg w-96 font-bold">
                  <div className="absolute p-4 w-96">
                    <h1 className="text-xl">Apple Inc</h1>
                    <p className="text-lg pt-8 font-bold">
                      From enterprise to small business, we'll work with you
                    </p>
                  </div>
                  <img
                    className="rounded-lg"
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-small-business-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627318784000"
                  />
                </div>

                <div className="bg-black text-white rounded-lg w-96 font-bold">
                  <div className="absolute p-4 w-96">
                    <h1 className="text-xl">
                      GOVERNMENT
                      <p className="text-md pt-8">
                        Special pricing is available for state, local, and
                        federal agencies.
                      </p>
                    </h1>
                  </div>
                  <img
                    className="rounded-lg"
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1632870676000"
                  />
                </div>
                <div className="border shadow-md text-black rounded-lg w-96 font-bold">
                  <div className="absolute w-96 p-4">
                    <h1> VETERANS AND MILITARY</h1>
                    <p>
                      Active and veteran members may be eligible for exclusive
                      savings.
                    </p>
                  </div>
                  <img
                    className="rounded-lg"
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veterans-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645468079106"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
