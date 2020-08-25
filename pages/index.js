import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>My Blog</title>
      </Head>
      <div className="px-8 py-12 max-w-md mx-auto">
        <img className="h-10" src="/assets/logo.svg" alt="workcation" />
        <img
          className="mt-6 rounded-lg shadow-xl"
          src="/assets/beach-work.jpg"
          alt="Woman workcationing on beach."
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
          You can work frome anywhere.{" "}
          <span className="text-indigo-500">Take advatantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-600">
          We currently require at least Rust 1.39 so make sure you run rustup
          update to have the latest and greatest Rust version available. In
          particular this guide will assume that you actually run Rust 1.39 or
          later.
        </p>
        <div className="mt-4">
          <a
            className="inline-block bg-indigo-500 text-white px-5 py-3 rounded-lg uppercase tracking-wider font-semibold text-sm"
            href="#"
          >
            Book your escape
          </a>
        </div>
      </div>
    </div>
  );
}
