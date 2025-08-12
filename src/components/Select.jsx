import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)


// import React, { useId, useState } from 'react'

// function Select({
//     options,
//     label,
//     className,
//     ...props
// }, ref) {
//     const id = useId()
//     const [isFocused, setIsFocused] = useState(false)
    
//     return (
//         <div className='w-full group'>
//             {label && (
//                 <label 
//                     htmlFor={id} 
//                     className='block text-sm font-medium text-gray-700 mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text'
//                 >
//                     {label}
//                 </label>
//             )}
            
//             <div className="relative">
//                 {/* Glow effect background */}
//                 <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 transition-opacity duration-300 ${
//                     isFocused ? 'opacity-30' : 'group-hover:opacity-20'
//                 }`}></div>
                
//                 {/* Animated gradient border */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <select
//                     {...props}
//                     id={id}
//                     ref={ref}
//                     onFocus={() => setIsFocused(true)}
//                     onBlur={() => setIsFocused(false)}
//                     className={`relative z-10 w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm text-gray-800 outline-none transition-all duration-300 border border-purple-100/50 focus:border-purple-400 focus:bg-white focus:shadow-lg hover:bg-white hover:shadow-md appearance-none cursor-pointer font-medium ${
//                         isFocused 
//                             ? 'ring-2 ring-purple-500/20 transform scale-[1.01]' 
//                             : ''
//                     } ${className}`}
//                     style={{
//                         backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a855f7' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
//                         backgroundPosition: 'right 12px center',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundSize: '16px'
//                     }}
//                 >
//                     {options?.map((option) => (
//                         <option 
//                             key={option} 
//                             value={option}
//                             className="py-2 px-4 text-gray-800 bg-white hover:bg-purple-50"
//                         >
//                             {option}
//                         </option>
//                     ))}
//                 </select>
                
//                 {/* Floating accent dots */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
//                     <div className={`absolute top-3 right-16 w-1 h-1 bg-purple-400/40 rounded-full transition-all duration-300 ${
//                         isFocused ? 'animate-ping opacity-100' : 'opacity-0'
//                     }`}></div>
//                     <div className={`absolute bottom-3 right-20 w-0.5 h-0.5 bg-pink-400/30 rounded-full transition-all duration-500 ${
//                         isFocused ? 'animate-ping opacity-100' : 'opacity-0'
//                     }`} style={{animationDelay: '0.5s'}}></div>
//                 </div>
                
//                 {/* Active indicator line */}
//                 <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 ${
//                     isFocused ? 'w-full' : 'w-0'
//                 }`}></div>
                
//                 {/* Corner gradient accent */}
//                 <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-tr-xl transition-opacity duration-300 ${
//                     isFocused || 'group-hover:opacity-100 opacity-0'
//                 }`}></div>
//             </div>
            
//             {/* Helper text space for future use */}
//             <div className="mt-1 min-h-[1rem]">
//                 {/* Reserved space for validation messages or helper text */}
//             </div>
//         </div>
//     )
// }

// export default React.forwardRef(Select)