import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
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
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

// export default Login

// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { login as authLogin } from '../store/authSlice'
// import { Button, Input, Logo } from "./index"
// import { useDispatch } from "react-redux"
// import authService from "../appwrite/auth"
// import { useForm } from "react-hook-form"

// function Login() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const { register, handleSubmit, formState: { errors } } = useForm()
//     const [error, setError] = useState("")
//     const [isLoading, setIsLoading] = useState(false)
//     const [showPassword, setShowPassword] = useState(false)
//     const [isVisible, setIsVisible] = useState(false)

//     // Animation on mount
//     useEffect(() => {
//         const timer = setTimeout(() => setIsVisible(true), 100)
//         return () => clearTimeout(timer)
//     }, [])

//     const login = async (data) => {
//         setError("")
//         setIsLoading(true)
//         try {
//             const session = await authService.login(data)
//             if (session) {
//                 const userData = await authService.getCurrentUser()
//                 if (userData) dispatch(authLogin(userData))
//                 navigate("/")
//             }
//         } catch (error) {
//             setError(error.message)
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     return (
//         <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eff6e0] via-[#aec3b0]/50 to-[#598392] p-4 relative overflow-hidden'>
            
//             {/* Animated Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#598392]/10 rounded-full blur-2xl animate-pulse"></div>
//                 <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#aec3b0]/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
//                 <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-[#124559]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
//                 <div className="absolute top-1/6 right-1/6 w-16 h-16 bg-[#eff6e0]/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '6s'}}></div>
//             </div>

//             {/* Floating particles */}
//             <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-[#598392]/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
//                 <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-[#aec3b0]/40 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
//                 <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#eff6e0]/50 rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
//             </div>

//             {/* Main Login Container */}
//             <div className={`
//                 relative w-full max-w-md transform transition-all duration-1000 ease-out
//                 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
//             `}>
                
//                 {/* Login Card */}
//                 <div className="group relative">
//                     {/* Card Background with Glassmorphism */}
//                     <div className="absolute inset-0 bg-[#eff6e0]/80 backdrop-blur-2xl rounded-3xl border border-[#aec3b0]/40 shadow-2xl"></div>
                    
//                     {/* Gradient Glow */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#598392]/20 to-[#aec3b0]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>
                    
//                     <div className="relative z-10 p-8 sm:p-10">
                        
//                         {/* Logo Section */}
//                         <div className="mb-8 text-center">
//                             <div className="group/logo inline-block relative">
//                                 <div className="transform group-hover/logo:scale-110 group-hover/logo:rotate-3 transition-all duration-500 mb-4">
//                                     <Logo width="80px" />
//                                 </div>
//                                 <div className="absolute -inset-4 bg-gradient-to-r from-[#598392]/20 to-[#aec3b0]/20 rounded-full blur opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300"></div>
//                             </div>
                            
//                             <h2 className="text-3xl font-bold text-[#01161e] mb-2 bg-gradient-to-r from-[#01161e] to-[#124559] bg-clip-text">
//                                 Welcome Back
//                             </h2>
//                             <p className="text-[#124559] text-lg">
//                                 Sign in to continue your journey
//                             </p>
//                         </div>

//                         {/* Error Message */}
//                         {error && (
//                             <div className="mb-6 p-4 bg-[#598392]/10 border border-[#598392]/30 rounded-xl flex items-center space-x-3 animate-pulse">
//                                 <span className="text-xl">⚠️</span>
//                                 <p className="text-[#01161e] font-medium">{error}</p>
//                             </div>
//                         )}

//                         {/* Login Form */}
//                         <form onSubmit={handleSubmit(login)} className='space-y-6'>
                            
//                             {/* Email Input */}
//                             <div className="transform hover:-translate-y-1 transition-all duration-300">
//                                 <Input
//                                     label="Email Address"
//                                     placeholder="Enter your email"
//                                     type="email"
//                                     variant="glass"
//                                     floating
//                                     icon="📧"
//                                     error={errors.email?.message}
//                                     animated
//                                     glow
//                                     {...register("email", {
//                                         required: "Email is required",
//                                         validate: {
//                                             matchPattern: (value) => 
//                                                 /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                                 "Please enter a valid email address",
//                                         }
//                                     })}
//                                 />
//                             </div>

//                             {/* Password Input */}
//                             <div className="transform hover:-translate-y-1 transition-all duration-300">
//                                 <div className="relative">
//                                     <Input
//                                         label="Password"
//                                         type={showPassword ? "text" : "password"}
//                                         placeholder="Enter your password"
//                                         variant="glass"
//                                         floating
//                                         icon="🔒"
//                                         error={errors.password?.message}
//                                         animated
//                                         glow
//                                         {...register("password", {
//                                             required: "Password is required",
//                                             minLength: {
//                                                 value: 6,
//                                                 message: "Password must be at least 6 characters"
//                                             }
//                                         })}
//                                     />
                                    
//                                     {/* Show/Hide Password Toggle */}
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="absolute right-12 top-[42px] text-[#124559] hover:text-[#598392] transition-colors duration-300 transform hover:scale-110"
//                                     >
//                                         {showPassword ? "👁️" : "👁️‍🗨️"}
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Forgot Password */}
//                             <div className="text-right">
//                                 <Link
//                                     to="/forgot-password"
//                                     className="text-[#598392] hover:text-[#124559] font-medium transition-all duration-300 hover:underline decoration-[#598392] underline-offset-4"
//                                 >
//                                     Forgot password?
//                                 </Link>
//                             </div>

