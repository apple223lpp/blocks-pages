import { Block, Transaction, IcmMessage, ChartDataPoint } from './types';

export const MOCK_BLOCKS: Block[] = [
  {
    id: '#14610894',
    height: '14610894',
    timeAgo: '4s ago',
    validator: { name: 'Gunzilla', iconColor: 'bg-gray-900' },
    txCount: 1,
    reward: '0.000399 GUN'
  },
  {
    id: '#10434196',
    height: '10434196',
    timeAgo: '4s ago',
    validator: { name: 'Henesys', iconColor: 'bg-blue-400' },
    txCount: 6,
    reward: '0.038606 NXPC'
  },
  {
    id: '#56533964',
    height: '56533964',
    timeAgo: '3s ago',
    validator: { name: 'Dexalot', iconColor: 'bg-pink-500' },
    txCount: 1,
    reward: '0.006223 ALOT'
  },
  {
    id: '#56533963',
    height: '56533963',
    timeAgo: '4s ago',
    validator: { name: 'Dexalot', iconColor: 'bg-pink-500' },
    txCount: 5,
    reward: '0.045479 ALOT'
  },
  {
    id: '#10434197',
    height: '10434197',
    timeAgo: '4s ago',
    validator: { name: 'Henesys', iconColor: 'bg-blue-400' },
    txCount: 5,
    reward: '0.037313 NXPC'
  },
  {
    id: '#7693418',
    height: '7693418',
    timeAgo: '4s ago',
    validator: { name: 'Shrapnel L1', iconColor: 'bg-yellow-500' },
    txCount: 4,
    reward: '0.032033 SHRAPGAS'
  },
];

export const MOCK_TXS: Transaction[] = [
  {
    hash: '0xfdc9b1329bf2...',
    timeAgo: '4s ago',
    from: '0x290b ... 77a8',
    to: '0x1c69 ... 270a',
    value: '0.5 GUN',
    platform: { name: 'Gunzilla', iconColor: 'bg-gray-900' }
  },
  {
    hash: '0x3cc4f906fc8c...',
    timeAgo: '4s ago',
    from: '0x97dc ... d41c',
    to: '0x1fc1 ... ad0a',
    value: '0 NXPC',
    platform: { name: 'Henesys', iconColor: 'bg-blue-400' }
  },
  {
    hash: '0xff57a881e804...',
    timeAgo: '2s ago',
    from: '0xdd1a ... 9c07',
    to: '0xce8e ... 5937',
    value: '0 NXPC',
    platform: { name: 'Henesys', iconColor: 'bg-blue-400' }
  },
  {
    hash: '0xea48c889addd...',
    timeAgo: '2s ago',
    from: '0xc6af ... 238e',
    to: '0x6813 ... bf57',
    value: '0 NXPC',
    platform: { name: 'Henesys', iconColor: 'bg-blue-400' }
  }
];

export const MOCK_ICMS: IcmMessage[] = [
  {
    id: '0x59f13e5a0182...',
    timeAgo: '19s ago',
    source: { name: 'CX', iconColor: 'bg-orange-400' },
    destination: { name: 'Avalanche C-Chain', type: 'chain' },
    value: '0 AVAX'
  },
  {
    id: '0x7d107185227e...',
    timeAgo: '27s ago',
    source: { name: 'CX', iconColor: 'bg-orange-400' },
    destination: { name: 'Unknown', type: 'unknown' },
    value: '0 CX'
  },
  {
    id: '0x7d107185227e...',
    timeAgo: '29s ago',
    source: { name: 'CX', iconColor: 'bg-orange-400' },
    destination: { name: 'Unknown', type: 'unknown' },
    value: '0 CX'
  },
  {
    id: '0x512069699446...',
    timeAgo: '38s ago',
    source: { name: 'Henesys', iconColor: 'bg-blue-400' },
    destination: { name: 'Avalanche C-Chain', type: 'chain' },
    value: '0 AVAX'
  },
  {
    id: '0x95ff778d6308...',
    timeAgo: '42s ago',
    source: { name: 'Unknown', iconColor: 'bg-gray-300' },
    destination: { name: 'CX', type: 'chain' },
    value: '0 CX'
  },
  {
    id: '0x66c0ba02378b...',
    timeAgo: '43s ago',
    source: { name: 'Henesys', iconColor: 'bg-blue-400' },
    destination: { name: 'Unknown', type: 'unknown' },
    value: '3.5012 NXPC'
  },
];

export const ACTIVITY_DATA: ChartDataPoint[] = [
  { name: '1', value: 400 },
  { name: '2', value: 300 },
  { name: '3', value: 500 },
  { name: '4', value: 200 },
  { name: '5', value: 278 },
  { name: '6', value: 189 },
  { name: '7', value: 239 },
  { name: '8', value: 349 },
  { name: '9', value: 430 },
  { name: '10', value: 450 },
  { name: '11', value: 400 },
  { name: '12', value: 380 },
  { name: '13', value: 410 },
  { name: '14', value: 540 },
];
