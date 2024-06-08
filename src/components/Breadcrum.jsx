import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const product = props

    
  return (
    <div className='flex items-center gap-4 text-[#5e5e5e] capitalize text-[13px] font-medium my-[60px] mx-[170px]'>
        HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" />{product?.product.category} <img src={arrow_icon} alt="arrow" /> {product?.product.name}
    </div>
  )
}

export default Breadcrum