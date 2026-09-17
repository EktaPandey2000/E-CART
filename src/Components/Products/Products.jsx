import React, { useState } from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

const ProductsData = [
  { id: 1, img: Img1, title: "Women Ethnic", rating: 5.0, color: "White", price: 1500, aosDelay: "0" },
  { id: 2, img: Img2, title: "Women Western", rating: 4.5, color: "Red", price: 1200, aosDelay: "200" },
  { id: 3, img: Img3, title: "Goggles", rating: 4.7, color: "Brown", price: 900, aosDelay: "400" },
  { id: 4, img: Img4, title: "Printed T-Shirt", rating: 4.4, color: "Yellow", price: 800, aosDelay: "600" },
  { id: 5, img: Img2, title: "Fashion T-Shirt", rating: 4.5, color: "Pink", price: 1000, aosDelay: "800" },
];

const Products = () => {
  const [cartItems, setCartItems] = useState({});
  const [showCart, setShowCart] = useState(false);

  const cartCount = Object.keys(cartItems).length;

  const cartTotal = Object.values(cartItems).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCartItems((prev) => ({
      ...prev,
      [product.id]: { ...product, quantity: 1 },
    }));
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: prev[id].quantity + 1 },
    }));
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      const newItems = { ...prev };
      if (newItems[id].quantity === 1) {
        delete newItems[id];
      } else {
        newItems[id] = { ...newItems[id], quantity: newItems[id].quantity - 1 };
      }
      return newItems;
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => {
      const newItems = { ...prev };
      delete newItems[id];
      return newItems;
    });
  };
  if (showCart) {
    return (
      <div className="mt-14 mb-12">
        <div className="container mx-auto px-4">

          <div className="flex items-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="flex items-center gap-2 text-primary font-semibold hover:opacity-80"
            >
              <FaArrowLeft />
              Back to Shopping
            </button>
          </div>

          <h1 className="text-3xl font-bold mb-8">My Cart ({cartCount})</h1>

          {Object.keys(cartItems).length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="bg-primary text-white py-2 px-6 rounded-md hover:opacity-90 transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Left: Item list */}
              <div className="flex-1 space-y-4">
                {Object.values(cartItems).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border rounded-lg p-4 shadow-sm"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[100px] h-[100px] object-cover rounded-md"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.color}</p>

                      <div className="flex items-center gap-1 mt-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm">{item.rating}</span>
                      </div>

                      <p className="font-bold text-lg mt-1">₹{item.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-blue-600 text-white w-8 h-8 rounded-md"
                        >
                          -
                        </button>

                        <span className="font-semibold w-6 text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-blue-600 text-white w-8 h-8 rounded-md"
                        >
                          +
                        </button>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="ml-4 text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                          <FaTrash />
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="font-bold text-xl">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Order summary */}
              <div className="w-full lg:w-[320px] h-fit border rounded-lg p-5 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Items ({cartCount})</span>
                  <span>₹{cartTotal}</span>
                </div>

                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-bold text-lg mb-4">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition font-semibold"
                >
                  Proceed to Checkout
                </button>
              </div>

            </div>
          )}
        </div> 
      </div>
    );
  }

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
          </p>
        </div>

        <div className="flex justify-end mb-8">
          <button
            type="button"
            onClick={() => setShowCart(true)}
            className="flex items-center gap-2 bg-primary px-5 py-2 rounded-md hover:opacity-90 transition"
          >
            <FaShoppingCart />
            <span>My Cart</span>
            <span className="bg-white text-primary font-bold rounded-full min-w-[25px] h-[25px] px-1 flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="w-[190px] space-y-3"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[190px] object-cover rounded-md hover:scale-105 duration-300"
                />
              </div>

              <div className="w-full">
                <h3 className="font-semibold text-base">{data.title}</h3>
                <p className="text-sm text-gray-500">{data.color}</p>

                <div className="flex items-center gap-1 mt-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm">{data.rating}</span>
                </div>

                <div className="mt-2">
                  <span className="font-bold text-lg">₹{data.price}</span>
                </div>

                {!cartItems[data.id] ? (
                  <button
                    type="button"
                    onClick={() => addToCart(data)}
                    className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between w-full mt-2">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(data.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      -
                    </button>
                    <span className="font-semibold">
                      {cartItems[data.id].quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increaseQuantity(data.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:opacity-90 transition"
          >
            View All
          </button>
        </div>

      </div>
    </div>
  );
};

export default Products;