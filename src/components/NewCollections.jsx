// import new_collection from '../assets/new_collections'
import Items from './Items'
import { useState, useEffect } from 'react'
import axios from 'axios'

const NewCollections = () => {

  const [newCollection, setNewCollection] = useState([])
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get("http://localhost:8000/server/v1/newCollection")
        setNewCollection(res.data.data)
        console.log(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])


  return (
    <div className='flex flex-col items-center gap-[10px] mb-[100px] max-w-[1400px] mx-auto'>
        <h1 className='text-[#171717] text-[30px] font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-[150px] h-[4px] rounded-[10px] bg-[#252525]'/>

        <div className='mt-[50px] grid grid-cols-4 gap-[30px]'>
            {newCollection.map((item, i) => (
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