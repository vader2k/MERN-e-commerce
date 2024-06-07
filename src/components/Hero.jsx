import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero h-screen w-full flex px-36 font-General-Sans'>
        <div className='flex-1 flex flex-col justify-center gap-5 pl-5 leading-[6rem]'>
            <h2 className='text-[#090909] text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='flex items-center gap-5'>
                    <p className='text-[#171717] text-[80px] font-bold'>new</p>
                    <img className='w-[85px]' src={hand_icon} alt="hand_icon" />
                </div>
                <p className='text-[#171717] text-[80px] font-bold'>collections</p>
                <p className='text-[#171717] text-[80px] font-bold'>for everyone</p>
            </div>
            <div className='flex justify-center items-center gap-[15px] w-[210px] h-[50px] rounded-[75px] mt-[20px] bg-[#ff4141] text-white text-[15px] font-medium'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>

        <div className='flex-1 flex items-center justify-center'>
            <img className='w-[500px]' src={hero_image} alt="hero bg" />
        </div>
    </div>
  )
}

export default Hero