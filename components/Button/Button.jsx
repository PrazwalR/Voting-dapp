const Button = ({ classStyles, btnName, handleClick }) => (
  <button
    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center space-x-2"
    type="button"
    onClick={handleClick}
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>{btnName}</span>
  </button>
);

export default Button;
