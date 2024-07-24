import React, { useState, useEffect } from 'react'
import { GET_SIDEBAR } from '../../APIEndpoints';
import Navbar from '../../constants/LeftSideBar';

const Home = () => {

  const getAllSideBar = async () => {
    await GET_SIDEBAR()
      .then((res) => {
        console.log("RES", res);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getAllSideBar();
    console.log("INsdfs ");
  }, []);

  return (
    <>
      <Navbar />
      <div>Home Page</div>
    </>
  )
}

export default Home