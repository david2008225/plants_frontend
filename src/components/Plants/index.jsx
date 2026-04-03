import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
const Plants = () => {
    const [plants,setPlants]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/plants")
        .then((response) => setPlants(response.data))
        .catch((error)=>console.error(error))
    }, [])
  return (
    <div className='bg-[#1b2316] min-h-screen p-10 text-white ' >
        <h1 className='text-center text-2xl mb-10 font-semibold'>Our Plants</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {
                plants.map((plant) => (
                    <div key={plant.id} className='bg-[#272e22] backdrop-blur-lg h-[500px] w-[400px] p-7  border-2 border-[#50564c] rounded-[77px] shadow-lg hover:scale-105 transition duration-300'>
                        <img src={plant.image} alt=""  className='mx-auto h-[300px] object-contain '/>
                        <h2 className='mt-4 text-lg font-semibold'>
                            {plant.name}
                        </h2>
                        <p className='text-sm text-gray-300 mt-1'>
                            {plant.description}
                        </p>
                        <div className='flex justify-between items-center mt-4'>
                            <span className='font-medium'>${plant.price}</span>
                            <button className=' cursor-pointer bg-white/10 p-2 rounded-lg hover:bg-white/20 transition'><MdOutlineShoppingBag /></button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Plants