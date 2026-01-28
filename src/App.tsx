import React from 'react';
import { 
  Globe, 
  Search, 
  ChevronRight, 
  Box, 
  ArrowRightLeft, 
  MessageSquare,
  Activity,
  Layers,
  Zap,
  Repeat
} from 'lucide-react';

import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import StatsCard from './components/StatsCard';
import FeedColumn from './components/FeedColumn';

import { MOCK_BLOCKS, MOCK_TXS, MOCK_ICMS, ACTIVITY_DATA } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex flex-col font-sans">
      <TopBanner />
      <Header />

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-6 font-medium">
          <span className="flex items-center gap-1 hover:text-gray-900 cursor-pointer"><Globe className="w-3.5 h-3.5" /> Ecosystem</span>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="flex items-center gap-1 hover:text-gray-900 cursor-pointer"><Search className="w-3.5 h-3.5" /> Explorer</span>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="flex items-center gap-1 bg-gray-200/60 px-2 py-0.5 rounded text-gray-700"><Globe className="w-3.5 h-3.5 text-avalanche-red" /> All Chains</span>
        </div>

        {/* Title Section */}
        <div className="mb-8">
            <div className="flex items-center gap-2 mb-2 text-avalanche-red font-bold text-xs tracking-wider uppercase">
                <div className="w-0.5 h-3 bg-avalanche-red"></div>
                Avalanche Ecosystem
                <div className="flex -space-x-1 ml-2">
                     <div className="w-5 h-5 rounded-full bg-blue-500 border border-white"></div>
                     <div className="w-5 h-5 rounded-full bg-indigo-500 border border-white"></div>
                     <div className="w-5 h-5 rounded-full bg-purple-500 border border-white"></div>
                     <div className="w-5 h-5 rounded-full bg-pink-500 border border-white"></div>
                     <div className="w-5 h-5 rounded-full bg-red-500 border border-white"></div>
                </div>
                <span className="text-gray-400 font-normal ml-1 lowercase text-[10px]">+34 more</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-50 rounded-xl">
                    <Globe className="w-8 h-8 text-avalanche-red" strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">All Chains</h1>
            </div>
            
            <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
                Real-time activity across all Avalanche L1 chains - blocks, transactions, and cross-chain messages from the entire ecosystem.
            </p>
        </div>

        {/* Big Search Bar */}
        <div className="mb-10 relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-avalanche-red transition-colors" />
            </div>
            <input 
                type="text" 
                className="block w-full pl-12 pr-32 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-avalanche-red/20 focus:border-avalanche-red shadow-sm transition-all text-sm" 
                placeholder="Search by Transaction Hash (0x...)" 
            />
            <div className="absolute inset-y-0 right-1.5 flex items-center">
                <button className="bg-avalanche-red hover:bg-avalanche-dark text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm">
                    Search
                </button>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <StatsCard 
                label="Active Chains" 
                value="43" 
                subValue={<span className="text-gray-400 text-sm font-normal">/ 81</span>}
                icon={<Globe className="w-5 h-5" />}
            />
            <StatsCard 
                label="Total Transactions" 
                value="4.19B" 
                subValue={<span className="text-gray-400 font-normal text-[10px]">(50.26 TPS)</span>}
                icon={<ArrowRightLeft className="w-5 h-5" />}
            />
            <StatsCard 
                label="Blocks/Sec" 
                value="4.74" 
                icon={<Box className="w-5 h-5" />}
            />
            <StatsCard 
                label="ICM/Sec" 
                value="0.183" 
                icon={<Repeat className="w-5 h-5" />}
            />
            {/* The Ecosystem Activity Chart spans separately in the design, but in grid usually it's last. 
                Based on image, it looks like a 4th column that might be wider or just the last in a responsive grid.
                The image shows 4 cards on the left and a chart on the right. Let's adjust the layout.
            */}
        </div>

        {/* Layout Adjustment: Stats Top, Chart Right (Desktop) */}
        {/* Actually the image shows a single row of cards where the last one is the chart. 
            Let's reconstruct the grid to match image exactly: 3 small cards, 1 small card, 1 wide chart card?
            No, it's 4 metric cards and 1 chart card. 
        */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-10 hidden">
             {/* This was just a placeholder. The previous grid is better for mobile. 
                 To match the image EXACTLY, the chart is just another card in the row but maybe wider?
                 In the image, "Ecosystem Activity" takes up space on the right.
                 Let's rewrite the stats section to be a flex container or a specific grid.
             */}
        </div>

        {/* Stats Section v2 - Exact Layout Match */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-1 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                <div className="p-5 flex items-start gap-4">
                     <div className="p-2.5 rounded-full bg-red-50 text-avalanche-red"><Globe className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">Active Chains</div>
                        <div className="text-xl font-bold text-gray-900">43 <span className="text-sm font-normal text-gray-400">/ 81</span></div>
                     </div>
                </div>
                
                <div className="p-5 flex items-start gap-4">
                     <div className="p-2.5 rounded-full bg-red-50 text-avalanche-red"><ArrowRightLeft className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">Total Transactions</div>
                        <div className="text-xl font-bold text-gray-900">4.19B <span className="text-xs font-normal text-gray-400 block sm:inline">(50.26 TPS)</span></div>
                     </div>
                </div>

                <div className="p-5 flex items-start gap-4">
                     <div className="p-2.5 rounded-full bg-red-50 text-avalanche-red"><Box className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">Blocks/Sec</div>
                        <div className="text-xl font-bold text-gray-900">4.74</div>
                     </div>
                </div>

                <div className="p-5 flex items-start gap-4">
                     <div className="p-2.5 rounded-full bg-red-50 text-avalanche-red"><Repeat className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">ICM/Sec</div>
                        <div className="text-xl font-bold text-gray-900">0.183</div>
                     </div>
                </div>

                <div className="p-5 min-h-[100px] lg:col-span-1">
                     <StatsCard label="Ecosystem Activity (14 Days)" value={null} chartData={ACTIVITY_DATA} className="!p-0 !shadow-none !border-none !bg-transparent h-full" />
                </div>
            </div>
        </div>


        {/* Feeds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FeedColumn 
                title="Latest Blocks" 
                icon={<Box className="w-4 h-4" />} 
                type="blocks" 
                data={MOCK_BLOCKS} 
            />
            <FeedColumn 
                title="Latest Transactions" 
                icon={<ArrowRightLeft className="w-4 h-4" />} 
                type="transactions" 
                data={MOCK_TXS} 
            />
            <FeedColumn 
                title="ICM Messages" 
                icon={<MessageSquare className="w-4 h-4" />} 
                type="icm" 
                data={MOCK_ICMS} 
            />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;
