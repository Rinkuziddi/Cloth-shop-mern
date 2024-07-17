import React, { useEffect, useState, useMemo } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastStatus = {
  success: 1,
  error: 2,
}

export const toastFunction = (type, response) => {
  const state = type;
  const message = response;
  return {state, message};
}

const Toaster = ({ props }) => {
  const showToast = () => {

    if (props?.state === 2) {
      toast.error(props?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (props?.state === 1) {
      toast.success(props?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  useEffect(() => {
    showToast();
  }, [props])


  return (
    <>
      <ToastContainer />
    </>
  )
}
export default Toaster;