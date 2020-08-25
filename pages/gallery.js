import Head from "next/head";
export default function Gallery() {
  return (
    <div className="p-4 flex flex-wrap">
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="bg-white p-2 shadow h-64 w-full md:h-48">
          <img
            src="/assets/architecture-1477041__480.webp"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </div>
      <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="bg-white p-2 shadow h-64 w-full md:h-48">
          <img
            src="/assets/architecture-1836070__480.webp"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </div>
      <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="bg-white p-2 shadow h-64 w-full md:h-48">
          <img
            src="/assets/architecture-3121009__480.jpg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </div>
      <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="bg-white p-2 shadow h-64 w-full md:h-48">
          <img
            src="/assets/boat-house-192990__480.jpg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </div>
      <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="bg-white p-2 shadow h-64 w-full md:h-48">
          <img
            src="/assets/church-2464899__480.jpg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
