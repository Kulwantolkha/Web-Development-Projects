import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer


// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Logo from '../Logo'

// function Footer() {
//     const [hoveredSection, setHoveredSection] = useState(null)

//     const socialLinks = [
//         { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:text-[#598392]' },
//         { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:text-[#124559]' },
//         { name: 'GitHub', icon: '💻', url: '#', color: 'hover:text-[#01161e]' },
//         { name: 'Instagram', icon: '📷', url: '#', color: 'hover:text-[#aec3b0]' }
//     ]

//     const footerSections = [
//         {
//             title: 'Company',
//             icon: '🏢',
//             links: [
//                 { name: 'Features', url: '/', icon: '⭐' },
//                 { name: 'Pricing', url: '/', icon: '💰' },
//                 { name: 'Affiliate Program', url: '/', icon: '🤝' },
//                 { name: 'Press Kit', url: '/', icon: '📰' }
//             ]
//         },
//         {
//             title: 'Support',
//             icon: '🛟',
//             links: [
//                 { name: 'Account', url: '/', icon: '👤' },
//                 { name: 'Help', url: '/', icon: '❓' },
//                 { name: 'Contact Us', url: '/', icon: '📧' },
//                 { name: 'Customer Support', url: '/', icon: '💬' }
//             ]
//         },
//         {
//             title: 'Legals',
//             icon: '⚖️',
//             links: [
//                 { name: 'Terms & Conditions', url: '/', icon: '📋' },
//                 { name: 'Privacy Policy', url: '/', icon: '🔒' },
//                 { name: 'Licensing', url: '/', icon: '📜' }
//             ]
//         }
//     ]

//     return (
//         <footer className="relative overflow-hidden bg-gradient-to-br from-[#01161e] via-[#124559] to-[#01161e] border-t-4 border-[#598392]">
            
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-10 left-10 w-32 h-32 bg-[#598392]/10 rounded-full blur-xl animate-pulse"></div>
//                 <div className="absolute top-20 right-20 w-24 h-24 bg-[#aec3b0]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
//                 <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#598392]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
                
//                 {/* Top Section */}
//                 <div className="grid lg:grid-cols-12 gap-8 mb-12">
                    
//                     {/* Brand Section */}
//                     <div className="lg:col-span-5 space-y-6">
//                         <div className="group">
//                             <div className="flex items-center space-x-4 mb-6">
//                                 <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                                     <Logo width="80px" />
//                                 </div>
//                                 <div className="text-2xl font-bold text-[#eff6e0] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#598392] group-hover:to-[#aec3b0] group-hover:bg-clip-text transition-all duration-300">
//                                     YourBrand
//                                 </div>
//                             </div>
//                             <p className="text-[#aec3b0] text-lg leading-relaxed mb-6">
//                                 Building the future of digital experiences with passion, innovation, and a commitment to excellence. Join our community and be part of something extraordinary.
//                             </p>
//                         </div>

//                         {/* Social Links */}
//                         <div className="space-y-4">
//                             <h4 className="text-[#eff6e0] font-semibold text-lg flex items-center space-x-2">
//                                 <span>🌐</span>
//                                 <span>Connect With Us</span>
//                             </h4>
//                             <div className="flex space-x-4">
//                                 {socialLinks.map((social) => (
//                                     <a
//                                         key={social.name}
//                                         href={social.url}
//                                         className="group relative w-12 h-12 bg-[#598392]/20 hover:bg-gradient-to-r hover:from-[#598392] hover:to-[#aec3b0] rounded-xl border border-[#aec3b0]/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
//                                     >
//                                         <span className="text-lg text-[#eff6e0] group-hover:scale-110 transition-transform duration-300">
//                                             {social.icon}
//                                         </span>
//                                         <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#598392] to-[#aec3b0] opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                                        
//                                         {/* Tooltip */}
//                                         <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#01161e] text-[#eff6e0] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                                             {social.name}
//                                         </div>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Navigation Sections */}
//                     <div className="lg:col-span-7 grid md:grid-cols-3 gap-8">
//                         {footerSections.map((section, index) => (
//                             <div 
//                                 key={section.title}
//                                 className="group"
//                                 onMouseEnter={() => setHoveredSection(index)}
//                                 onMouseLeave={() => setHoveredSection(null)}
//                             >
//                                 <div className={`bg-[#eff6e0]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#aec3b0]/20 transition-all duration-500 ${
//                                     hoveredSection === index ? 'border-[#598392]/50 bg-[#eff6e0]/10 transform -translate-y-1' : ''
//                                 }`}>
//                                     <h3 className="text-[#eff6e0] font-bold text-lg mb-6 flex items-center space-x-3">
//                                         <span className={`text-xl transition-transform duration-300 ${
//                                             hoveredSection === index ? 'scale-125 rotate-12' : ''
//                                         }`}>
//                                             {section.icon}
//                                         </span>
//                                         <span className="tracking-wide">{section.title}</span>
//                                     </h3>
//                                     <ul className="space-y-3">
//                                         {section.links.map((link, linkIndex) => (
//                                             <li key={link.name}>
//                                                 <Link
//                                                     to={link.url}
//                                                     className="group/link flex items-center space-x-3 text-[#aec3b0] hover:text-[#eff6e0] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-[#598392]/20 hover:transform hover:translate-x-2"
//                                                 >
//                                                     <span className="text-sm opacity-70 group-hover/link:opacity-100 group-hover/link:scale-110 transition-all duration-300">
//                                                         {link.icon}
//                                                     </span>
//                                                     <span className="font-medium">{link.name}</span>
//                                                     <svg 
//                                                         className="w-4 h-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" 
//                                                         fill="none" 
//                                                         stroke="currentColor" 
//                                                         viewBox="0 0 24 24"
//                                                     >
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                     </svg>
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Newsletter Signup */}
//                 <div className="mt-16 mb-12">
//                     <div className="bg-gradient-to-r from-[#598392]/20 to-[#aec3b0]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#aec3b0]/30">
//                         <div className="max-w-2xl mx-auto text-center">
//                             <h3 className="text-2xl font-bold text-[#eff6e0] mb-4 flex items-center justify-center space-x-3">
//                                 <span className="text-3xl">📧</span>
//                                 <span>Stay Updated</span>
//                             </h3>
//                             <p className="text-[#aec3b0] mb-6">
//                                 Get the latest updates, articles, and exclusive content delivered to your inbox.
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email..."
//                                     className="flex-1 px-4 py-3 rounded-xl bg-[#eff6e0]/90 text-[#01161e] placeholder-[#124559]/60 border-2 border-[#aec3b0]/40 focus:border-[#598392] focus:outline-none focus:ring-2 focus:ring-[#598392]/30 transition-all duration-300"
//                                 />
//                                 <button className="px-6 py-3 bg-gradient-to-r from-[#124559] to-[#598392] hover:from-[#598392] hover:to-[#aec3b0] text-[#eff6e0] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-[#598392]/20">
//                                     Subscribe
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="border-t border-[#598392]/30 pt-8">
//                     <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        
//                         {/* Copyright */}
//                         <div className="flex items-center space-x-4">
//                             <div className="text-[#aec3b0] flex items-center space-x-2">
//                                 <span className="text-lg">©</span>
//                                 <span>2025 YourBrand. All Rights Reserved.</span>
//                             </div>
//                         </div>

