import React from 'react'
import { IMAGE } from '../Assets/Image'

export default function Header() {
    return (
        <div
            className='lg:h-[75px] h-[80px] w-full sticky top-0 z-50 bg-white shadow-lg flex justify-center lg:justify-between items-center'
        >
            <img
                alt='logo'
                className='lg:h-[80%] h-[60%] w-[88%] lg:w-auto object-contain lg:px-10'
                src={IMAGE.logo}
            />
        </div>
    )
}
