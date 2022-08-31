function GridMacPage() {
  return (
    <div className="max-w-6xl mx-auto items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border shadow-md rounded-md p-2 bg-gray-300 space-y-6">
          <h1 className="text-xl font-bold text-center">Mac accessories</h1>
          <img
            className="rounded-md"
            src="https://9to5mac.com/wp-content/uploads/sites/6/2021/12/MagSafe-accessories_02.jpg?quality=82&strip=all"
          />
        </div>
        <div className="border shadow-md rounded-md p-2 bg-slate-300 space-y-6">
          <h1 className="text-xl font-bold text-center">
            Get credit toward a new Mac.
          </h1>
          <img
            className="rounded-md"
            src="https://9to5mac.com/wp-content/uploads/sites/6/2021/04/apple-trade-in-.jpg?quality=82&strip=all&w=1600"
          />
        </div>
      </div>
    </div>
  );
}

export default GridMacPage;
