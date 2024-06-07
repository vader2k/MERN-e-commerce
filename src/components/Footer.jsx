import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {

    const footerLinks = [
        {id:1, name:'Company'},
        {id:2, name:'Product'},
        {id:3, name:'Offices'},
        {id:4, name: 'About'},
        {id:5, name: 'Contact'},
    ]

    const footerIcons = [
        {id:1, icon:instagram_icon, name:'instagram'},
        {id:2, icon:pinterest_icon, name: 'pinterest'},
        {id:3, icon:whatsapp_icon, name: 'whatsapp'},
    ]
    
  return (
    <footer className='flex flex-col justify-center items-center gap-[50px]'>
        <div className='flex items-center gap-[20px]'>
            <img src={footer_logo} alt="footer logo" />
            <p className='text-[#383838] text-[40px] font-bold'>SHOPPER</p>
        </div>
        <ul className='flex gap-[50px] text-[#252525] text-[20px]'>
            {footerLinks.map(link => (
                <li className='cursor-pointer' key={link.id}>{link.name}</li>
            ))}
        </ul>
        <div className='flex gap-[20px]'>
            {footerIcons.map((icons) => (
                <img key={icons.id} src={icons.icon} alt={icons.name} />
            ))}
        </div>
        <div className='flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a]'>
            <hr className='w-[80%] rounded-[10px] h-[3px] bg-[#c7c7c7]'/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer