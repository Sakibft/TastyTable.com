import "./App.css";
import Nav from "./Nav";
import Banner from "./Banner";

import Footer from "./Footer";
import { useEffect, useState } from "react";
import Singlcart from "./Singlcart";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const [lcard, setLcard] = useState([]);
  const handleCard= (card) => {
     const isExist = lcard.find(item=> item.id==card.id);
      if(!isExist){

        setLcard([...lcard,card])
      }
      else{
        toast.success("It's all ready selected 🤦‍♂️");
      }
  };
 

  const handleDeleted = (id,item) =>{
    
  
     
    setCurrentlyCook(item);
    console.log(id);
    const necart = lcard.filter(item =>item.id != id)
 setLcard(necart);
  };
  const [cok,setCurrentlyCook] = useState([]);
  console.log(cok);
  
  console.log(lcard);

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
            A good food website design don’t need to be ornamental— it can be
            simple and straightforward in order to let the food photography
            shine. <br /> It’s not that branding isn’t important, it’s just that
            it’s best communicated through colors and logos.
          </p>
        </div>
        <div className="lg:flex justify-between mt-10">
          {/* 1 left side cart*/}
          <div className="grid lg:grid-cols-2 gap-6">
            {carts.map((cart) => (
              <Singlcart
                key={cart.id}
                handleCard={handleCard}
                cart={cart}
              ></Singlcart>
            ))}
          </div>
          {/* 2 right site */}
          <div className="lg:w-[700px]  h-full w-96  rounded-2xl  mt-2 border">
            <div className=" text-black">
              <div>
                <h1 className="lexend text-xl text-center font-semibold mt-3">
                  Want to cook:{lcard.length}
                </h1>
                <hr className="mt-4 w-96 lg:ml-40" />
              </div>
              <div className="mt-4">
                <tr className=" flex justify-around">
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
               
                  {lcard.map((item, index)=> (
                    <>
                     <div className="flex gap-5  bg-gray-100 p-4 pl-6 ]">
                     <div className="flex gap-4">
                     <h1>{index+1}</h1>
                     <tr className="flex lg:gap-[110px] gap-2">
                       <td>{item.r_name}</td>
                       <td>{item.p_time}</td>
                       <td>{item.calories}</td>
                     </tr>
                   </div>
                   <button onClick={()=>handleDeleted(item.id, item)} className=" rounded-full bg-[#0BE58A] border-none p-1  text-sm w-[100px] h-10">
                   Explore Now
                 </button>
                 </div>
                    </>
                  ))
                  }
                 
              </div>
              {/* currently coking */}
              <div className="text-center lexend font-semibold text-xl mt-8">
                <h1>Currently cooking: </h1>

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
                     
                      <tr className="flex gap-[107px]">
                        <td>{cok.r_name}</td>
                        <td>{cok.p_time}</td>
                        <td>{cok.calories}</td>
                      </tr>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* x */}
              <div className="flex flex-col justify-end gap-2 items-end p-4 lexend text-sm text-gray-500">
                <div className="flex gap-4">
                  <h1>Total Time = </h1>
                  <h1>Total calories = </h1>
                </div>
                <div className="flex gap-8">
                  <h1>45 minutes  </h1>
                  <h1>1050 calories  </h1>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
      
      <ToastContainer />
    </div>
  );
}

export default App;
