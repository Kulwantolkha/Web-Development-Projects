import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header

// import React, { useState, useEffect } from 'react'
// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeItem, setActiveItem] = useState('/')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true,
//       icon: "🏠"
//     }, 
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//       icon: "🔐"
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//       icon: "✨"
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//       icon: "📚"
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//       icon: "✍️"
//     },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const handleNavClick = (slug, name) => {
//     setActiveItem(slug)
//     navigate(slug)
//     setIsMobileMenuOpen(false)
//   }

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
//       isScrolled 
//         ? 'bg-[#eff6e0]/90 backdrop-blur-xl shadow-2xl border-b border-[#aec3b0]/30' 
//         : 'bg-gradient-to-r from-[#01161e] via-[#124559] to-[#598392] shadow-lg'
//     }`}>
//       <Container>
//         <nav className='flex items-center justify-between py-4 px-6'>
//           {/* Logo Section */}
//           <div className='group relative'>
//             <Link to='/' className='flex items-center space-x-3'>
//               <div className={`transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 ${
//                 isScrolled ? 'filter-none' : 'filter brightness-0 invert'
//               }`}>
//                 <Logo width='60px' />
//               </div>
//               <div className={`hidden md:block font-bold text-xl transition-all duration-300 ${
//                 isScrolled ? 'text-[#01161e]' : 'text-[#eff6e0]'
//               } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#124559] group-hover:to-[#598392] group-hover:bg-clip-text`}>
//                 YourBrand
//               </div>
//             </Link>
//             <div className="absolute -inset-2 bg-gradient-to-r from-[#124559] to-[#598392] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className='hidden md:flex items-center space-x-2'>
//             {navItems.map((item) => 
//               item.active ? (
//                 <li key={item.name} className="relative">
//                   <button
//                     onClick={() => handleNavClick(item.slug, item.name)}
//                     className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
//                       activeItem === item.slug
//                         ? isScrolled 
//                           ? 'bg-gradient-to-r from-[#124559] to-[#598392] text-[#eff6e0] shadow-lg'
//                           : 'bg-[#eff6e0]/20 text-[#eff6e0] backdrop-blur-sm border border-[#eff6e0]/30'
//                         : isScrolled 
//                           ? 'text-[#01161e] hover:text-[#eff6e0] hover:bg-gradient-to-r hover:from-[#124559] hover:to-[#598392]'
//                           : 'text-[#eff6e0]/90 hover:text-[#eff6e0] hover:bg-[#eff6e0]/20 backdrop-blur-sm'
//                     }`}
//                   >
//                     <span className="flex items-center space-x-2 relative z-10">
//                       <span className="text-sm">{item.icon}</span>
//                       <span>{item.name}</span>
//                     </span>
//                     {/* Animated background */}
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#124559] to-[#598392] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
//                     {/* Glow effect */}
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#598392] to-[#aec3b0] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-20"></div>
//                   </button>
//                   {/* Active indicator */}
//                   {activeItem === item.slug && (
//                     <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[#598392] to-[#aec3b0] rounded-full animate-pulse"></div>
//                   )}
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li className="ml-4">
//                 <div className="group relative">
//                   <LogoutBtn />
//                   <div className="absolute -inset-1 bg-gradient-to-r from-[#598392] to-[#aec3b0] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                 </div>
//               </li>
//             )}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
//               isScrolled ? 'text-[#01161e] hover:bg-[#aec3b0]/30' : 'text-[#eff6e0] hover:bg-[#eff6e0]/20'
//             }`}
//           >
//             <div className="space-y-1.5">
//               <div className={`w-6 h-0.5 transition-all duration-300 ${
//                 isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#124559]' : isScrolled ? 'bg-[#01161e]' : 'bg-[#eff6e0]'
//               }`}></div>
//               <div className={`w-6 h-0.5 transition-all duration-300 ${
//                 isMobileMenuOpen ? 'opacity-0' : isScrolled ? 'bg-[#01161e]' : 'bg-[#eff6e0]'
//               }`}></div>
//               <div className={`w-6 h-0.5 transition-all duration-300 ${
//                 isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#124559]' : isScrolled ? 'bg-[#01161e]' : 'bg-[#eff6e0]'
//               }`}></div>
//             </div>
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
//           isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}>
//           <div className="px-6 py-4 space-y-3 bg-[#eff6e0]/95 backdrop-blur-xl border-t border-[#aec3b0]/30">
//             {navItems.map((item) => 
//               item.active ? (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavClick(item.slug, item.name)}
//                   className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
//                     activeItem === item.slug
//                       ? 'bg-gradient-to-r from-[#124559] to-[#598392] text-[#eff6e0] shadow-lg transform scale-[1.02]'
//                       : 'text-[#01161e] hover:bg-gradient-to-r hover:from-[#aec3b0]/30 hover:to-[#eff6e0]/50 hover:text-[#124559]'
//                   }`}
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span>{item.name}</span>
//                 </button>
//               ) : null
//             )}
//             {authStatus && (
//               <div className="pt-3 border-t border-[#aec3b0]/40">
//                 <LogoutBtn />
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>

//       {/* Floating particles effect */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#eff6e0]/20 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
//         <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#aec3b0]/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
//         <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#598392]/25 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
//       </div>
//     </header>
//   )
// }

// export default Header