import React from 'react';
import { Search, Moon, User, Command, Triangle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 mr-8">
          <div className="text-avalanche-red">
            <Triangle className="fill-current w-6 h-6 rotate-0" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">Builder Hub</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900">Academy</a>
          <a href="#" className="hover:text-gray-900">Blog</a>
          <a href="#" className="hover:text-gray-900">Chat</a>
          <a href="#" className="hover:text-gray-900">Console</a>
          <a href="#" className="hover:text-gray-900">Documentation</a>
          <a href="#" className="hover:text-gray-900">Events</a>
          <a href="#" className="bg-gray-100 text-gray-900 px-3 py-1.5 rounded-md">Explorer</a>
          <a href="#" className="hover:text-gray-900">Grants</a>
          <a href="#" className="hover:text-gray-900">Integrations</a>
          <a href="#" className="hover:text-gray-900">Stats</a>
        </nav>

        {/* Right Tools */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Search Button */}
          <button className="hidden sm:flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 px-3 py-2 rounded-lg text-sm border border-gray-200/50 min-w-[160px]">
            <Search className="w-4 h-4" />
            <span>Search</span>
            <div className="ml-auto flex items-center gap-0.5 text-xs text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-200">
               <Command className="w-2.5 h-2.5" />
               <span>K</span>
            </div>
          </button>

          {/* Mobile Search Icon */}
           <button className="sm:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5" />
          </button>

          {/* Theme Toggle */}
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <Moon className="w-5 h-5" />
          </button>

          {/* User Profile */}
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
