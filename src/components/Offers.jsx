import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <section className='hero w-[60%] h-[60vh] flex mx-auto px-16 mb-28'>
        <div className='flex-1 flex flex-col justify-center'>
            <h1 className='text-[#171717] text-[50px] font-semibold'>Exclusive</h1>
            <h1 className='text-[#171717] text-[50px] font-semibold'>Offers For You</h1>
            <p className='text-[18px] font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[200px] h-[50px] rounded-[35px] bg-[#ff4141] border-none text-white text-[20px] font-medium mt-[20px] cursor-pointer'>Check Now</button>
        </div>

        <div className='flex-1 flex items-center justify-end pt-[50px]'>
            <img src={exclusive_image} alt="exclusive" />
        </div>
    </section>
  )
}

export default Offers