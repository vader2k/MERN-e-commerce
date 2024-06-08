import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const product = props

    
  return (
    <div>
        HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" />{product?.product.category} <img src={arrow_icon} alt="arrow" /> {product?.product.name}

    </div>
  )
}

export default Breadcrum