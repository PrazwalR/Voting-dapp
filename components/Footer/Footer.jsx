import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md border-t border-purple-500/30 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Voting dApp</span>
                        </h3>
                        <p className="text-purple-200 text-sm leading-relaxed mb-4">
                            A decentralized voting platform built on Ethereum blockchain, ensuring transparent, secure, and tamper-proof elections.
                        </p>
                        <p className="text-purple-300 text-xs">
                            © 2025 Voting dApp. All rights reserved.
                        </p>
                    </div>

                    {/* Developer Contact */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Developer Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <div>
                                    <p className="text-purple-200 text-sm">Prazwal R</p>
                                    <p className="text-purple-400 text-xs">Student ID: 23BCE1947</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:prazwalr07@gmail.com" className="text-purple-200 text-sm hover:text-purple-300 transition-colors">
                                    prazwalr07@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+919392585884" className="text-purple-200 text-sm hover:text-purple-300 transition-colors">
                                    +91 9392585884
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <div>
                                    <p className="text-purple-200 text-sm">VIT Chennai</p>
                                    <p className="text-purple-400 text-xs">Vellore Institute of Technology</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links & Tech Stack */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Technology Stack</h3>
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <p className="text-purple-200 text-sm">Solidity Smart Contracts</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <p className="text-purple-200 text-sm">Ethereum Sepolia Testnet</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <p className="text-purple-200 text-sm">Next.js & React</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <p className="text-purple-200 text-sm">Ethers.js & Web3Modal</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <p className="text-purple-200 text-sm">IPFS (Pinata)</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <p className="text-purple-200 text-sm">Tailwind CSS</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-purple-500/30">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-purple-300 text-sm text-center md:text-left">
                            Built with 💜 for transparent and secure voting
                        </p>
                        <div className="flex items-center space-x-6">
                            <a href="https://sepolia.etherscan.io" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 text-sm transition-colors">
                                View on Etherscan
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 text-sm transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
