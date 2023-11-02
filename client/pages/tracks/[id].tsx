import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { useRouter } from 'next/router';
import React from 'react';

const TrackPage = () => {
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
  const router = useRouter();
  return <MainLayout>Trackpage</MainLayout>;
};

export default TrackPage;
