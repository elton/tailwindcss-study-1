import Head from "next/head";

export default function Test() {
  return (
    <div className="h-full flex items-center justify-center">
      <Head>
        <title>Test tailwindcss</title>
      </Head>
      <div className="w-64 shadow-lg rounded overflow-hidden">
        <div className="h-24">
          <img
            src="/assets/bg.webp"
            alt=""
            className="h-24 object-cover w-full"
          />
        </div>
        <div className="bg-white text-center">
          <div className="flex justify-center -mt-16">
            <div className="h-20 w-20 relative">
              <img
                src="/assets/avatar.jpeg"
                alt=""
                className="rounded-full border-4"
              />
              <div className="absolute bottom-0 right-0 border-2 bg-orange-400 h-6 w-6 rounded-full text-white">
                v
              </div>
            </div>
          </div>

          <div className="text-gray-800 font-bold">Elton</div>
          <div className="flex items-center py-3">
            <div className="w-1/3">
              <div className="text-gray-800 text-xl font-bold">375</div>
              <div className="text-gray-500">关注</div>
            </div>
            <div className="w-1/3 border-l border-r">
              <div className="text-gray-800 text-xl font-bold">23684</div>
              <div className="text-gray-500">粉丝</div>
            </div>
            <div className="w-1/3">
              <div className="text-gray-800 text-xl font-bold">23640</div>
              <div className="text-gray-500">微博</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
