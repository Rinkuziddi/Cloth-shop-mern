import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { LOGIN } from "../../APIEndpoints";
import Toaster, { toastFunction, toastStatus } from "../../constants/Toaster";
const LoginPage = () => {
  const navigate = useNavigate();

  const [toastProps, setToastProps] = useState({});
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'mobileNumber' ? Number(value) : value,
    });
  };

  const addData = async () => {
    await LOGIN(formData)
      .then((res) => {
        console.log("RES",res);
        if (res?.data?.statusCode === 200) {
          setToastProps(toastFunction(toastStatus.success, "Login successfully"));
          localStorage.setItem('TOKEN',res?.data?.data?.token);
          localStorage.setItem('USER',JSON.stringify(res?.data?.data?.user));
          setFormData({});
          setTimeout(() => {
            navigate('/Home');
          }, 2000);
        }
        else if (res?.data?.statusCode === 401) {
          setToastProps(toastFunction(toastStatus.error, "User already exists"));
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3Vwd2s2MTg0MzM0NC13aWtpbWVkaWEtaW1hZ2UtbGtocWw2YWIuanBn.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              name="password"
              onChange={handleInputChange}
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button onClick={(event) => { addData() }}  className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Login
            </button><br />
            <button onClick={() => { navigate("/Register"); }} className="bg-blue-700 text-white font-bold mt-3 py-2 px-4 w-full rounded hover:bg-blue-600">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;