import { ITrack } from '@/types/track';
import React from 'react';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return <div>{track.name}</div>;
};

export default TrackItem;
