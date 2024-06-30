import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { clearMovieData } from "../utils/store/movieListSlice";
import { removeUserDetails } from "../utils/store/userSlice";

const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(removeUserDetails())
    dispatch(clearMovieData())
  },[])

  return (
    <>
      <Outlet />
      <img className="w-full" alt="home background" src="/assets/home_bg.jpg" />
    </>
  );
};

export default Home;
