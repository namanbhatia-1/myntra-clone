import React from "react";
import { useState } from "react";

function Login() {
  const [checked, setChecked] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleSubmit = async () => {

    if (!checked) {
      alert("You must agree to the terms before continuing.");
      return;
    }

    try {
      const response = await fetch("https://myntra-clone-backend-pvtl.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center font-Teko bg-pink-50">
        <div className=" w-1/2 h-full flex justify-center items-center">
          <div className=" w-[60%] h-[80%] m-9 bg-white rounded-3xl">
            <img className="rounded-t-3xl" src="./log.png" alt="log" />
            <p className="flex ml-14 mt-10 text-2xl gap-2">
              <p>Login</p>
              <p className="opacity-60">or</p>
              <p>Signup</p>
            </p>

            <p className="absolute  mt-7 ml-14 text-lg">+91</p>
            <div className="flex justify-center mt-5 mr-5">
              <input
                className="w-[80%] py-2 border pl-9 p-5 text-lg rounded-sm "
                placeholder="  | Mobile Number*"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className="ml-14 mt-6 w-[70%] justify-start items-center flex  gap-5">
              <div className="">
                <input
                  type="checkbox"
                  id="my-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>

              <div className="text-lg flex ">
                <p className="text-gray-900">
                  By continuing, I agree to the
                  <span className="text-pink-400"> Terms of Use </span>&
                  <span className="text-pink-400"> Privacy Policy </span> and I
                  am above 18 years old.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center mt-5 ">
              <div type="button" onClick={handleSubmit}
                  disabled={!checked}
                className={`w-[80%] cursor-pointer  flex justify-center p-2 text-xl ${
                  checked ? "bg-pink-400" : "bg-slate-400"
                }`}>
                <button
                  className="text-white"
                >
                  CONTINUE
                </button>
              </div>
            </div>

            <p className="mt-5 ml-12">
              Have trouble logging in?
              <span className="text-pink-400"> Get help</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
