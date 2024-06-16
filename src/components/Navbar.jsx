import { Link, NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { ShopContext } from '../context/ShopContext'


const Navbar = () => {
  const [menu, setMenu] = useState('Shop')
  const { getTotalCartItems } = useContext(ShopContext)

  const handleLogOut = () => {
    localStorage.removeItem('auth')
    window.location.replace('/')
  }

  const navCat = [
    {id:1, name: 'Shop', path: '/'},
    {id:2, name: 'Men', path: '/men'},
    {id:3, name: 'Women', path: '/women'},
    {id:4, name: 'Kids', path: '/kids'},
  ]

  return (
    <nav className='flex font-General-Sans items-center justify-around shadow-md p-5'>
      <div className='flex items-center gap-3'>
        <img className='w-[40px]' src={logo} alt="logo" />
        <p className='text-[#171717] text-[1.5rem] font-bold'>SHOPPER</p>
      </div>
      <ul className='flex items-center gap-12 text-[#626262] font-medium'>
        {navCat.map((item) => (
          <li className='cursor-pointer relative' key={item.id}>
            <NavLink 
              to={item.path}
              onClick={()=> setMenu(item.name)}
            >
              <span>{item.name}</span>
              {menu === item.name ? <div className='absolute bottom-[-5px] h-[3px] w-[20px] bg-red-500 rounded-3xl'/> : ''}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-5'>
        {localStorage.getItem('auth') 
        ? <button className='px-6 py-2 border border-gray-400 rounded-2xl font-medium' onClick={handleLogOut}>Logout</button> 
        : <Link to='/login'>
          <button className='px-6 py-2 border border-gray-400 rounded-2xl font-medium'>Login</button>
        </Link>}
        <Link to='/cart'>
          <div className='relative'>
            <img className='w-[20px]' src={cart_icon} alt="cart" />
            <div className='absolute h-[10px] w-[10px] right-[-10px] top-[-10px] bg-red-500 p-2 flex items-center justify-center rounded-full text-white text-[0.85rem]'>{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar