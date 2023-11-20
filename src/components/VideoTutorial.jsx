import Image from "next/image";
import thumbnailImage from "../../public/images/hero_image.png";

function VideoTutorial() {
  return (
    <section className="bg-gray-800 text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4 ">
            <div className="rounded-lg border-solid border-white border-2 h-64 overflow-hidden">
              <Image
                width={1280}
                height={720}
                alt="content"
                className="object-cover object-center h-full w-full"
                src={thumbnailImage}
              />
            </div>
            <h2 className="title-font text-2xl  font-medium text-white mt-6 mb-3">
              Buy YouTube Videos
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg border-solid border-white border-2 h-64 overflow-hidden">
              <Image
                width={1280}
                height={720}
                alt="content"
                className="object-cover object-center h-full w-full"
                src={thumbnailImage}
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoTutorial;
