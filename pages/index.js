import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import { VotingContext } from "../context/Voter";
import Card from "../components/card/card";
import image from "../candidate.png";

const index = () => {
  const {
    getNewCandidate,
    candidateArray,
    giveVote,
    checkIfWalletIsConnected,
    candidateLength,
    getAllVoterData,
    currentAccount,
    voterLength,
  } = useContext(VotingContext);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    getNewCandidate();
    getAllVoterData();
  }, [currentAccount]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {currentAccount && (
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-purple-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm font-medium mb-2">Total Candidates</p>
                  <p className="text-4xl font-bold text-white">{candidateLength}</p>
                </div>
                <div className="bg-purple-600/30 p-4 rounded-full">
                  <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-800/40 to-pink-900/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-pink-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-300 text-sm font-medium mb-2">Total Voters</p>
                  <p className="text-4xl font-bold text-white">{voterLength}</p>
                </div>
                <div className="bg-pink-600/30 p-4 rounded-full">
                  <svg className="w-8 h-8 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Real Time Clock */}
            <div className="bg-gradient-to-br from-indigo-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-indigo-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <p className="text-indigo-300 text-sm font-medium mb-2">Current Time</p>
                <div className="text-3xl font-bold text-white mb-1">
                  {formatTime(currentTime)}
                </div>
                <div className="text-xs text-indigo-300">
                  {formatDate(currentTime)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Candidates Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {currentAccount ? "Cast Your Vote" : "Connect Wallet to Vote"}
          </h2>
          <Card candidateArray={candidateArray} giveVote={giveVote} />
        </div>
      </div>
    </div>
  );
};

export default index;
