import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    console.log(props)
    const product = props

  return (
    <div className='flex w-full px-[40px]'>
        <div className='flex flex-1 gap-[17px] w-full'>
            <div className='flex flex-col gap-[16px]'>
                <img className='h-[150px]' src={product?.product.image} alt={product?.product.name} />
                <img className='h-[150px]' src={product?.product.image} alt={product?.product.name} />
                <img className='h-[150px]' src={product?.product.image} alt={product?.product.name} />
                <img className='h-[150px]' src={product?.product.image} alt={product?.product.name} />
            </div>
            <div>
                <img className='w-[660px] h-[700px]' src={product?.product.image} alt={product.name} />
            </div>
        </div>

        <div className='mx-[70px] flex flex-1 w-full flex-col'>
            <h1 className='text-[2rem] font-medium'>{product?.product.name}</h1>
            <div className='flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[13px] font-medium'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className='flex my-[40px] gap-[30px] text-[34px] font-bold'>
                <p className='text-red-500'>${product?.product.new_price}</p>
                <p className='text-[#818181] line-through'>${product?.product.old_price}</p>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam perferendis quo velit ea et nesciunt ducimus rerum maiores deserunt facere soluta recusandae totam fugiat, deleniti beatae quae doloremque minima. Delectus et illo enim molestiae, sed magni necessitatibus totam animi.
            </div>
            <div>
                <h1 className='mt-[50px] text-[#656565] font-semibold'>Select Size</h1>
                <div className='flex my-[30px] gap-[20px]'>
                    <div className='py-[16px] px-[20px] border border-gray-400 cursor-pointer'>S</div>
                    <div className='py-[16px] px-[20px] border border-gray-400 cursor-pointer'>M</div>
                    <div className='py-[16px] px-[20px] border border-gray-400 cursor-pointer'>L</div>
                    <div className='py-[16px] px-[20px] border border-gray-400 cursor-pointer'>XL</div>
                    <div className='py-[16px] px-[20px] border border-gray-400 cursor-pointer'>XXL</div>
                </div>
            </div>
            <button className='py-[20px] px-[40px] font-medium w-[200px] text-[14px] text-white bg-red-500 mb-[40px] outline-none'>ADD TO CART</button>
            <p className='mt-[10px]'>
                <span className='font-bold'>category :</span>Women, T-shirt, Crop-Top
            </p>
            <p className='mt-[10px]'>
                <span className='font-bold'>Tags :</span>Modern, Latest, Classic
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay