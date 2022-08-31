import Layout from "../../shared_Components";
import SimpleSlider from "../../shared_Components/imageSlide";
import Slideshow from "../../shared_Components/imageSlide";

function AboutPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4 items-center">
        <div className="pt-10">
          <h1 className="text-4xl md:text-8xl font-bold text-center">
            The best experiences.
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold text-center text-gray-800">
            Only on Apple.
          </h1>
          <div className="max-w-5xl p-4 pt-12 mx-auto text-gray-500">
            <span className=" text-lg  md:text-2xl font-bold text-center  p-4">
              Get the most out of the devices you love with high-quality content
              and services. Award-winning series and films, amazing music in
              spatial audio, world-class workouts and meditations, trusted news
              publications, superfun games — even the ways you pay for things.
              And they're only on Apple.
            </span>
          </div>
        </div>
      </div>
      <div className=" bg-black h-48 w-full ">
        <div className="max-w-6xl mx-auto text-white items-center p-4">
          <div className="flex justify-between ">
            <div>
              <p className="pt-16 text-md lg:text-2xl font-bold  ">
                Get up to six services in one subscription with Apple One.
              </p>
            </div>
            <div className="pt-16">
              <a
                className="border text-white text-md rounded-lg p-2"
                href="https://www.apple.com/apple-one/"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <video
        className="w-full"
        autoPlay
        muted
        src="https://www.apple.com/105/media/us/services/2022/83305525-9fad-4056-9e32-f3d31014dc81/anim/hero-sizzle/large.mp4"
      ></video>
      <div className="max-w-6xl mx-auto p-4 pt-12 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <SimpleSlider />
        <div className="bg-indigo-400 rounded-md text-white p-4 ">
          <h1 className="text-3xl font-bold">Mahdiy Mamurov</h1>
          <img
            class="inline object-cover w-48 h-48 p-4 mr-2 rounded-full"
            src="data:image/jpeg;base64,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"
            alt="Profile image"
          />

          <p className="font-bold">
            Steven Paul Jobs February 24, 1955 – October 5, 2011 was an American
            entrepreneur, industrial designer, business magnate, media
            proprietor, and investor. He was the co-founder, chairman, and CEO
            of Apple; the chairman and majority shareholder of Pixar; a member
            of The Walt Disney Company's board of directors following its
            acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He
            is widely recognized as a pioneer of the personal computer
            revolution of the 1970s and 1980s, along with his early business
            partner and fellow Apple co-founder
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
