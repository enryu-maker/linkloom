import React from 'react'

export default function Contact() {
    return (
        <div
            className={`lg:w-[75%] w-[88%] space-y-5 mt-5 lg:mt-20 flex flex-col justify-between`}
        >
            <p
                className=' text-2xl underline underline-offset-4 font-Poppins font-bold text-text tracking-wide'
            >
                Contact Us
            </p>
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
            <div className='lg:w-[50%]  flex justify-between items-center'>
                <p
                    className=' text-sm font-Poppins text-texthigh tracking-wide'
                >
                    Customer Care Number :
                </p>
                <p
                    className=' text-sm font-Poppins text-text tracking-wide'
                >
                    0253 2351122
                </p>
            </div>
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
            <div className='lg:w-[50%]  flex justify-between items-center'>
                <p
                    className=' text-sm font-Poppins text-texthigh tracking-wide'
                >
                    Website :
                </p>
                <p
                    className=' text-sm font-Poppins text-blue-700 underline  underline-offset-4 font-semibold tracking-wide'
                >
                    www.swaroopagro.com
                </p>
            </div>
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
            <div className='lg:w-[50%]  flex justify-between items-center'>
                <p
                    className=' text-sm font-Poppins text-texthigh tracking-wide'
                >
                    Email:
                </p>
                <p
                    className=' text-sm font-Poppins text-start text-text tracking-wide'
                >
                    response@swaroopagro.com
                </p>
            </div>
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
            <div className='lg:w-[50%]  flex justify-between items-center'>
                <p
                    className=' text-sm font-Poppins text-texthigh tracking-wide'
                >
                    Address:
                </p>
                <p
                    className=' text-sm  w-[60%] lg:w-auto font-Poppins text-justify text-text tracking-wide'
                >
                     W/47(A) MIDC Area. Satpur Nashik-7 (MAHARASHTRA)
                </p>
            </div>
            <div
                className=' border-t-[0.5px] border-texthigh'
            />
        </div>
    )
}
