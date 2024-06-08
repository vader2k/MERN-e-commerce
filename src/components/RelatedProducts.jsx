import data_product from '../assets/data'
import Items from './Items'

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh]'>
        <h1 className='text-[#171717] text-[1.5rem] font-medium'>Related Products</h1>
        <hr className='w-[150px] h-[4px] rounded-[10px] bg-[#252525]'/>
        <div className='mt-[50px] flex gap-[30px]'>
            {data_product.map((item, i) => (
                <Items 
                    key={i} 
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts