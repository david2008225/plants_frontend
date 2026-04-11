import React from 'react'
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className='bg-[#435339] text-white px-10 py-12'>
            <div  className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10'>
                <div >
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt=""  className='w-10' />
                        <h2 className='text-2xl font'>Planto.</h2>
                    </div>
                    <p className='mt-4 text-gray-300 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea, a tempore nesciunt autem dignissimos provident temporibus omnis laudantium sequi optio maiores neque tempora eaque velit quisquam reprehenderit quas aliquid.</p>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-4 '>Quick links</h3>
                    <ul className='space-y-2 text-gray-300'>
                        <li className='hover:text-white cursor-pointer'>Home</li>
                        <li  className='hover:text-white cursor-pointer'>Types Of plants</li>
                        <li  className='hover:text-white cursor-pointer'>contact</li>
                        <li className='hover:text-white cursor-pointer'>privacy</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-4'>For Every Update</h3>
                    <form action="" className='flex border border-gray-400 rounded-lg overflow-hidden'>
                        <input type="email" placeholder='Enter Email' className='bg-transparent px-4 py-2 outline-none text-sm w-full'/>
                        <button className='bg-white text-black px-4 text-sm font-semibold hover:bg-gray-200'>subscribe</button>
                    </form>
                </div>
            </div>
            <div className='text-center flex mt-7'>
                <div className='flex gap-4  ml-15'>
                    <p>AM</p>
                    <p>EN</p>
                    <p>RU</p>
                </div>
                <p className='ml-auto px-4 py-2 mr-15'>Planto. &copy; All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer