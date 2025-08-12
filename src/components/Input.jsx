import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input

// import React, { useId, useState, useRef, useEffect } from 'react'

// const Input = React.forwardRef(function Input({
//     label,
//     type = "text",
//     className = "",
//     variant = "default",
//     size = "medium",
//     icon,
//     iconPosition = "left",
//     error,
//     success,
//     helperText,
//     placeholder,
//     floating = false,
//     animated = true,
//     glow = false,
//     ...props
// }, ref) {
//     const id = useId()
//     const [isFocused, setIsFocused] = useState(false)
//     const [hasValue, setHasValue] = useState(false)
//     const [isHovered, setIsHovered] = useState(false)
//     const internalRef = useRef(null)
//     const inputRef = ref || internalRef

//     // Check if input has value for floating label
//     useEffect(() => {
//         const checkValue = () => {
//             if (inputRef.current) {
//                 setHasValue(inputRef.current.value !== '')
//             }
//         }
        
//         if (inputRef.current) {
//             inputRef.current.addEventListener('input', checkValue)
//             checkValue() // Initial check
            
//             return () => {
//                 if (inputRef.current) {
//                     inputRef.current.removeEventListener('input', checkValue)
//                 }
//             }
//         }
//     }, [inputRef])

//     // Size variants
//     const getSizeStyles = () => {
//         switch (size) {
//             case 'small':
//                 return {
//                     input: 'px-3 py-2 text-sm',
//                     label: 'text-sm',
//                     icon: 'w-4 h-4'
//                 }
//             case 'large':
//                 return {
//                     input: 'px-5 py-4 text-lg',
//                     label: 'text-base',
//                     icon: 'w-6 h-6'
//                 }
//             default:
//                 return {
//                     input: 'px-4 py-3 text-base',
//                     label: 'text-sm',
//                     icon: 'w-5 h-5'
//                 }
//         }
//     }

//     // Variant styles
//     const getVariantStyles = () => {
//         const baseStyles = `
//             rounded-xl border-2 transition-all duration-300 w-full
//             ${animated ? 'transform' : ''}
//             focus:outline-none focus:ring-4 focus:ring-[#598392]/20
//         `

//         if (error) {
//             return `${baseStyles} 
//                 bg-[#eff6e0]/80 text-[#01161e] border-[#598392]/60 
//                 focus:border-[#124559] focus:bg-[#eff6e0]/90
//                 placeholder-[#598392]/50
//             `
//         }

//         if (success) {
//             return `${baseStyles}
//                 bg-[#eff6e0]/90 text-[#01161e] border-[#aec3b0]/80
//                 focus:border-[#598392] focus:bg-[#eff6e0]
//                 placeholder-[#124559]/50
//             `
//         }

//         switch (variant) {
//             case 'glass':
//                 return `${baseStyles}
//                     bg-[#eff6e0]/40 backdrop-blur-xl text-[#01161e] border-[#aec3b0]/40
//                     hover:bg-[#eff6e0]/60 hover:border-[#598392]/60
//                     focus:bg-[#eff6e0]/80 focus:border-[#598392] focus:shadow-lg focus:shadow-[#598392]/10
//                     placeholder-[#124559]/60
//                 `
//             case 'dark':
//                 return `${baseStyles}
//                     bg-[#01161e]/80 backdrop-blur-sm text-[#eff6e0] border-[#124559]/60
//                     hover:bg-[#01161e]/90 hover:border-[#598392]/60
//                     focus:bg-[#124559]/40 focus:border-[#598392] focus:shadow-lg focus:shadow-[#598392]/20
//                     placeholder-[#aec3b0]/60
//                 `
//             case 'minimal':
//                 return `${baseStyles}
//                     bg-transparent text-[#01161e] border-transparent border-b-[#aec3b0]/60 rounded-none
//                     hover:border-b-[#598392]/80 focus:border-b-[#598392] focus:bg-[#eff6e0]/20
//                     placeholder-[#124559]/60
//                 `
//             default:
//                 return `${baseStyles}
//                     bg-[#eff6e0]/60 backdrop-blur-sm text-[#01161e] border-[#aec3b0]/40
//                     hover:bg-[#eff6e0]/80 hover:border-[#598392]/60
//                     focus:bg-[#eff6e0]/90 focus:border-[#598392] focus:shadow-lg focus:shadow-[#598392]/10
//                     placeholder-[#124559]/60
//                 `
//         }
//     }

