import React, { useState, useEffect, useContext } from "react";

import VoterCard from "../components/voterCard/voterCard";

import { VotingContext } from "../context/Voter";

const voterList = () => {
  const { getAllVoterData, voterArray } = useContext(VotingContext);

  useEffect(() => {
    getAllVoterData();
  }, []);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl px-8 py-4 shadow-xl border border-purple-500/30 mb-4">
            <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-white">Registered Voters</h1>
              <p className="text-purple-300 text-sm">
                Total: <span className="font-bold text-white">{voterArray?.length || 0}</span> voters
              </p>
            </div>
          </div>
          <p className="text-purple-200 max-w-2xl mx-auto">
            View all authorized voters who can participate in the election
          </p>
        </div>

        {/* Voter Cards */}
        {voterArray && voterArray.length > 0 ? (
          <VoterCard voterArray={voterArray} />
        ) : (
          <div className="bg-gradient-to-br from-purple-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-12 shadow-xl border border-purple-500/30 text-center">
            <svg className="w-20 h-20 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2">No Voters Found</h3>
            <p className="text-purple-300">No voters have been registered yet for this election.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default voterList;
