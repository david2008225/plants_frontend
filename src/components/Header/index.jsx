import React from 'react'
import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import cart from "../../assets/cart.png"

const Header = () => {
    return (
        <header className='w-full flex items center justify-between px-10 py-4 bg-[#1b2316] text-white'>
            <div className='flex items-center gap-2 '>
                <img src={logo} alt=""  className='w-8 h-8'/>
                <h2 className='text-xl font-semibold'>Planto.</h2>
            </div>
            <ul className='flex gap-8 text-sm font-medium'>
                <li className='hover:text-green-300 cursor-pointer'>Home</li>
                <li className='hover:text-green-300 cursor-pointer'>Plants</li>
                <li className='hover:text-green-300 cursor-pointer'>More</li>
                <li className='hover:text-green-300 cursor-pointer'>Contact</li>
            </ul>
            <div className='flex items-center gap-5'>
                <img src={cart} alt="" className='w-5 h-5 cursor-pointer hover:scale-110 transition duration-200'/>
                <img src={search} alt="" className='w-5 h-5 cursor-pointer hover:scale-110 transition duration-200'/>
            </div>
            
        </header>
    )
    
}


export default Header