import React from 'react'

export default function Content({
    data
}) {
    return (
        <div
            className={`lg:w-[75%] w-[88%] space-y-5 mt-5 lg:mt-20 flex flex-col justify-between`}
        >
            <p
                className=' text-2xl underline underline-offset-4 font-Poppins font-bold text-text tracking-wide'
            >
                Storage Precautions
            </p>
            <p
                className=' text-sm font-Poppins text-justify lg:text-left text-text tracking-wide'
            >
                {data?.product?.storage_precautions}
            </p>
            <p
                className=' text-2xl underline underline-offset-4 font-Poppins font-bold text-text tracking-wide'
            >
                Safety Precautions
            </p>
            <p
                className=' text-sm font-Poppins text-justify text-text tracking-wide'
            >
                {data?.product?.safety_precautions}
            </p>
        </div>
    )
}
