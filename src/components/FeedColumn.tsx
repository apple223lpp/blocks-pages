import React from 'react';
import { ArrowRight, Box, FileText, Link as LinkIcon, HelpCircle } from 'lucide-react';
import { Block, Transaction, IcmMessage } from '../types';

interface FeedColumnProps {
  title: string;
  icon: React.ReactNode;
  type: 'blocks' | 'transactions' | 'icm';
  data: (Block | Transaction | IcmMessage)[];
}

const FeedColumn: React.FC<FeedColumnProps> = ({ title, icon, type, data }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="text-avalanche-red">{icon}</div>
           <h2 className="font-bold text-gray-900 text-sm">{title}</h2>
        </div>
        <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-medium text-gray-500">Live</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {data.map((item, idx) => (
          <div key={idx} className="p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors group">
            
            {/* BLOCKS LAYOUT */}
            {type === 'blocks' && (
               <div className="flex gap-3">
                   <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-white group-hover:border group-hover:border-gray-200 transition-all">
                        <Box className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-semibold text-purple-600 hover:text-purple-700 cursor-pointer">{(item as Block).id}</span>
                            <span className="text-xs text-gray-400">{(item as Block).timeAgo}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                             <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${(item as Block).validator.iconColor}`}>
                                 <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                                    <Box className="w-2 h-2" />
                                 </div>
                                 {(item as Block).validator.name}
                             </div>
                             <span className="text-xs text-purple-600 font-medium bg-purple-50 px-1.5 py-0.5 rounded">{(item as Block).txCount} txns</span>
                        </div>
                        <div className="flex justify-end">
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{(item as Block).reward}</span>
                        </div>
                   </div>
               </div>
            )}

            {/* TRANSACTIONS LAYOUT */}
            {type === 'transactions' && (
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-white group-hover:border group-hover:border-gray-200 transition-all">
                        <FileText className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-semibold text-purple-600 hover:text-purple-700 cursor-pointer truncate max-w-[120px]">{(item as Transaction).hash}</span>
                            <div className="text-right">
                                 <span className="text-xs text-gray-400 block mb-0.5">{(item as Transaction).timeAgo}</span>
                            </div>
                        </div>
                         <div className="flex justify-end mb-2 -mt-1">
                             <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{(item as Transaction).value}</span>
                         </div>
                        <div className="flex flex-col gap-1.5">
                            <div className={`flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 w-fit px-2 py-0.5 rounded`}>
                                <div className={`w-3 h-3 rounded-full ${(item as Transaction).platform.iconColor}`}></div>
                                {(item as Transaction).platform.name}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                <span>From</span>
                                <span className="text-purple-600 cursor-pointer hover:underline truncate max-w-[80px]">{(item as Transaction).from}</span>
                                <ArrowRight className="w-3 h-3 mx-0.5" />
                                <span className="text-purple-600 cursor-pointer hover:underline truncate max-w-[80px]">{(item as Transaction).to}</span>
                            </div>
                        </div>
                   </div>
                </div>
            )}

            {/* ICM LAYOUT */}
            {type === 'icm' && (
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0 text-yellow-600 group-hover:bg-white group-hover:border group-hover:border-gray-200 transition-all">
                        <LinkIcon className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-semibold text-orange-500 hover:text-orange-600 cursor-pointer truncate max-w-[120px]">{(item as IcmMessage).id}</span>
                            <div className="text-right">
                                <span className="text-xs text-gray-400 block mb-0.5">{(item as IcmMessage).timeAgo}</span>
                            </div>
                        </div>
                         <div className="flex justify-end mb-2 -mt-1">
                             <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{(item as IcmMessage).value}</span>
                         </div>
                        
                        <div className="flex items-center gap-2 mb-1">
                             {/* Source */}
                             <div className="flex items-center gap-1 bg-gray-100 rounded px-1.5 py-0.5 max-w-[45%]">
                                <div className={`w-3 h-3 rounded-full shrink-0 ${(item as IcmMessage).source.iconColor}`}></div>
                                <span className="text-[10px] font-medium truncate">{(item as IcmMessage).source.name}</span>
                             </div>
                             
                             <ArrowRight className="w-3 h-3 text-gray-400 shrink-0" />

                             {/* Dest */}
                             <div className={`flex items-center gap-1 rounded px-1.5 py-0.5 max-w-[45%] ${(item as IcmMessage).destination.type === 'unknown' ? 'bg-gray-100 text-gray-400' : 'bg-red-50 text-red-600'}`}>
                                <div className={`w-3 h-3 rounded-full shrink-0 flex items-center justify-center ${(item as IcmMessage).destination.type === 'unknown' ? 'bg-gray-300' : 'bg-red-500'}`}>
                                     {(item as IcmMessage).destination.type === 'chain' ? <div className="w-1.5 h-1.5 bg-white rounded-full"></div> : <HelpCircle className="w-2 h-2 text-white" />}
                                </div>
                                <span className="text-[10px] font-medium truncate">{(item as IcmMessage).destination.name}</span>
                             </div>
                        </div>
                   </div>
                </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedColumn;
