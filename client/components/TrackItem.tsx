import { ITrack } from '@/types/track';
import React from 'react';
import { Card } from '@mui/material';
import styles from '../styles/TrackItem.module.scss';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return <Card className={styles.track}>{track.name}</Card>;
};

export default TrackItem;
