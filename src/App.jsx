import "./App.css";

import Nav from "./Nav";
// import image from '../../src/image'
function App() {
  return (
    <div className="container mx-auto">
      <Nav></Nav>
      {/* banner */}
      <div></div>
      {/* main */}
      <div>
        <h1 className="font-semibold lexend text-3xl text-center">
          Our Recipes
        </h1>
        <p className="text-center lexend text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          animi commodi dolorem minus nostrum non. <br />
          orem ipsum dolor sit amet consectetur adipisicing Suscip olorem minus
          nostrum non
        </p>
      </div>
      <div className="flex justify-between">
        {/* 1 left side cart*/}
        <div className="grid grid-cols-2 gap-6">
        <div className="card w-80 bg-base-100 shadow-xl  ">
          <figure className="p-4">
            <img
              className="rounded-md"
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="px-4">
            <h2 className="lexend text-xl ">Spaghetti Bolognese</h2>
            <p className="mt-2 lexend text-sm text-gray-400">
              {" "}
              Classic Italian pasta dish with savory meat <br /> sauce.
            </p>
            <hr className="mt-2" />
            <h1 className="lexend text-xl mt-2">Ingredients: 6</h1>
            <div className="pl-10 mt-2">
              <ul>
                <li className="list-disc">500g ground beef</li>
                <li className="list-disc">1 onion, chopped</li>
                <li className="list-disc">2 cloves garlic, minced</li>
              </ul>
            </div>
            <hr className="mt-2" />
            <div className="flex gap-4">
              <div>
                <img src="" alt="" />
                <h1>30 minutes</h1>
              </div>
              <div>
                <img src="" alt="" />
                <h1>600 calories</h1>
              </div>
            </div>
            <div className="card-actions mt-2 mb-3 ">
              <button className="bg-[#0BE58A] rounded-full  w-32 text-normal btn ">
                Want to Cook
              </button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl  ">
          <figure className="p-4">
            <img
              className="rounded-md"
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="px-4">
            <h2 className="lexend text-xl ">Spaghetti Bolognese</h2>
            <p className="mt-2 lexend text-sm text-gray-400">
              {" "}
              Classic Italian pasta dish with savory meat <br /> sauce.
            </p>
            <hr className="mt-2" />
            <h1 className="lexend text-xl mt-2">Ingredients: 6</h1>
            <div className="pl-10 mt-2">
              <ul>
                <li className="list-disc">500g ground beef</li>
                <li className="list-disc">1 onion, chopped</li>
                <li className="list-disc">2 cloves garlic, minced</li>
              </ul>
            </div>
            <hr className="mt-2" />
            <div className="flex gap-4">
              <div>
                <img src="" alt="" />
                <h1>30 minutes</h1>
              </div>
              <div>
                <img src="" alt="" />
                <h1>600 calories</h1>
              </div>
            </div>
            <div className="card-actions mt-2 mb-3 ">
              <button className="bg-[#0BE58A] rounded-full  w-32 text-normal btn ">
                Want to Cook
              </button>
            </div>
          </div>
        </div>
        </div>
        {/* 2 right site */}
        <div className="w-[600px] h-[200px] bg-green-400 mt-3">
          <h1>lslsl</h1>
          <h1>lslsl</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
