import "./App.css";
import Nav from "./Nav";
import Banner from "./Banner";


import Footer from "./Footer";
import { useEffect, useState } from "react";
import Singlcart from "./Singlcart";
function App() {
  const [carts, setCart] = useState([]);
  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res=>res.json())
    .then(data=>setCart(data))
  },[])
console.log(carts);

  return (
    <div>
      <div className="container mx-auto mt-3">
      <Nav></Nav>
      {/* banner */}
      <Banner></Banner>

      {/* main */}
      <div className="mt-5">
        <h1 className="font-semibold lexend text-3xl text-center">
          Our Recipes
        </h1>
        <p className="text-center lexend text-sm text-gray-500  mt-2">
        A good food website design don’t need to be ornamental— it can be simple and straightforward in order to let the food photography shine. <br /> It’s not that branding isn’t important, it’s just that it’s best communicated through colors and logos.
        </p>
      </div>
      <div className="lg:flex justify-between mt-10">
        {/* 1 left side cart*/}
        <div className="grid lg:grid-cols-2 gap-6">
        {
              carts.map(cart=><Singlcart key={cart.id} cart={cart}></Singlcart>)

            }
         
          
        </div>
        {/* 2 right site */}
        <div className="lg:w-[700px] h-[558px] w-96  rounded-2xl  mt-2 border">
          <div className=" text-black">
            <div>
              <h1 className="lexend text-xl text-center font-semibold mt-3">
                Want to cook: 01
              </h1>
              <hr className="mt-4 w-96 lg:ml-40" />
            </div>
            <div className="mt-4">
              <tr className="flex ml-11 lg:gap-28 gap-8">
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
              <div className="flex gap-5 mb-2 mt-4 bg-gray-100 p-4 pl-6 ]">
                <div className="flex gap-4">
                  <h1>1</h1>
                  <tr className="flex lg:gap-[110px] gap-2">
                    <td>Jafssuary</td>
                    <td>$100</td>
                    <td>$300</td>
                  </tr>
                </div>
                <button className=" rounded-full bg-[#0BE58A] border-none p-1  text-sm w-[100px] h-10">
                  Explore Now
                </button>
              </div>
            </div>
            {/* currently coking */}
            <div className="text-center lexend font-semibold text-xl mt-8">
              <h1>Currently cooking: 02</h1>

              <hr className=" w-96 lg:ml-40 mt-4" />
            </div>
            <div className="mt-4">
              <tr className="flex  justify-center  gap-28">
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
              <div className="bg-gray-100">
                <div className="flex gap-5 justify-center mb-2 mt-4  p-4 pl-6 ]">
                  <div className="flex gap-4">
                    <h1>1</h1>
                    <tr className="flex gap-[107px]">
                      <td>Jafssuary</td>
                      <td>$100</td>
                      <td>$300</td>
                    </tr>
                  </div>
                </div>
                <div className="flex gap-5 justify-center mb-2 mt-2  p-4 pl-6 ]">
                  <div className="flex gap-4">
                    <h1>1</h1>
                    <tr className="flex gap-[107px]">
                      <td>Jafssuary</td>
                      <td>$100</td>
                      <td>$300</td>
                    </tr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
      
      {/* footer */}
     <Footer></Footer>
    </div>
  );
}

export default App;
