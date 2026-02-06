import Layout from "@renderer/components/layout";

export default function Practice() {
  return (
    <Layout>
      <div className="grid grid-cols-[1fr_1fr_2fr] gap-2">
        <div
          className="h-60 bg-neutral-800 flex flex-col items-center justify-center cursor-pointer"
        >
          <span className="text-neutral-500">bike</span>
          <p className="text-neutral-500 p-2 text-md">kalex</p>
        </div>
        <div
          className="h-60 bg-neutral-800 flex flex-col items-center justify-center cursor-pointer"
        >
          <span className="text-neutral-500">track</span>
          <p className="text-neutral-500 p-2 text-md">valencia</p>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
          weather
        </div>
        <div className="col-start-2">
          <button
            className="w-42 h-12 font-normal bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xl cursor-pointer uppercase"
          >
            ready
          </button>
        </div>
      </div>
    </Layout>
  );
}