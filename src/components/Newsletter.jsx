

const Newsletter = () => {
  return (
    <div className="w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[100px] hero gap-[30px]">
        <h1 className="text-[#454545] text-[40px] font-semibold">Get Exclusive Offers On Your Email</h1>
        <p className="text-[#454545] text-[20px]">Subscribe to our newsletter and stay updated</p>
        <div className="flex items-center justify-between bg-white w-[600px] h-[60px] rounded-[80px] border border-[#e3e3e3]">
            <input className="w-[500px] ml-[30px] outline-none text-[#616161] font-Supreme text-[16px]" type="email" placeholder="enter valid email" />
            <button className="w-[180px] h-[60px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter