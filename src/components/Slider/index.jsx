import React, { useEffect, useState } from 'react'
import philodendron from '/philodendron.png'
import right_arrow from '../../assets/arrow.png'
import left_arrow from '../../assets/arrow1.png'
import buys1 from '/buys1.png'
import succulent from '/succulent.png'
import axios from 'axios'
const Slider = () => {
    const [slider, setSlider] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:3001/slider")
            .then((response) => setSlider(response.data))
            .catch((error) => console.error(error))
    }, [])


    useEffect(() => {
        if (slider.length === 0) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === slider.length - 1 ? 0 : prev + 1

            )
        }, 6000)
        return () => clearInterval(interval)
    }, [slider])

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === slider.length - 1 ? 0 : prev + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? slider.length - 1 : prev - 1
        )
    }
    if (slider.length === 0) return null
    const plant = slider[currentIndex]
    return (
        <div className='bg-[#1b2316] flex w-full justify-center h-[80vh]'>
            <div className="w-[180vh] h-[340px] rounded-[80px]
  bg-white/10
  backdrop-blur-[5px]
  border border-white/30
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  relative flex justify-between p-7 overflow-visible">
                <div>
                    <img className="absolute bottom-10 left-10 w-[400px] scale-125" src={plant.image} alt="" />
                    <div className='h-full flex justify-between flex-col ml-[420px] text-white'>
                        <div className='flex flex-col gap-7'>
                            <h2 className='text-2xl font-bold'>{plant.tagline}</h2>
                            <p>{plant.description}</p>

                        </div>



                        <div className='flex justify-between items-center'>
                            <button className='cursor-pointer w-[120px] h-[40px] border border-2 rounded-xl '>Explore</button>
                            <div className='w-[70px] h-[70px] flex gap-5 '>
                                <button onClick={prevSlide}>
                                    <img src={left_arrow} alt="" />
                                </button>
                                <button onClick={nextSlide}>
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