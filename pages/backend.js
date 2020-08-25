import Head from "next/head";

export default function Backend() {
  return (
    <div className="h-full text-gray-600">
      <Head>
        <title>Backend</title>
      </Head>
      <div className="bg-white h-12 flex items-center justify-between shadow">
        <div className="px-4">
          <h1 className="text-gray-800 text-xl">管理中心</h1>
        </div>
        <div className="flex items-center px-4">
          <div>超级管理员</div>
          <div className="ml-2">
            <img
              src="/assets/avatar.jpeg"
              className="h-8 rounded-full border"
            />
          </div>
        </div>
      </div>

      <div className="flex h-full">
        <div className="bg-gray-800 p-6 w-64">
          <ul>
            <li>
              <a
                href=""
                className="flex items-center px-4 py-2 rounded hover:bg-gray-900 hover:text-gray-400"
              >
                <svg
                  className="mr-2"
                  t="1598329274109"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2302"
                  width="16"
                  height="16"
                >
                  <path
                    d="M277.33344 85.333333V42.794667C277.33344 19.157333 296.320107 0 319.808107 0H704.21344C727.658773 0 746.666773 19.136 746.666773 42.794667V85.333333h149.397334C919.594773 85.333333 938.666773 104.512 938.666773 128.106667v853.12A42.666667 42.666667 0 0 1 896.064107 1024H127.936107A42.709333 42.709333 0 0 1 85.33344 981.226667V128.106667A42.666667 42.666667 0 0 1 127.936107 85.333333H277.33344z m0 85.333334H191.850773C180.330773 170.666667 170.666773 180.224 170.666773 192v725.333333c0 11.626667 9.472 21.333333 21.184 21.333334h640.298667c11.52 0 21.184-9.557333 21.184-21.333334V192c0-11.626667-9.472-21.333333-21.184-21.333333H746.666773v85.205333C746.666773 279.509333 727.680107 298.666667 704.192107 298.666667H319.786773C296.34144 298.666667 277.33344 279.530667 277.33344 255.872V170.666667z m85.333333-64.213334v85.76c0 11.498667 9.6 21.12 21.482667 21.12h255.701333A21.290667 21.290667 0 0 0 661.33344 192.213333V106.453333c0-11.498667-9.6-21.12-21.482667-21.12H384.14944A21.290667 21.290667 0 0 0 362.666773 106.453333zM234.666773 448a42.666667 42.666667 0 0 1 42.602667-42.666667h469.461333c23.530667 0 42.602667 18.944 42.602667 42.666667a42.666667 42.666667 0 0 1-42.602667 42.666667H277.26944A42.538667 42.538667 0 0 1 234.666773 448z m0 170.666667a42.666667 42.666667 0 0 1 42.602667-42.666667h469.461333c23.530667 0 42.602667 18.944 42.602667 42.666667a42.666667 42.666667 0 0 1-42.602667 42.666666H277.26944A42.538667 42.538667 0 0 1 234.666773 618.666667z m0 170.666666c0-23.573333 19.050667-42.666667 42.496-42.666666h235.008c23.466667 0 42.496 18.944 42.496 42.666666 0 23.573333-19.050667 42.666667-42.496 42.666667H277.162773C253.696107 832 234.666773 813.056 234.666773 789.333333z"
                    p-id="2303"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>订单管理</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="p-8">
            <h1 className="text-2xl text-gray-800">订单管理</h1>
            <div className="bg-gray-500 h-4 mt-4"></div>
            <div className="bg-gray-500 h-4 mt-4"></div>
            <div className="bg-gray-500 h-4 mt-4"></div>
            <div className="bg-gray-500 h-4 mt-4"></div>
            <div className="bg-gray-500 h-4 mt-4"></div>
            <div className="bg-gray-500 h-4 mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
