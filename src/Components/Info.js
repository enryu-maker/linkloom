import React from 'react'

export default function Info({
    data
}) {
    return (
        <div
            className={`lg:w-[75%] w-[88%] mt-10 lg:mt-20  space-y-5 lg:space-y-0 flex flex-col lg:flex-row justify-between `}
        >
            <img
                alt='info'
                src={"https://swaroop.nerdtech.in"+data?.product?.image}
                className='h-[300px] lg:w-[50%] outline-none font-Poppins object-contain rounded-lg'
            />
            <div
                className='lg:w-[48%]  flex flex-col justify-evenly items-start space-y-2'>
                <p
                    className=' text-2xl underline underline-offset-4 font-Poppins font-bold pb-5 lg:pb-0 text-texthigh tracking-wide'
                >
                    Product Details
                </p>
                <p
                    className=' text-2xl font-Poppins text-text tracking-wide'
                >
                    {data?.product?.name}
                </p>
                <p
                    className=' text-base font-Poppins text-justify text-texthigh tracking-wide'
                >
                    {data?.product?.directions_for_use}
                </p>
                
            </div>
        </div>
    )
}
