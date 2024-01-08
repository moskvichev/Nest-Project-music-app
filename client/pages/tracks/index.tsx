import TrackList from '@/components/Tracklist';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Player from '@/components/Player';
import { useActions } from '@/hooks/useActions';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'Трек 1',
      artist: 'Исполнитель 1',
      text: 'Some text 1',
      listens: 5,
      audio: 'http://localhost:5000/audio/50d4118c-0281-4832-820c-7ced79d9bddd.mp3',
      picture: 'http://localhost:5000/image/78e90e4f-436e-4871-8b77-bdba404aae96.JPG',
      comments: [],
    },
    {
      _id: '2',
      name: 'Трек 2',
      artist: 'Исполнитель 2',
      text: 'Some text 2',
      listens: 5,
      audio: 'http://localhost:5000/audio/b40f6691-fbb8-4b98-9305-e0a6f20e8f18.mp3',
      picture: 'http://localhost:5000/image/de1c4b0e-56a3-4859-9e5c-7d3981fd7601.JPG',
      comments: [],
    },
    {
      _id: '3',
      name: 'Трек 3',
      artist: 'Исполнитель 3',
      text: 'Some text 3',
      listens: 5,
      audio: 'http://localhost:5000/audio/f76ae585-ced1-48d0-807a-cd9f8adc80ce.mp3',
      picture: 'http://localhost:5000/image/1cb8eb27-493b-4f66-b47c-f2cf3125bd60.JPG',
      comments: [],
    },
  ];

  return (
    <>
      <MainLayout>
        <Grid container justifyContent="center">
          <Card style={{ width: 900 }}>
            <Box p={3}>
              <Grid container justifyContent="space-between">
                <h1>Список треков</h1>
                <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
              </Grid>
            </Box>
            <TrackList tracks={tracks} />
          </Card>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Index;
