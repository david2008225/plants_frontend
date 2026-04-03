import React from 'react'
import bg from '../../assets/bg-1.jpg'
import live from '../../assets/live.png'
import elacuf from '/elacuf.png'
import anthurium from '/anthurium.png'
import cart from '../../assets/cart.png'
const Hero = () => {
  return (
    <div style={{ backgroundImage: `url("${bg}"` }} className='w-full h-[1800px] bg-center bg-cover relative'>
      <div className='p-[2rem] text-white w-[892px] opacity-[75%]'>
        <h1 className='font-semibold text-[118px]'>Breath Natural</h1>
        <p className='text-[23px] mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum pariatur igap5llum in neque totam sed!</p>
        <div className='flex items-center gap-5'>
          <button className='w-[217px] h-[64px] border border-white rounded-[12px] text-[28px]'>  Explore </button>
          <button>
            <img src={live} alt="" className='w-[196px] h-[64px]' />
          </button>
        </div>

      </div>
      <div className='flex flex-col w-full gap-30 items-center absolute bottom-30'>


        <div className="w-[180vh] h-[340px] rounded-[100px]
  bg-white/10
  backdrop-blur-[5px]
  border border-white/30
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  relative flex justify-between p-7 overflow-visible">

          <img
            src={elacuf}
            alt=""
            className="absolute bottom-10 left-10 w-[400px] scale-125"
          />

          <div className='text-white flex flex-col gap-7 h-full w-full justify-center items-end '>
            <h1 className='text-2xl'>Fore small Decs ai plate</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quos.</p>
            <h2 className='text-3xl'>Rs.599/-</h2>
            <div className='flex items-center gap-[10px]'>
              <button className='w-[150px] h-[50px] border-2 rounded-2xl cursor-pointer'>Explore</button>
              <button className='w-[50px] h-[50px] flex items-center justify-center border border-2 rounded-2xl'> <img src={cart} alt="" className='w-[30px] h-[30px]' /></button>
            </div>
          </div>
        </div>
        <div className="w-[180vh] h-[340px] rounded-[100px]
  bg-white/10
  backdrop-blur-[5px]
  border border-white/30
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  relative flex justify-between p-7 overflow-visible">



          <div className='text-white flex flex-col gap-7 h-full w-full justify-center items-start '>
            <h1 className='text-2xl'>Fore small Decs ai plate</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quos.</p>
            <h2 className='text-3xl'>Rs.599/-</h2>
            <div className='flex items-center gap-[10px]'>
              <button className='w-[150px] h-[50px] border-2 rounded-2xl cursor-pointer'>Explore</button>
              <button className='w-[50px] h-[50px] flex items-center justify-center border border-2 rounded-2xl'> <img src={cart} alt="" className='w-[30px] h-[30px]' /></button>
            </div>
          <img
            src={anthurium}
            alt=""
            className="absolute bottom-10 right-0 w-[400px] scale-125"
          />
        </div>








      </div>

    </div>
    </div>
  )
}

export default Hero