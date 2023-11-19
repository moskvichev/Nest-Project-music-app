import StepWrapper from '@/components/StepsWrapper';
import MainLayout from '@/layouts/MainLayout';
import { Card, Grid } from '@mui/material';
import React from 'react';

const Create = () => {
  return (
    <MainLayout>
      <StepWrapper activeStep={1}>
        <h1>Загрузка трека</h1>
      </StepWrapper>
    </MainLayout>
  );
};

export default Create;
