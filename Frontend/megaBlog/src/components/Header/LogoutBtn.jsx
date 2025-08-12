import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

// export default LogoutBtn

// import React, { useState } from 'react'
// import {useDispatch} from 'react-redux'
// import authService from '../../appwrite/auth'
// import {logout} from '../../store/authSlice'

// function LogoutBtn() {
//     const dispatch = useDispatch()
//     const [isLoading, setIsLoading] = useState(false)
//     const [isHovered, setIsHovered] = useState(false)

//     const logoutHandler = async () => {
//         setIsLoading(true)
//         try {
//             await authService.logout()
//             dispatch(logout())
//         } catch (error) {
//             console.error('Logout failed:', error)
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     return (
//         <div className="relative group">
//             <button
//                 className={`
//                     relative overflow-hidden px-6 py-3 rounded-full font-medium 
//                     transition-all duration-300 transform
//                     ${isLoading ? 'scale-95 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
//                     bg-gradient-to-r from-[#598392] to-[#aec3b0]
//                     text-[#eff6e0] shadow-lg
//                     hover:from-[#124559] hover:to-[#598392]
//                     hover:shadow-xl hover:shadow-[#598392]/20
//                     border border-[#aec3b0]/30
//                     backdrop-blur-sm
//                     focus:outline-none focus:ring-2 focus:ring-[#598392]/50 focus:ring-offset-2 focus:ring-offset-transparent
//                 `}
//                 onClick={logoutHandler}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//                 disabled={isLoading}
//             >
//                 {/* Background shimmer effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#eff6e0]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
//                 {/* Button content */}
//                 <span className="relative z-10 flex items-center space-x-2">
//                     {isLoading ? (
//                         <>
//                             <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             <span>Signing Out...</span>
//                         </>
//                     ) : (
//                         <>
//                             <svg 
//                                 className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} 
//                                 fill="none" 
//                                 stroke="currentColor" 
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                             </svg>
//                             <span>Logout</span>
//                         </>
//                     )}
//                 </span>

//                 {/* Ripple effect */}
//                 <div className="absolute inset-0 rounded-full">
//                     <div className="absolute inset-0 rounded-full bg-[#eff6e0]/0 group-active:bg-[#eff6e0]/20 transition-colors duration-150"></div>
//                 </div>
//             </button>

//             {/* Glow effect */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#598392] to-[#aec3b0] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            
//             {/* Enhanced glow on hover */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#124559] to-[#598392] blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-20 scale-110"></div>

//             {/* Floating particles on hover */}
//             {isHovered && (
//                 <>
//                     <div className="absolute top-0 left-1/4 w-1 h-1 bg-[#eff6e0]/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
//                     <div className="absolute top-1/2 right-0 w-0.5 h-0.5 bg-[#aec3b0]/80 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
//                     <div className="absolute bottom-0 right-1/3 w-1.5 h-1.5 bg-[#598392]/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
//                 </>
//             )}

//             {/* Tooltip */}
//             <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#01161e] text-[#eff6e0] text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#124559]/50 backdrop-blur-sm">
//                 Sign out of your account
//                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#01161e]"></div>
//             </div>
//         </div>
//     )
// }

// export default LogoutBtn