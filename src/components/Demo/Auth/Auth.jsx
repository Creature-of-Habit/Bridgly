import React, { useState } from 'react';
import Modal from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { MdFacebook } from 'react-icons/md';
import SignUp from './SignUp';
import Signin from './Signin';

const Auth = ({ modal, setModal }) => {
    const [createUser, setCreateUser] = useState(false);
    const [signReq, setSignReq] = useState("");
    const hidden = modal ? 'visible opacity-100' : 'invisible opacity-0';
    return (
        <Modal modal={modal} setModal={setModal} hidden={hidden}>
            <section
                className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] 
                    bg-[url('src/utils/login_img.jpg')] bg-cover shadows transition-all duration-500
                    ${hidden}`}>
                <button
                onClick={() => setModal(false) } 
                className="absolute top-8 right-8 text-2x1 hover:opacity-50">
                    <LiaTimesSolid style={{ fill: '#ffffff', width: '50px', height: '50px' }} />
                </button>
                <div className="flex flex-col justify-center items-center gap-[3rem]">
                    {signReq === "" ? (
                        <>
                            <h2 className="text-2xl pt-[5rem]">{createUser ? "Join Bridgly" : "Welcome Back"}</h2>
                            <div className='flex flex-col gap-3 w-fit mx-auto'>
                                <Button
                                    icon={<FcGoogle className='text-xl' />}
                                    text={`${createUser ? "Sign Up" : "Sign In"} With Google`}
                                />
                                <Button
                                    icon={<MdFacebook className='text-xl text-blue-600' />}
                                    text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`}
                                />
                                <Button
                                    click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                                    icon={<AiOutlineMail className='text-xl' />}
                                    text={`${createUser ? "Sign Up" : "Sign In"} With Email`}
                                />

                            </div>
                            <p>
                                {createUser ? "Already have an account?" : "No Account?"}
                                <button
                                    onClick={() => setCreateUser(!createUser)}
                                    className='text-green-600 hover:text-green-700 font-bold ml-1'>
                                    {createUser ? "Sign In" : "Create One"}
                                </button>
                            </p>
                        </>
                    ) : signReq === "sign-in" ? (
                        <Signin setSignReq={setSignReq} />
                    ) : signReq === "sign-up" ? (
                        <SignUp setSignReq={setSignReq} />
                    ) : null
                    }
                    <p className='md:w-[30rem] mx-auto text-white text-center text-sm mb-[3rem]'>
                        Click {createUser ? '“Sign Up”' : '"Sign In"'} to agree to Bridgly’s Terms of Service
                        and acknowledge that Medium’s Privacy Policy applies to you.
                    </p>
                </div>
            </section>
        </Modal>
    )
};


export default Auth;

const Button = ({ icon, text, click }) => {
    return (
        <button
            onClick={click}
            className="flex items-center gap-10 sm:w-[20rem] border border-white px-3 py-2 rounded-full">
            {icon} {text}
        </button>
    );
};