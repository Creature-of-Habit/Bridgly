//import React from 'react'

const Input = ({ type, title }) => {
    return (
        <div className='flex flex-col gap-2'>
            <label>{title}</label>
            <div>
                <input
                    className='text-center outline-black bg-black/30 w-1/2 items-center'
                    type={type} />
            </div>

        </div>
    )
}

export default Input