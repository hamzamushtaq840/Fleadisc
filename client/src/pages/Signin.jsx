import React, { useContext, useState } from 'react'
import back from './../assets/back.svg'
import { useNavigate } from "react-router-dom";
import google from './../assets/google.svg'
import { useGoogleLogin } from '@react-oauth/google';
import axios from './../api/axios'
import AuthContext from '../context/AuthProvider';

const Signin = () => {
    const navigate = useNavigate();
    const [registrationState, setRegistrationState] = useState({ email: '', password: '' })
    const [loginState, setLoginState] = useState({ email: '', password: '' })
    const { setAuth } = useContext(AuthContext)

    const handleRegistrationChange = (e) => {
        setRegistrationState({ ...registrationState, [e.target.name]: e.target.value })
    }
    const handleSigninChange = (e) => {
        setLoginState({ ...loginState, [e.target.name]: e.target.value })
    }

    //for simple form signin
    const handleSignin = (e) => {
        e.preventDefault()

        axios.post('/user/login', { email: loginState.email, password: loginState.password })
            .then((res) => {
                if (!res.data.profilePicture)
                    res.data.profilePicture = null
                console.log(res.data);
                setAuth(res.data)
            })
            .catch(e => console.log(e.response.data))
    }

    //for google login
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            axios.post('/user/login', { googleAccessToken: tokenResponse.access_token })
                .then((res) => {
                    console.log(res.data);
                    setAuth(res.data)
                    navigate('/')
                })
                .catch(e => console.log(e))
        },
        onError: errorResponse => console.log(errorResponse),
    });

    // //for simple form signup
    // const handleRegistration = (e) => {
    //     e.preventDefault()
    //     axios.post('/user/register', { email: registrationState.email, password: registrationState.password })
    //         .then((res) => {
    //             if (res.status === 201)
    //                 navigate('/signin/country')
    //         })
    //         .catch(e => console.log(e))
    // }


    //for google signup


    return (
        <div className='min-h-screen flex flex-col' data-ux_mode="redirect">
            <header><img src={back} alt="back button" onClick={() => navigate(-1)} className='hover:cursor-pointer p-[32px]' /></header>
            <div className='flex flex-1 sm:items-center md:items-center lg:items-center xl:items-center 2xl:items-center pb-[200px] flex-col mx-[46px] justify-center'>
                <h1 className='font-[700] max-w-[400px] font-sans leading-[39px] text-[2rem]  w-full'>Sign in</h1>
                <div className='max-w-[400px] mt-[27px] flex flex-col items-center  w-full'>
                    <button onClick={() => login()} className='border max-w-[600px] bg-[#FFFFFF] rounded-[4px] border-[#D9D9D9] p-[0.75em] w-full font-[500] text-[0.875rem]  flex items-center'>
                        <img src={google} alt="" />
                        <h1 className='flex-1 '>Sign in with Google</h1>
                    </button>
                    <p className='my-[11px] font-dmsans text-[8px] text-[#A5A5A5] flex justify-center'>OR</p>
                    <form className='flex flex-col gap-[7px] w-full items-center  ' onSubmit={handleSignin}>
                        <input required type="email" className='p-[0.75em] max-w-[600px] w-full bg-[#F5F5F5] font-sans font-[500] text-[0.875rem] border rounded-[4px] border-[#D9D9D9]' placeholder='Email address' value={loginState.email} name="email" onChange={handleSigninChange} />
                        <input required type="password" className='p-[0.75em] max-w-[600px] w-full bg-[#F5F5F5] font-sans font-[500] text-[0.875rem] border rounded-[4px] border-[#D9D9D9]' placeholder='Password' value={loginState.password} name="password" onChange={handleSigninChange} />
                        <div className='flex justify-center'>
                            <button type="submit" className='buttonAnimation w-[7.5em] h-[2.3125em] mt-[9px]  text-[0.875rem] font-[700] bg-primary text-[#ffff] shadow-2xl rounded-[6px]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 6px 4px -1px rgba(0, 0, 0, 0.06)" }}>Sign in</button>
                        </div>
                    </form>
                    {/* <div className='my-[50px] border-[.1px] border-[#D9D9D9]'></div> */}
                    <div className='mt-6 mx-4 w-full max-w-[380px] h-[2px] bg-[#D9D9D9]'></div>
                    <p className='mt-6 w-full text-center font-dmsans text-[12px] text-[#A5A5A5] flex justify-center'>Don't have an account?<span onClick={() => navigate('/signup')} className='font-dmsans text-[12px] text-[#A5A5A5] hover:underline font-bold hover:text-[#8ab4f8] pl-[4px] cursor-pointer'>Create Account.</span></p>
                </div>
            </div >

            {/* <div className='flex  flex-col mx-[46px] justify-center '>
                <h1 className='font-[700] font-sans leading-[39px] text-[2rem] self-start'>Create account</h1>
                <div className='mt-[27px]'>
                    <button onClick={() => register()} className='border rounded-[4px] bg-[#FFFFFF]  border-[#D9D9D9] p-[0.75em] w-full font-[500] text-[0.875rem]  flex items-center'>
                        <img src={google} alt="" />
                        <h1 className='flex-1'>Sign up with Google</h1>
                    </button>
                    <p className='my-[11px] font-dmsans text-[8px] text-[#A5A5A5] flex justify-center'>OR</p>
                    <form className='flex flex-col gap-[7px]' onSubmit={handleRegistration}>
                        <input required type="email" className='p-[0.75em] bg-[#F5F5F5] font-sans font-[500] text-[0.875rem] border rounded-[4px] border-[#D9D9D9]' placeholder='Email address' value={registrationState.email} name="email" onChange={handleRegistrationChange} />
                        <input required type="password" className='p-[0.75em] bg-[#F5F5F5] font-sans font-[500] text-[0.875rem] border rounded-[4px] border-[#D9D9D9]' placeholder='Password' value={registrationState.password} name="password" onChange={handleRegistrationChange} />
                        <div className='flex justify-center'><button type="submit" className='w-[7.5em] h-[2.3125em] mt-[9px] text-[0.875rem] font-[700] bg-primary text-[#ffff] shadow-2xl rounded-[6px]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 6px 4px -1px rgba(0, 0, 0, 0.06)" }}>Sign up</button></div>
                    </form>
                </div>
            </div > */}

        </div >
    )
}

export default Signin