//                         {/* Quick Links */}
//                         <div className="flex items-center space-x-6">
//                             <Link 
//                                 to="/privacy" 
//                                 className="text-[#aec3b0] hover:text-[#eff6e0] transition-colors duration-300 text-sm font-medium hover:underline decoration-[#598392] underline-offset-4"
//                             >
//                                 Privacy
//                             </Link>
//                             <Link 
//                                 to="/terms" 
//                                 className="text-[#aec3b0] hover:text-[#eff6e0] transition-colors duration-300 text-sm font-medium hover:underline decoration-[#598392] underline-offset-4"
//                             >
//                                 Terms
//                             </Link>
//                             <Link 
//                                 to="/cookies" 
//                                 className="text-[#aec3b0] hover:text-[#eff6e0] transition-colors duration-300 text-sm font-medium hover:underline decoration-[#598392] underline-offset-4"
//                             >
//                                 Cookies
//                             </Link>
//                         </div>

//                         {/* Back to Top */}
//                         <button 
//                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                             className="group flex items-center space-x-2 px-4 py-2 bg-[#598392]/20 hover:bg-gradient-to-r hover:from-[#598392] hover:to-[#aec3b0] text-[#eff6e0] rounded-xl border border-[#aec3b0]/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
//                         >
//                             <span className="text-sm font-medium">Back to Top</span>
//                             <svg 
//                                 className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" 
//                                 fill="none" 
//                                 stroke="currentColor" 
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-[#eff6e0]/20 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
//                 <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#aec3b0]/30 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
//                 <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#598392]/25 rounded-full animate-ping" style={{animationDelay: '6s'}}></div>
//                 <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-[#eff6e0]/15 rounded-full animate-ping" style={{animationDelay: '9s'}}></div>
//             </div>

//             {/* Gradient Overlay */}
//             <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#598392] to-transparent"></div>
//         </footer>
//     )
// }

// export default Footer