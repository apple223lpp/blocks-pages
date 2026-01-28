export interface Block {
  id: string;
  height: string;
  timeAgo: string;
  validator: {
    name: string;
    iconColor: string;
  };
  txCount: number;
  reward: string;
}

export interface Transaction {
  hash: string;
  timeAgo: string;
  from: string;
  to: string;
  value: string;
  platform: {
    name: string;
    iconColor: string;
  };
}

export interface IcmMessage {
  id: string;
  timeAgo: string;
  source: {
    name: string;
    iconColor: string;
  };
  destination: {
    name: string;
    type: 'chain' | 'unknown';
  };
  value: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}
