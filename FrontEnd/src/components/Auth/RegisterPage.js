import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Toaster, { toastFunction, toastStatus } from "../../constants/Toaster";
import { CREATE_USER } from "../../APIEndpoints";
const RegisterPage = () => {
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
        await CREATE_USER(formData)
            .then((res) => {
                console.log("RES",res);
                const message = res?.data?.message;
                console.log("MESSAGE",message);
                if (res?.data?.statusCode === 200) {
                    setToastProps(toastFunction(toastStatus.success, message));
                    setFormData({});
                    setTimeout(() => {
                        navigate('/Login');
                    }, 2000);
                }
                else if (res?.data?.statusCode === 401) {
                    setToastProps(toastFunction(toastStatus.error, message));
                }
                else {
                    setToastProps(toastFunction(toastStatus.error, message));
                }
            })
            .catch((err) => {
                console.log("ERROR", err);
            });
    };

    return (
        <div>
            <Toaster props={toastProps} />
            <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
                <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
                    <div
                        className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                        style={{
                            backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3Vwd2s2MTg0MzM0NC13aWtpbWVkaWEtaW1hZ2UtbGtocWw2YWIuanBn.jpg)`,
                        }}
                    ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <p className="text-xl text-gray-600 text-center">Welcome To Registration page</p>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                type="text"
                                required
                                onChange={handleInputChange}
                                name="name"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Mobile Number
                            </label>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                type="number"
                                required
                                onChange={handleInputChange}
                                name="mobileNumber"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                type="email"
                                required
                                onChange={handleInputChange}
                                name="email"
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
                                onChange={handleInputChange}
                                name="password"
                            />
                        </div>
                        <div className="mt-8">
                            <button onClick={(event) => { addData() }} className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                                Submit
                            </button><br />
                            <button onClick={() => { navigate("/Login") }} className="bg-blue-700 text-white font-bold mt-3 py-2 px-4 w-full rounded hover:bg-blue-600">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RegisterPage;