//                             {/* Submit Button */}
//                             <div className="transform hover:-translate-y-1 transition-all duration-300">
//                                 <Button
//                                     type="submit"
//                                     variant="primary"
//                                     size="large"
//                                     className="w-full"
//                                     loading={isLoading}
//                                     icon={isLoading ? null : "🚀"}
//                                     glow
//                                     disabled={isLoading}
//                                 >
//                                     {isLoading ? "Signing In..." : "Sign In"}
//                                 </Button>
//                             </div>

//                             {/* Divider */}
//                             <div className="relative my-8">
//                                 <div className="absolute inset-0 flex items-center">
//                                     <div className="w-full border-t border-[#aec3b0]/40"></div>
//                                 </div>
//                                 <div className="relative flex justify-center text-sm">
//                                     <span className="px-4 bg-[#eff6e0] text-[#124559] font-medium">Or continue with</span>
//                                 </div>
//                             </div>

//                             {/* Social Login Buttons */}
//                             <div className="grid grid-cols-2 gap-4">
//                                 <button
//                                     type="button"
//                                     className="group flex items-center justify-center px-4 py-3 border-2 border-[#aec3b0]/40 rounded-xl bg-[#eff6e0]/60 hover:bg-[#eff6e0]/80 hover:border-[#598392]/60 transition-all duration-300 transform hover:scale-105"
//                                 >
//                                     <span className="text-xl mr-2 group-hover:scale-110 transition-transform duration-300">📱</span>
//                                     <span className="text-[#124559] font-medium">Google</span>
//                                 </button>
//                                 <button
//                                     type="button"
//                                     className="group flex items-center justify-center px-4 py-3 border-2 border-[#aec3b0]/40 rounded-xl bg-[#eff6e0]/60 hover:bg-[#eff6e0]/80 hover:border-[#598392]/60 transition-all duration-300 transform hover:scale-105"
//                                 >
//                                     <span className="text-xl mr-2 group-hover:scale-110 transition-transform duration-300">💼</span>
//                                     <span className="text-[#124559] font-medium">GitHub</span>
//                                 </button>
//                             </div>
//                         </form>

//                         {/* Sign Up Link */}
//                         <div className="mt-8 text-center">
//                             <p className="text-[#124559] mb-4">
//                                 Don't have an account?
//                             </p>
//                             <Link
//                                 to="/signup"
//                                 className="group relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#aec3b0]/20 to-[#598392]/20 hover:from-[#598392]/30 hover:to-[#124559]/30 text-[#124559] hover:text-[#01161e] font-semibold rounded-xl border border-[#aec3b0]/40 hover:border-[#598392]/60 transition-all duration-300 transform hover:scale-105"
//                             >
//                                 <span>Create Account</span>
//                                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
                                
//                                 {/* Button glow */}
//                                 <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#aec3b0]/10 to-[#598392]/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></div>
//                             </Link>
//                         </div>

//                         {/* Security Badge */}
//                         <div className="mt-8 text-center">
//                             <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#aec3b0]/20 rounded-full border border-[#aec3b0]/40">
//                                 <span className="text-lg">🔐</span>
//                                 <span className="text-[#124559] text-sm font-medium">Secure & Encrypted</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#598392]/40 rounded-tl-2xl"></div>
//                 <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#598392]/40 rounded-br-2xl"></div>
                
//                 {/* Floating accent elements */}
//                 <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#598392]/60 to-transparent rounded-full"></div>
//                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#aec3b0]/60 to-transparent rounded-full"></div>
//             </div>

//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//                 <div className="absolute top-1/4 left-1/4 transform rotate-45">
//                     <div className="w-32 h-32 border border-[#124559] rounded-lg"></div>
//                 </div>
//                 <div className="absolute bottom-1/4 right-1/4 transform -rotate-45">
//                     <div className="w-24 h-24 border border-[#598392] rounded-lg"></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login