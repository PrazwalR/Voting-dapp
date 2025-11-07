import React, { useContext } from "react";

const Input = ({ inputType, title, placeholder, handleClick }) => {
  return (
    <div className="mb-6">
      <label className="block text-purple-300 text-sm font-semibold mb-2">
        {title}
      </label>
      {inputType === "text" ? (
        <div className="relative">
          <input
            type="text"
            className="w-full bg-purple-900/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 backdrop-blur-sm"
            placeholder={placeholder}
            onChange={handleClick}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-purple-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
