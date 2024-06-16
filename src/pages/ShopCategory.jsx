import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Items from '../components/Items'

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)

  return (
    <div>
      <img className='block m-[32px] w-[90%]' src={props.banner} alt="banner" />
      <div className='flex mx-[150px] justify-between items-center'>
        <p>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className='py-[10px] flex items-center gap-2 justify-center px-[20px] rounded-[40px] border border-[#888]'>
          sort by <img className='w-[10px]' src={dropdown_icon} alt="dropdown" />
        </div>
      </div>
      <div className='my-[20px] mx-[170px] grid grid-cols-4 gap-[80px]'>
        {all_products.map((item, i) => (
          props.category === item.category ? (
            <Items 
              key={i} 
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : ''
        ))}
      </div>
      <div className='flex justify-center items-center my-[150px] mx-auto w-[180px] h-[55px] rounded-[60px] bg-[#ededed] text-[#787878] font-medium'>
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory