import { OT } from './opentok';

export type UpdateCallback<A> = (stats: UpdateCallbackStats) => void;
export type UpdateCallbackStats = {
  audio: CallbackTrackStats;
  video: CallbackTrackStats & { frameRate: number; };
  availableOugoingBitrate: number;
  timestamp: number;
  phase: string;
};

export interface CallbackTrackStats {
  bytesSent: number;
  bytesReceived: number;
  packetsLost: number;
  packetsReceived: number;
}
 