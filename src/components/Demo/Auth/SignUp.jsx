import React from 'react'

import Input from '../../../utils/Input';
import { MdKeyboardArrowLeft } from 'react-icons/md';
const SignUp = ({ setSignReq }) => {
    return (
        <div className='size mt-[6rem] text-center'>
            <h2 className='text-2xl'>Sign in with email</h2>
            <p className='w-full sm:w-[25rem] mx-auto py-[3rem]'>
                Enter the email address to create Account.
            </p>
            <form className='flex flex-col gap-4'>
                <Input type="email" title="email" />
                <button
                    className='px-4 py-2 text-sm rounded-full bg-black
                hover:bg-black/80 text-white w-fit mx-auto'>Continue
                </button>
            </form>
            <button
                onClick={() => setSignReq("")}
                className='mt-5 text-sm text-green-600 hover:text-green-700
            flex items-center mx-auto'>
                <MdKeyboardArrowLeft />
                All sign Up Options
            </button>
        </div>
    )
}

export default SignUp