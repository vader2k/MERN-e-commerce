import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const ShopCategory = (props) => {
  const { data } = useContext(ShopContext)

  return (
    <div>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategory