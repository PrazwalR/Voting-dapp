import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { HiOutlineMenu, HiX } from "react-icons/hi";

//INTERNAL IMPORT/
import { VotingContext } from "../../context/Voter";
import { CONTRACT_OWNER } from "../../context/constants";
import loding from "../../loding.gif";

const NavBar = () => {
  const { connectWallet, error, currentAccount } = useContext(VotingContext);
  const [openNav, setOpenNav] = useState(false);

  // Check if current user is admin
  const isAdmin = currentAccount && currentAccount.toLowerCase() === CONTRACT_OWNER.toLowerCase();

  const openNaviagtion = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      {/* Error Message */}
      {error !== "" && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999] bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-purple-400/30 max-w-md animate-float">
          <p className="text-white text-lg font-semibold text-center">{error}</p>
        </div>
      )}

      <nav className="w-full bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md shadow-2xl border-b border-purple-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex-shrink-0 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                <Image src={loding} alt="logo" width={70} height={70} className="rounded-full shadow-lg" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {currentAccount && (
                <div className="flex items-center space-x-2 mr-4">
                  <Link href="/">
                    <span className="px-4 py-2 text-white hover:text-purple-300 transition-colors duration-300 cursor-pointer font-medium">
                      Home
                    </span>
                  </Link>
                  {isAdmin && (
                    <>
                      <Link href="/candidate-regisration">
                        <span className="px-4 py-2 text-white hover:text-purple-300 transition-colors duration-300 cursor-pointer font-medium">
                          Register Candidate
                        </span>
                      </Link>
                      <Link href="/allowed-voters">
                        <span className="px-4 py-2 text-white hover:text-purple-300 transition-colors duration-300 cursor-pointer font-medium">
                          Register Voter
                        </span>
                      </Link>
                    </>
                  )}
                  <Link href="/voterList">
                    <span className="px-4 py-2 text-white hover:text-purple-300 transition-colors duration-300 cursor-pointer font-medium">
                      Voter List
                    </span>
                  </Link>
                </div>
              )}

              {currentAccount ? (
                <div className="flex items-center space-x-3 bg-purple-700/50 backdrop-blur-sm px-5 py-3 rounded-xl border border-purple-400/30 hover:bg-purple-600/50 transition-all duration-300">
                  <span className="text-white font-semibold">
                    {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
                  </span>
                  <div className="text-2xl text-purple-300">
                    <AiFillUnlock />
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => connectWallet()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  Connect Wallet
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              {currentAccount ? (
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm font-semibold">
                    {currentAccount.slice(0, 6)}...
                  </span>
                  <button
                    onClick={openNaviagtion}
                    className="text-white text-3xl p-2 hover:text-purple-300 transition-colors"
                  >
                    {openNav ? <HiX /> : <HiOutlineMenu />}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => connectWallet()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {openNav && currentAccount && (
          <div className="md:hidden bg-purple-900/95 backdrop-blur-lg border-t border-purple-500/30 animate-fade-in">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="/">
                <div className="block px-4 py-3 text-white hover:bg-purple-700/50 rounded-lg transition-all duration-300 cursor-pointer">
                  Home
                </div>
              </Link>
              {isAdmin && (
                <>
                  <Link href="/candidate-regisration">
                    <div className="block px-4 py-3 text-white hover:bg-purple-700/50 rounded-lg transition-all duration-300 cursor-pointer">
                      Register Candidate
                    </div>
                  </Link>
                  <Link href="/allowed-voters">
                    <div className="block px-4 py-3 text-white hover:bg-purple-700/50 rounded-lg transition-all duration-300 cursor-pointer">
                      Register Voter
                    </div>
                  </Link>
                </>
              )}
              <Link href="/voterList">
                <div className="block px-4 py-3 text-white hover:bg-purple-700/50 rounded-lg transition-all duration-300 cursor-pointer">
                  Voter List
                </div>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
