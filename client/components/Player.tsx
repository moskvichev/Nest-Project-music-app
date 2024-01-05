import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import * as React from 'react';
import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';

const Player = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Трек 1',
    artist: 'Исполнитель 1',
    text: 'Some text 1',
    listens: 5,
    audio: 'http://localhost:5000/audio/50d4118c-0281-4832-820c-7ced79d9bddd.mp3',
    picture: 'http://localhost:5000/image/78e90e4f-436e-4871-8b77-bdba404aae96.JPG',
    comments: [],
  };
  const active = false;
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