//     const sizeStyles = getSizeStyles()

//     return (
//         <div className={`w-full relative group ${className}`}>
//             {/* Floating/Standard Label */}
//             {label && (
//                 <label 
//                     className={`
//                         ${sizeStyles.label} font-medium transition-all duration-300 cursor-text
//                         ${floating ? `
//                             absolute left-4 pointer-events-none
//                             ${isFocused || hasValue 
//                                 ? `-top-2 ${variant === 'dark' ? 'text-[#aec3b0]' : 'text-[#124559]'} bg-[#eff6e0] px-2 rounded scale-90` 
//                                 : `top-3 ${variant === 'dark' ? 'text-[#aec3b0]/70' : 'text-[#124559]/70'}`
//                             }
//                         ` : `
//                             inline-block mb-2 pl-1
//                             ${variant === 'dark' ? 'text-[#eff6e0]' : 'text-[#01161e]'}
//                             ${isFocused ? 'text-[#598392]' : ''}
//                         `}
//                         ${animated && isFocused ? 'transform -translate-y-1' : ''}
//                     `}
//                     htmlFor={id}
//                 >
//                     {label}
//                     {error && <span className="text-[#598392] ml-1">*</span>}
//                     {success && <span className="text-[#aec3b0] ml-1">✓</span>}
//                 </label>
//             )}

//             {/* Input Container */}
//             <div className="relative">
//                 {/* Left Icon */}
//                 {icon && iconPosition === 'left' && (
//                     <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${sizeStyles.icon} ${
//                         variant === 'dark' ? 'text-[#aec3b0]' : 'text-[#124559]'
//                     } ${isFocused ? 'text-[#598392] scale-110' : ''} transition-all duration-300`}>
//                         {icon}
//                     </div>
//                 )}

//                 {/* Input Field */}
//                 <input
//                     type={type}
//                     className={`
//                         ${getVariantStyles()}
//                         ${sizeStyles.input}
//                         ${icon && iconPosition === 'left' ? 'pl-12' : ''}
//                         ${icon && iconPosition === 'right' ? 'pr-12' : ''}
//                         ${isFocused && animated ? 'scale-[1.02]' : ''}
//                         ${isHovered && animated ? '-translate-y-0.5' : ''}
//                     `}
//                     ref={inputRef}
//                     placeholder={floating ? '' : placeholder}
//                     onFocus={(e) => {
//                         setIsFocused(true)
//                         props.onFocus?.(e)
//                     }}
//                     onBlur={(e) => {
//                         setIsFocused(false)
//                         props.onBlur?.(e)
//                     }}
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                     {...props}
//                     id={id}
//                 />

//                 {/* Right Icon */}
//                 {icon && iconPosition === 'right' && (
//                     <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${sizeStyles.icon} ${
//                         variant === 'dark' ? 'text-[#aec3b0]' : 'text-[#124559]'
//                     } ${isFocused ? 'text-[#598392] scale-110' : ''} transition-all duration-300`}>
//                         {icon}
//                     </div>
//                 )}

//                 {/* Status Icons */}
//                 {(error || success) && (
//                     <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${sizeStyles.icon} transition-all duration-300`}>
//                         {error && <span className="text-[#598392]">❌</span>}
//                         {success && <span className="text-[#aec3b0]">✅</span>}
//                     </div>
//                 )}

//                 {/* Glow Effect */}
//                 {glow && isFocused && (
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#598392]/20 to-[#aec3b0]/20 blur-lg opacity-60 -z-10 scale-110"></div>
//                 )}
//             </div>

//             {/* Helper Text */}
//             {(helperText || error) && (
//                 <div className={`mt-2 px-1 text-xs transition-all duration-300 ${
//                     error ? 'text-[#598392]' : success ? 'text-[#aec3b0]' : variant === 'dark' ? 'text-[#aec3b0]/80' : 'text-[#124559]/70'
//                 } ${isFocused ? 'transform translate-x-1' : ''}`}>
//                     {error || helperText}
//                 </div>
//             )}

//             {/* Floating particles for special variants */}
//             {(variant === 'glass' || glow) && isFocused && (
//                 <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
//                     <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#598392]/40 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
//                     <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-[#aec3b0]/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
//                     <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-[#eff6e0]/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
//                 </div>
//             )}
//         </div>
//     )
// })

// export default Input