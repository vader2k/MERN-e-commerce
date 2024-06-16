import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [state, setState] = useState("Register");
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    });
  };

  const login = async() => {
    try {
      const res = await axios.post("http://localhost:8000/server/v1/login", {
        email: loginDetails.email,
        password: loginDetails.password
      })
      localStorage.setItem("auth", res.data.token)
      window.location.replace('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  const register = async() => {
    try {
      const res = await axios.post("http://localhost:8000/server/v1/register", loginDetails)
      localStorage.setItem("auth", res.data.token)
      window.location.replace('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="w-full h-[80vh] bg-[#fce3fe] pt-[100px]">
      <div className="w-[480px] h-[500px] bg-white m-auto py-[30px] px-[50px]">
        <h1 className="my-[20px] text-[2rem] font-bold">{state === "Register" ? "Sign Up" : "Login"}</h1>
        <div className="flex flex-col gap-7 mt-7">
          {state === "Register" && (
            <input
              onChange={handleInput}
              name="username"
              className="h-[32px] w-full pl-[20px] outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[15px]"
              type="text"
              placeholder="Your name"
              value={loginDetails.username}
            />
          )}
          <input
            onChange={handleInput}
            name="email"
            className="h-[32px] w-full pl-[20px] outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[15px]"
            type="email"
            placeholder="Email address"
            value={loginDetails.email}
          />
          <input
            onChange={handleInput}
            name="password"
            className="h-[32px] w-full pl-[20px] outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[15px]"
            type="password"
            placeholder="Password"
            value={loginDetails.password}
          />
        </div>
        <button onClick={state === "Register" ? register : login} className="w-[380px] h-[50px] text-white bg-red-500 my-[30px] border-none text-[18px] font-medium cursor-pointer">
          Continue
        </button>
        <p className="text-[#5c5c5c] text-[17px] font-medium">
          {state === "Register" ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setState(state === "Register" ? "Login" : "Register")} className="text-red-500 cursor-pointer font-medium">
            {state === "Register" ? "Login here" : "Register"}
          </span>
        </p>
        <div className="flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[14px]">
          <input type="checkbox" name="terms" id="terms" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
