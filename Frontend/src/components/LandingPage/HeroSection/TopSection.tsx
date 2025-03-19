export default function TopSection() {
    return (
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-30 py-30 items-center font-overpass mx-auto">
        {/* Left Side - Text & Search */}
        <div>
          <p className="text-gray-600 font-semibold">GET STARTED TODAY</p>
          <h1 className="text-5xl font-bold text-gray-900 mt-2">
            Effortlessly Unleash <br /> Your <span className="text-green-700">Talents</span>
          </h1>
          <p className="text-gray-600 mt-4">Fill Positions in Hours with Free Search Options</p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-md flex mt-6">
            <input
              type="text"
              placeholder="Jobs title or keywords"
              className="p-3 flex-grow"
            />
            <select className="p-3 border-l bg-gray-100 outline-none">
              <option>All Categories</option>
            </select>
            <button className="bg-green-700 text-white px-6 py-3">Search</button>
          </div>
          
          {/* Popular Searches */}
          <p className="text-gray-500 mt-4">
            Popular Searches: <span className="text-gray-800 font-semibold">Wireframing, Customer Support</span>
          </p>
        </div>

        {/* Right Side - Image Grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="absolute w-3 h-3 bg-green-700 rounded-full -top-5 right-10"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full absolute bottom-5 right-5"></div>
          
          <img
            src="https://img.freepik.com/free-vector/friendly-handshake-concept-illustration_114360-6804.jpg?t=st=1742216235~exp=1742219835~hmac=5bca215e37a5668bb47ed06ab67fe65e8df856a99e392a6deda76e1a28c1e7c8&w=1380"
            className="rounded-full w-full h-full object-cover"
            alt=""
          />
            <img
              src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?t=st=1742215979~exp=1742219579~hmac=1b8e89294855ad35dad54d2d212f65b024d9765cdb90107e0ea329dcbc721d93&w=2000"
              className="rounded-lg w-full h-full object-cover"
              alt=""
            />
          <img
            src="https://img.freepik.com/free-vector/handshake-gesture-3d-cartoon-style-icon-businesspeople-partners-shaking-hands-making-successful-deal-flat-vector-illustration-partnership-agreement-teamwork-concept_74855-26044.jpg?t=st=1742216263~exp=1742219863~hmac=e0f5775937c2a525c094433cf72a0f5a34b22c3ea299d2db17dd3cb696f02ce2&w=1800"
            className="rounded-full w-full h-full object-cover"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-vector/choice-worker-concept-illustrated_52683-44076.jpg?t=st=1742216314~exp=1742219914~hmac=7f42651161ea68278bcb5f023b79a306f39a76e150e15696b7a21ccf3011e36a&w=2000"
            className="rounded-lg w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    )
}
