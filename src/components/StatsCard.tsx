import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';

interface StatsCardProps {
  label: string;
  value: React.ReactNode;
  subValue?: React.ReactNode;
  icon?: React.ReactNode;
  chartData?: ChartDataPoint[];
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, subValue, icon, chartData, className }) => {
  if (chartData) {
    return (
      <div className={`bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between ${className}`}>
        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-2">{label}</div>
        <div className="h-[50px] w-full">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
                <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E84142" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#E84142" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#E84142" strokeWidth={1.5} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
            </ResponsiveContainer>
        </div>
         <div className="flex justify-between text-[10px] text-gray-400 mt-2">
            <span>Jan 13</span>
            <span>Jan 26</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-start gap-4 ${className}`}>
      {icon && <div className="p-2.5 rounded-lg bg-red-50 text-avalanche-red shrink-0">{icon}</div>}
      <div className="flex flex-col">
        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">{label}</div>
        <div className="flex items-baseline gap-2">
             <div className="text-xl font-bold text-gray-900">{value}</div>
             {subValue && <div className="text-xs text-gray-500 font-medium">{subValue}</div>}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
