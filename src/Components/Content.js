import React from 'react'

export default function Content() {
    return (
        <div
            className={`lg:w-[75%] w-[88%] space-y-5 mt-5 lg:mt-20 flex flex-col justify-between`}
        >
            <p
                className=' text-2xl underline underline-offset-4 font-Poppins font-bold text-text tracking-wide'
            >
                Expiry Date
            </p>
            <p
                className=' text-sm font-Poppins text-justify lg:text-left text-text tracking-wide'
            >
                2 years from the date of manufacture if stored in a cool, dry place away from direct sunlight and moisture.
            </p>
            <p
                className=' text-2xl underline underline-offset-4 font-Poppins font-bold text-text tracking-wide'
            >
                Safety Precautions
            </p>
            <p
                className=' text-sm font-Poppins text-justify text-text tracking-wide'
            >
                Keep out of reach of children. Avoid contact with skin, eyes or clothing. Wear protective gloves, clothing and eye/face protection. Do not breathe dust. Wash hands thoroughly after handling. If on skin: Wash with plenty of water. If in eyes: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing. If skin irritation or rash occurs: Get medical advice/attention. If eye irritation persists: Get medical advice/attention. Dispose of
                contents/container in accordance with local, regional, national, and international regulations.
            </p>
        </div>
    )
}
