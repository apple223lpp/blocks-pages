import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-gray-900">Avalanche</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Audits <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Explorer <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">GitHub <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Network Status <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Whitepapers <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-gray-900">Community</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Blog <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Facebook <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Telegram <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Youtube <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-gray-900">More Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">Legal <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-gray-900 flex items-center gap-1">LLMs <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-gray-900">Stay In Touch</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Don't miss new grant opportunities, tools and resource launches, event announcements, and more.
            </p>
            <div className="flex flex-col gap-2 mt-2">
                <input type="email" placeholder="Enter your email" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-avalanche-red/20 focus:border-avalanche-red" />
                <button className="bg-gray-900 text-white font-medium rounded-lg px-4 py-3 text-sm hover:bg-black transition-colors flex items-center justify-center gap-2">
                    Subscribe <ArrowUpRight className="w-3 h-3" />
                </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>Crafted with <span className="text-red-500">♥</span> by Ava Labs DevRel team.</p>
            <p>© 2026 Ava Labs, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
