import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  
  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  };
  
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration:800,
      easing :"ease-in-shine",
      delay:100,
    });
    
  },[])

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Products />
      <Banner />
    </div>
  );
}

export default App;