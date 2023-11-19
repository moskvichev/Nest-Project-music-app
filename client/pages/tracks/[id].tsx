import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
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
  return (
    <MainLayout>
      <Button variant={'outlined'} style={{ fontsize: 32 }} onClick={() => router.push('/tracks')}>
        К списку
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={track.picture} alt="" width={200} height={200} />
        <div style={{ margin: '20px 0' }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Название исполнителя - {track.artist}</h1>
          <h1>Количество прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
