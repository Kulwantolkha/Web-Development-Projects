import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard

// import React, { useState } from 'react'
// import appwriteService from "../appwrite/config"
// import { Link } from 'react-router-dom'

// function PostCard({ $id, title, featuredImage }) {
//     const [isHovered, setIsHovered] = useState(false)
    
//     return (
//         <Link to={`/post/${$id}`}>
//             <div 
//                 className='group relative w-full bg-white/80 backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-purple-100/50 overflow-hidden'
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//             >
//                 {/* Animated gradient background */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
//                 {/* Glow effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                
//                 {/* Image container */}
//                 <div className='relative w-full justify-center mb-6 overflow-hidden rounded-xl'>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl"></div>
//                     <img 
//                         src={appwriteService.getFilePreview(featuredImage)} 
//                         alt={title}
//                         className='w-full h-48 object-cover rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-110' 
//                     />
                    
//                     {/* Floating read indicator */}
//                     <div className={`absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-purple-600 transition-all duration-300 ${
//                         isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
//                     }`}>
//                         📖 Read
//                     </div>
//                 </div>
                
//                 {/* Title */}
//                 <h2 className='text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300 relative z-10'>
//                     {title}
//                 </h2>
                
//                 {/* Animated underline */}
//                 <div className="h-0.5 w-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-500 mt-2 rounded-full"></div>
                
//                 {/* Floating particles effect */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                     <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0s'}}></div>
//                     <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-pink-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '1s'}}></div>
//                     <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-indigo-400/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '2s'}}></div>
//                 </div>
                
//                 {/* Corner accent */}
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//         </Link>
//     )
// }

// export default PostCard