function MacBookGrid() {
  return (
    <div className="max-w-xl lg:max-w-6xl md:max-w-2xl mx-auto">
      <div className="grid grid-cols-1 pl-36 md:pl-24 lg:pl-36 md:grid-cols-2  space-y-6 lg:grid-cols-4 items-center">
        <div className="w-48">
          <ul className="space-y-6">
            <li>
              <img
                className="w-48"
                src="data:image/jpeg;base64,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"
              />
            </li>
            <li className="text-center">
              <h1 className="text-lg font-bold">13.3”</h1>{" "}
              <p className="text-sm font-bold">Retina display1</p>
            </li>
            <li>
              <p className="text-center text-lg font-bold">2TB</p>
              <p className="text-center text-sm">
                Maximum configurable storage
              </p>
            </li>
            <li className="text-center">
              <h1 className="text-lg font-bold">8-core CPU</h1>
            </li>
            <li>
              <p className="text-sm font-bold">Up to 18 hours battery life</p>
            </li>
          </ul>
        </div>
        <div className="w-48">
          <ul className="space-y-6">
            <li>
              <img
                className="w-48"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZ3KcJGsDMjCLpnQOcS5mS6609t95MSExCg&usqp=CAU"
              />
            </li>
            <li className="text-center">
              <h1 className="text-lg font-bold">13.6”</h1>
              <p className="text-sm font-bold">Liquid Retina display1</p>
            </li>
            <li>
              <p className="text-center text-lg font-bold">2TB</p>
              <p className="text-center text-sm">
                Maximum configurable storage
              </p>
            </li>
            <li className="text-center">
              <h1 className="text-lg font-bold">8-core CPU</h1>
            </li>
            <li>
              <p className="text-sm font-bold">Up to 18 hours battery life</p>
            </li>
          </ul>
        </div>
        <div className="w-48">
          <ul className="space-y-6">
            <li>
              <img
                className="w-48"
                src="https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SX342_.jpg"
              />
            </li>
            <li className="text-center">
              <h1 className="text-lg font-bold">13.3”</h1>
              <p className="text-sm font-bold">Retina display1</p>
            </li>
            <li>
              <p className="text-center text-lg font-bold">2TB</p>
              <p className="text-center text-sm">
                Maximum configurable storage
              </p>
            </li>
            <li className="text-center">
              <h1 className="text-lg font-bold">8-core CPU</h1>
            </li>
            <li>
              <p className="font-bold text-sm">Up to 20 hours battery life</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-6 text-center w-48">
            <li>
              <img
                className="w-48"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZQreEsdRrdG6zJJB1PMI39YX-JlFhe2xXg&usqp=CAU"
              />
            </li>
            <li className="text-center">
              <h1 className="text-lg font-bold">14.2” or 16.2”</h1>{" "}
              <p className="text-sm font-bold">Liquid Retina XDR display1</p>
            </li>
            <li>
              <p className="text-center text-lg font-bold">8TB</p>
              <p className="text-center text-sm">
                Maximum configurable storage
              </p>
            </li>
            <li className="text-center">
              <h1 className="text-lg font-bold">Up to 10-core CPU</h1>
            </li>
            <li>
              <p className="font-bold text-sm">Up to 21 hours battery life</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MacBookGrid;
