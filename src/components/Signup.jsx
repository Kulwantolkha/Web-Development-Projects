import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup

// import React, { useState } from 'react'
// import authService from '../appwrite/auth'
// import { Link, useNavigate } from 'react-router-dom'
// import { login } from '../store/authSlice'
// import { Button, Input, Logo } from './index.js'
// import { useDispatch } from 'react-redux'
// import { useForm } from 'react-hook-form'

// function Signup() {
//     const navigate = useNavigate()
//     const [error, setError] = useState("")
//     const [isLoading, setIsLoading] = useState(false)
//     const dispatch = useDispatch()
//     const { register, handleSubmit } = useForm()

//     const create = async (data) => {
//         setError("")
//         setIsLoading(true)
//         try {
//             const userData = await authService.createAccount(data)
//             if (userData) {
//                 const userData = await authService.getCurrentUser()
//                 if (userData) dispatch(login(userData));
//                 navigate("/")
//             }
//         } catch (error) {
//             setError(error.message)
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//                 <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
//             </div>

//             <div className="group relative w-full max-w-lg">
//                 {/* Outer glow effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
//                 {/* Main card */}
//                 <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-10 border border-purple-100/50 shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
//                     {/* Corner accents */}
//                     <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-2xl"></div>
//                     <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-600/10 to-transparent rounded-2xl"></div>
                    
//                     {/* Logo section with animation */}
//                     <div className="mb-8 flex justify-center group/logo">
//                         <span className="inline-block w-full max-w-[100px] relative">
//                             <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover/logo:opacity-20 transition-opacity duration-300"></div>
//                             <div className="relative transform transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:rotate-3">
//                                 <Logo width="100%" />
//                             </div>
//                         </span>
//                     </div>

//                     {/* Header with gradient text */}
//                     <h2 className="text-center text-3xl font-bold leading-tight mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
//                         Sign up to create account
//                     </h2>
                    
//                     {/* Subtitle */}
//                     <p className="mt-4 text-center text-base text-gray-600 transition-colors duration-300">
//                         Already have an account?&nbsp;
//                         <Link
//                             to="/login"
//                             className="font-medium text-purple-600 hover:text-pink-600 transition-all duration-300 hover:underline decoration-2 underline-offset-2 decoration-purple-600 hover:decoration-pink-600 relative group/link"
//                         >
//                             Sign In
//                             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -z-10"></div>
//                         </Link>
//                     </p>

//                     {/* Enhanced error message */}
//                     {error && (
//                         <div className="mt-6 p-4 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-xl text-red-600 text-center animate-shake">
//                             <div className="flex items-center justify-center space-x-2">
//                                 <span className="text-red-500">⚠️</span>
//                                 <span className="font-medium">{error}</span>
//                             </div>
//                         </div>
//                     )}

//                     {/* Form */}
//                     <form onSubmit={handleSubmit(create)} className="mt-8">
//                         <div className="space-y-6">
//                             <div className="transform transition-all duration-300 hover:-translate-y-0.5">
//                                 <Input
//                                     label="Full Name"
//                                     placeholder="Enter your full name"
//                                     {...register("name", {
//                                         required: true,
//                                     })}
//                                 />
//                             </div>
                            
//                             <div className="transform transition-all duration-300 hover:-translate-y-0.5">
//                                 <Input
//                                     label="Email"
//                                     placeholder="Enter your email"
//                                     type="email"
//                                     {...register("email", {
//                                         required: true,
//                                         validate: {
//                                             matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                                 "Email address must be a valid address",
//                                         }
//                                     })}
//                                 />
//                             </div>
                            
//                             <div className="transform transition-all duration-300 hover:-translate-y-0.5">
//                                 <Input
//                                     label="Password"
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     {...register("password", {
//                                         required: true,
//                                     })}
//                                 />
//                             </div>
                            
//                             {/* Enhanced submit button */}
//                             <div className="pt-4">
//                                 <button
//                                     type="submit"
//                                     disabled={isLoading}
//                                     className={`group/btn relative w-full overflow-hidden rounded-xl py-4 px-6 font-semibold text-white transition-all duration-300 transform active:scale-95 ${
//                                         isLoading
//                                             ? 'bg-gray-400 cursor-not-allowed'
//                                             : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:-translate-y-0.5'
//                                     }`}
//                                 >
//                                     {/* Animated background */}
//                                     <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                    
//                                     {/* Button content */}
//                                     <div className="relative flex items-center justify-center space-x-2">
//                                         {isLoading ? (
//                                             <>
//                                                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                                                 <span>Creating Account...</span>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <span>Create Account</span>
//                                                 <span className="text-lg transform transition-transform duration-300 group-hover/btn:translate-x-1">✨</span>
//                                             </>
//                                         )}
//                                     </div>
                                    
//                                     {/* Glow effect */}
//                                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300 -z-10"></div>
//                                 </button>
//                             </div>
//                         </div>
//                     </form>

//                     {/* Floating particles */}
//                     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                         <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-ping opacity-50"></div>
//                         <div className="absolute top-3/4 left-1/4 w-0.5 h-0.5 bg-pink-400/40 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
//                         <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-indigo-400/20 rounded-full animate-ping opacity-50" style={{animationDelay: '2s'}}></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup