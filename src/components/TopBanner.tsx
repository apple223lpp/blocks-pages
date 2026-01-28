import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-50 to-pink-200 border-b border-pink-200/50 py-2.5 px-4 flex justify-center items-center text-xs sm:text-sm text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-1/2 opacity-30"></div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center z-10 text-center">
        <span>Don't miss <span className="font-semibold text-blue-600">Build Games</span>, A <span className="font-semibold text-blue-600">$1,000,000</span> Builder Competition on Avalanche</span>
        <span className="hidden sm:inline mx-1">•</span>
        <div className="flex items-center gap-1 font-mono font-medium bg-white/40 px-2 py-0.5 rounded-full border border-pink-200">
           <span>17 d</span> : <span>19 h</span> : <span>42 m</span> : <span>33 s</span>
        </div>
        <span className="hidden sm:inline mx-1">•</span>
        <a href="#" className="font-semibold underline decoration-gray-400 hover:text-black">Apply Now</a>
      </div>
    </div>
  );
};

export default TopBanner;
