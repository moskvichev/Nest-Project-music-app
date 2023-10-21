import MainLayout from '@/layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
  const router = useRouter();
  const tracks = ITracks[] = [
    {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Some text 1', listens: 5, audio: '', picture: ''},
    {_id: '2', name: 'Трек 1', artist: 'Исполнитель 2', text: 'Some text 2', listens: 5, audio: '', picture: ''},
    {_id: '3', name: 'Трек 1', artist: 'Исполнитель 3', text: 'Some text 3', listens: 5, audio: '', picture: ''}
  ]

  
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
          </Card>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Index;
