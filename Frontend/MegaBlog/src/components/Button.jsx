import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}


// import React, { useState, useRef } from "react";

// export default function Button({
//     children,
//     type = "button",
//     bgColor,
//     textColor,
//     className = "",
//     variant = "primary",
//     size = "medium",
//     icon,
//     iconPosition = "left",
//     loading = false,
//     disabled = false,
//     ripple = true,
//     glow = false,
//     ...props
// }) {
//     const [isPressed, setIsPressed] = useState(false);
//     const [ripples, setRipples] = useState([]);
//     const buttonRef = useRef(null);

//     // Ripple effect handler
//     const handleClick = (e) => {
//         if (ripple && !disabled && !loading) {
//             const rect = buttonRef.current.getBoundingClientRect();
//             const size = Math.max(rect.width, rect.height);
//             const x = e.clientX - rect.left - size / 2;
//             const y = e.clientY - rect.top - size / 2;
            
//             const newRipple = {
//                 x,
//                 y,
//                 size,
//                 id: Date.now()
//             };

//             setRipples(prev => [...prev, newRipple]);
            
//             // Remove ripple after animation
//             setTimeout(() => {
//                 setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
//             }, 600);
//         }

//         if (props.onClick) {
//             props.onClick(e);
//         }
//     };

//     // Size variants
//     const getSizeStyles = () => {
//         switch (size) {
//             case 'small':
//                 return 'px-3 py-2 text-sm';
//             case 'large':
//                 return 'px-8 py-4 text-lg';
//             case 'xl':
//                 return 'px-12 py-5 text-xl';
//             default:
//                 return 'px-6 py-3 text-base';
//         }
//     };

//     // Variant styles using your color palette
//     const getVariantStyles = () => {
//         // If custom colors are provided, use them with modern styling
//         if (bgColor || textColor) {
//             return `${bgColor || 'bg-[#598392]'} ${textColor || 'text-[#eff6e0]'} hover:opacity-90`;
//         }

//         switch (variant) {
//             case 'primary':
//                 return `
//                     bg-gradient-to-r from-[#124559] to-[#598392] text-[#eff6e0]
//                     hover:from-[#598392] hover:to-[#aec3b0] hover:shadow-xl hover:shadow-[#598392]/30
//                     active:from-[#01161e] active:to-[#124559]
//                 `;
//             case 'secondary':
//                 return `
//                     bg-gradient-to-r from-[#598392] to-[#aec3b0] text-[#01161e]
//                     hover:from-[#aec3b0] hover:to-[#eff6e0] hover:shadow-lg hover:shadow-[#aec3b0]/30
//                     active:from-[#598392] active:to-[#124559] active:text-[#eff6e0]
//                 `;
//             case 'outline':
//                 return `
//                     bg-transparent border-2 border-[#598392] text-[#598392]
//                     hover:bg-[#598392] hover:text-[#eff6e0] hover:border-[#124559]
//                     active:bg-[#124559] active:border-[#01161e]
//                 `;
//             case 'ghost':
//                 return `
//                     bg-transparent text-[#598392] hover:bg-[#598392]/10 
//                     hover:text-[#124559] active:bg-[#598392]/20
//                 `;
//             case 'danger':
//                 return `
//                     bg-gradient-to-r from-[#598392] to-[#124559] text-[#eff6e0]
//                     hover:from-[#124559] hover:to-[#01161e] hover:shadow-lg hover:shadow-[#124559]/30
//                 `;
//             case 'success':
//                 return `
//                     bg-gradient-to-r from-[#aec3b0] to-[#598392] text-[#01161e]
//                     hover:from-[#598392] hover:to-[#124559] hover:text-[#eff6e0] hover:shadow-lg hover:shadow-[#aec3b0]/30
//                 `;
//             default:
//                 return `
//                     bg-gradient-to-r from-[#124559] to-[#598392] text-[#eff6e0]
//                     hover:from-[#598392] hover:to-[#aec3b0] hover:shadow-xl hover:shadow-[#598392]/30
//                 `;
//         }
//     };

//     const baseStyles = `
//         relative overflow-hidden font-semibold rounded-xl
//         transition-all duration-300 transform
//         focus:outline-none focus:ring-4 focus:ring-[#598392]/30 focus:ring-offset-2 focus:ring-offset-transparent
//         ${getSizeStyles()}
//         ${getVariantStyles()}
//         ${disabled || loading ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 active:scale-95 cursor-pointer'}
//         ${glow ? 'hover:shadow-2xl' : ''}
//         ${className}
//     `;

//     return (
//         <button
//             ref={buttonRef}
//             type={type}
//             className={baseStyles}
//             disabled={disabled || loading}
//             onClick={handleClick}
//             onMouseDown={() => setIsPressed(true)}
//             onMouseUp={() => setIsPressed(false)}
//             onMouseLeave={() => setIsPressed(false)}
//             {...props}
//         >
//             {/* Background shimmer effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#eff6e0]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
//             {/* Glow effect */}
//             {glow && (
//                 <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#598392]/20 to-[#aec3b0]/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></div>
//             )}

//             {/* Ripple effects */}
//             {ripples.map((ripple) => (
//                 <span
//                     key={ripple.id}
//                     className="absolute rounded-full bg-[#eff6e0]/30 pointer-events-none animate-ping"
//                     style={{
//                         left: ripple.x,
//                         top: ripple.y,
//                         width: ripple.size,
//                         height: ripple.size,
//                         animationDuration: '600ms'
//                     }}
//                 />
//             ))}

//             {/* Button content */}
//             <span className="relative z-10 flex items-center justify-center space-x-2">
//                 {loading ? (
//                     <>
//                         <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         <span>Loading...</span>
//                     </>
//                 ) : (
//                     <>
//                         {icon && iconPosition === 'left' && (
//                             <span className={`transition-transform duration-300 ${isPressed ? 'scale-95' : ''}`}>
//                                 {icon}
//                             </span>
//                         )}
//                         <span className={`transition-all duration-300 ${isPressed ? 'scale-95' : ''}`}>
//                             {children}
//                         </span>
//                         {icon && iconPosition === 'right' && (
//                             <span className={`transition-transform duration-300 ${isPressed ? 'scale-95' : ''}`}>
//                                 {icon}
//                             </span>
//                         )}
//                     </>
//                 )}
//             </span>

//             {/* Press effect overlay */}
//             <div className={`absolute inset-0 bg-[#01161e]/0 transition-all duration-150 rounded-xl ${
//                 isPressed ? 'bg-[#01161e]/10' : ''
//             }`}></div>
//         </button>
//     );
// }