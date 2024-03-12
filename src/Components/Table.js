import React from 'react'

export default function Contact({
    data
}) {
    return (
        <div
            className={`lg:w-[75%] w-[88%] space-y-5 mt-5 lg:mt-20 flex flex-col justify-between`}
        >
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
            <div className='w-full  flex flex-row justify-between items-center'>
                <div className='flex w-[50%] flex-col'>
                    <p
                        className=' text-base font-Poppins  text-texthigh tracking-wide'
                    >
                        Batch No :
                    </p>
                    {/* <p
                        className=' text-sm font-Poppins text-text tracking-wide'
                    >
                        {data?.batch_no}
                    </p> */}
                </div>
                <div className='flex w-[50%] flex-col'>
                    <p
                        className=' text-sm font-Poppins text-texthigh tracking-wide'
                    >
                        Mfg :
                    </p>
                    {/* <p
                        className=' text-sm font-Poppins text-text tracking-wide'
                    >
                        {data?.mfg_date}
                    </p> */}
                </div>

            </div>
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
            <div className='w-full  flex flex-row justify-between items-center'>
                <div className='flex w-[50%] flex-col'>
                    <p
                        className=' text-base font-Poppins  text-texthigh tracking-wide'
                    >
                        Expiry data :
                    </p>
                    {/* <p
                        className=' text-sm font-Poppins text-text tracking-wide'
                    >
                        {data?.expiry_date}
                    </p> */}
                </div>
                <div className='flex w-[50%] flex-col'>
                    <p
                        className=' text-base font-Poppins  text-texthigh tracking-wide'
                    >
                        Unique Identifier or GSTIN  :
                    </p>
                    {/* <p
                        className=' text-sm font-Poppins text-text tracking-wide'
                    >
                        {data?.expiry_date}
                    </p> */}
                </div>
            </div>
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
            <div className=' flex justify-between items-center'>
                <p
                    className='text-base lg:text-lg font-Poppins capitalize text-texthigh tracking-wide'
                >
                    Direction for Use
                    Read Enclosed LEAFLET
                </p>
                <button
                    onClick={() => {
                        window.open("https://swaroop.nerdtech.in" + data?.product?.leaflet)
                    }}
                    className=' text-base font-Poppins font-bold rounded-md bg-texthigh px-5 py-2 text-start text-white tracking-wide'
                >
                    Download
                </button>
            </div>
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
        </div>
    )
}
