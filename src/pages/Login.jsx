

const Login = () => {
  return (
    <div className="w-full h-[80vh] bg-[#fce3fe] pt-[100px]">
      <div className="w-[480px] h-[500px] bg-white m-auto py-[30px] px-[50px]">
        <h1 className="my-[20px] text-[2rem] font-bold">Sign Up</h1>
        <div className="flex flex-col gap-7 mt-7">
          <input className="h-[32px] w-full pl-[20px] outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[15px]" type="text" placeholder="Your name"/>
          <input className="h-[32px] w-full pl-[20px] outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[15px]" type="email" placeholder="email address"/>
          <input className="h-[32px] w-full pl-[20px] outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[15px]" type="password" placeholder="password"/>
        </div>
        <button className="w-[380px] h-[50px] text-white bg-red-500 my-[30px] border-none text-[18px] font-medium cursor-pointer }">Continue</button>
        <p className="text-[#5c5c5c] text-[17px] font-medium">
          Already have an account? <span className="text-red-500 font-medium">Login here</span>
        </p>
        <div className="flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[14px]">
          <input type="checkbox" name="" id=""/>
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login