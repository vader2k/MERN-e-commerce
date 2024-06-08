import new_collection from '../assets/new_collections'
import Items from './Items'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] mb-[100px] max-w-[1400px] mx-auto'>
        <h1 className='text-[#171717] text-[30px] font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-[150px] h-[4px] rounded-[10px] bg-[#252525]'/>

        <div className='mt-[50px] grid grid-cols-4 gap-[30px]'>
            {new_collection.map((item, i) => (
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

export default NewCollections