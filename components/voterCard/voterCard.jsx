import React from "react";
import Image from "next/image";

const voterCard = ({ voterArray }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {voterArray?.map((el, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-purple-800/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 hover:border-purple-400/60 transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50"
        >
          {/* Image Container */}
          <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-purple-900/50 to-transparent">
            <img
              src={el?.image}
              alt="Voter photo"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-bold text-sm">ID: {el?.voterID}</span>
            </div>
          </div>

          {/* Info Container */}
          <div className="p-6 space-y-4">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{el?.name}</span>
              </h2>

              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-purple-200 text-sm break-all">
                  <span className="font-medium">Address:</span>
                  <span className="text-white font-mono text-xs ml-1">{el?.address.slice(0, 30)}...</span>
                </p>
              </div>

              <p className="text-purple-200 text-sm leading-relaxed">
                Registered voter with complete verification and authorization for the voting process.
              </p>
            </div>

            {/* Voting Status */}
            <div className={`rounded-xl p-4 border ${el?.votingStatus
                ? 'bg-green-600/20 border-green-500/40'
                : 'bg-yellow-600/20 border-yellow-500/40'
              }`}>
              <div className="flex items-center space-x-2">
                {el?.votingStatus ? (
                  <>
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-green-400 font-semibold">Already Voted</p>
                      <p className="text-green-300 text-xs">Your vote has been recorded</p>
                    </div>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-yellow-400 font-semibold">Not Voted Yet</p>
                      <p className="text-yellow-300 text-xs">Pending vote submission</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default voterCard;
