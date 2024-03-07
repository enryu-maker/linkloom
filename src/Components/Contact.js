import React from 'react'

export default function Contact({
    data
}) {
    return (
        <div
            className={`lg:w-[75%] w-[88%] space-y-5 mt-5 lg:mt-20 flex flex-col justify-between`}
        >
            <p
                className=' text-2xl underline underline-offset-4 font-Poppins font-bold text-text tracking-wide'
            >
                Contact Us
            </p>
            {
                data?.contact?.map((item, index) => (
                    <>
                        <div
                            className=' border-b-[0.5px] border-texthigh'
                        />
                        <div className='lg:w-[50%]  flex justify-between items-center'>
                            <p
                                className=' text-sm font-Poppins text-texthigh tracking-wide'
                            >
                                {`${item?.title} :`}
                            </p>
                            <p
                                className=' text-sm font-Poppins text-text tracking-wide'
                            >
                                {item?.value}
                            </p>
                        </div>
                    </>
                ))
            }
            <div
                className=' border-b-[0.5px] border-texthigh'
            />
        </div>
    )
}
