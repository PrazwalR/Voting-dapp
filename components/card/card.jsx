import React from "react";
import Image from "next/image";

const card = ({ candidateArray, giveVote }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {candidateArray?.map((el, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-purple-800/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 hover:border-purple-400/60 transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50"
        >
          {/* Image Container */}
          <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-purple-900/50 to-transparent">
            <img
              src={el?.image}
              alt="Candidate photo"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-bold text-lg">#{el?.candidateID}</span>
            </div>
          </div>

          {/* Info Container */}
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-purple-200 text-sm font-medium">Age: <span className="text-white font-semibold">{el?.age} years</span></p>
              </div>

              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-purple-200 text-sm font-medium">
                  Address: <span className="text-white font-mono text-xs">{el?.address.slice(0, 20)}...</span>
                </p>
              </div>
            </div>

            {/* Vote Count */}
            <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-4 border border-purple-500/30">
              <p className="text-purple-300 text-sm font-medium mb-1">Total Votes</p>
              <p className="text-4xl font-bold text-white">{el?.totalVote}</p>
            </div>

            {/* Vote Button */}
            <button
              onClick={() =>
                giveVote({ id: el?.candidateID, address: el?.address })
              }
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cast Vote</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default card;
