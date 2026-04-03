import React from 'react'
import philodendron from '/philodendron.png'
import right_arrow from '../../assets/arrow.png'
const Slider = () => {
    return (
        <div className='h-[100vh] bg-[#1b2316] w-full flex  justify-center items-center'>

            <div className="w-[180vh] h-[340px] rounded-[80px]
  bg-white/10
  backdrop-blur-[5px]
  border border-white/30
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  relative flex justify-between p-7 overflow-visible">
                <div>
                    <img className="absolute bottom-10 left-10 w-[400px] scale-125" src={philodendron} alt="" />
                    <div className='gap-7 flex justify-between flex-col ml-[420px] text-white'>
                        <h2 className='text-2xl'>We have small and best O2 plants collections</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum distinctio tempore. Voluptatibus quae asperiores magnam pariatur, architecto quod at error blanditiis reiciendis, nobis nisi odit numquam aliquid temporibus nam consectetur possimus repellendus, obcaecati quasi odio quisquam dolorem. Assumenda sapiente architecto magnam.</p>
                        <div className=''>
                            <button className='w-[120px] h-[40px] border border-2 rounded-xl '>Explore</button>
                            <div>
                                <button></button>
                                <button>
                                    <img src={right_arrow} alt="" />
                                </button>
                            </div>
                    
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Slider