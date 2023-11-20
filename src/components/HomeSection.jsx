import Image from "next/image";
import heroImage from "../../public/images/hero_image.png";

export default function HomeSection() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full mt-20 md:w-1/2 w-5/6 md:mb-0 mb-10">
          <Image
            alt="hero Image"
            width={720}
            height={600}
            className="object-cover object-center rounded"
            src={heroImage}
          />
        </div>
        <div className="lg:flex-grow  md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Connecting You to Endless Possibilities
          </h1>
          <p className="mb-8 leading-relaxed">
            We offer a variety of wifi hotspot plans to fit your needs and
            budget. Our plans are affordable and flexible, so you can choose the
            one thats right for you.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Buy
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Coverage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
