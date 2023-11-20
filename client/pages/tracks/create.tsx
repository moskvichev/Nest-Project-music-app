import StepWrapper from '@/components/StepsWrapper';
import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Grid } from '@mui/material';
import React from 'react';

const Create = () => {
  return (
    <MainLayout>
      <StepWrapper activeStep={1}>
        <h1>Загрузка трека</h1>
      </StepWrapper>
      <Grid>
        <Button>Назад</Button>
        <Button>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
