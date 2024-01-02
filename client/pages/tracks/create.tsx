import FileUpload from '@/components/FileUpload';
import StepWrapper from '@/components/StepWrapper';
import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const next = () => {
    setActiveStep((prev) => prev + 1);
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label={'Название трека'} />
            <TextField style={{ marginTop: 10 }} label={'Имя исполнителя'} />
            <TextField style={{ marginTop: 10 }} label={'Слова к треку '} multiline rows={3} />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Загрузить изображение</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Загрузить трек</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button onClick={back}>Назад</Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
