import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../shared_Components";

function DetailPage() {
  let params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/products/${params.id}`,
        `http://localhost:3000/Ipads/${params.id}`,
      )
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <Layout>
        {" "}
        {data && (
          <div className="container  bg-slate-300 flex flex-col px-6 py-10 mx-auto space-y-12 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-4xl font-semibold tracking-wide text-gray-800  lg:text-5xl">
                  {data.title}
                </h1>
                <img className="w-64 rounded-md" src={data.imageURL} />
                <p className="font-bold">{data.description}</p>
                <p className="font-bold">{data.releaseDate}</p>
                <p className="text-lg font-bold">{data.developer}</p>
                <p className="text-green-500 font-bold">{data.price}</p>
                <button className="bg-green-500 font-bold p-4 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}

export default DetailPage;
