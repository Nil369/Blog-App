import React, { useState, useEffect } from "react";
import { login, logout } from "./store/slice/authSlice";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1500);
      });
  }, []);

  return !loading ? (
    <>
      {document
        .querySelector("body")
        .classList.add("bg-zinc-800", "text-white")}

      <div className="max-w-screen mx-auto min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet/>
        </main>
        <Footer />
      </div>
    </>
  ) : (
    <>
      {document
        .querySelector("body")
        .classList.add("bg-zinc-800", "text-gray-200", "min-h-screen")}
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img
          className="w-56 h-56 mb-6 animate-pulse"
          src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif"
          alt="Loading Icon"
        />
        <h1 className="text-yellow-500 font-extrabold text-4xl md:text-6xl text-center my-5">
          Loading...
        </h1>
        <p className="text-gray-300 text-xl md:text-xl text-center max-w-xl">
          An unexpected error has occurred while loading. Please try again later
          or contact support if the issue persists.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-orange-600 text-white text-sm md:text-base font-medium rounded-lg shadow-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 transition"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </>
  );
}

export default App;
