import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { Container } from '@mui/material';
import React from 'react';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '90px 0' }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
