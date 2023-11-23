import StepWrapper from '@/components/StepsWrapper';
import MainLayout from '@/layouts/MainLayout';
import { Button, Card, Grid } from '@mui/material';
import React, { useState } from 'react';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const next = () => {
    setActiveStep((prev) => prev + 1);
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <h1>STEP 1</h1>}
        {activeStep === 1 && <h1>STEP 2</h1>}
        {activeStep === 2 && <h1>STEP 3</h1>}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button onClick={back}>Назад</Button>
        <Button onClick={next}>Дале е</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
