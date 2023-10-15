import Navbar from '@/components/Navbar';
import Button from '@mui/material/Button';
import React from 'react';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="center">
        <h1>Welcome to main page.</h1>
        <h3>Here the best music tracks!</h3>
        <Button>Push the button</Button>
      </div>
      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
