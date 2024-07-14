'use client';

import { Typography, Box, Container, Button, Paper } from '@mui/material';
import React, { useState } from 'react';

interface CounterProps {
  children?: React.ReactNode;
}

export default function Counter({
  children = null,
}: CounterProps): React.ReactElement {
  const [counterValue, setCounterValue] = useState(0);
  const result = 100 / (counterValue % 4);

  const handleIncrement = () => {
    setCounterValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounterValue((prev) => prev - 1);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexGap: 1,
          width: 'fit-content',
          margin: 'auto',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            margin: 'auto',
          }}
        >
          <Button variant="contained" onClick={handleIncrement}>
            +
          </Button>
          <Button variant="contained" onClick={handleDecrement}>
            -
          </Button>
        </Box>
        <Paper sx={{ minWidth: '4rem', m: 2 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {counterValue}
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography sx={{ fontWeight: '800', textAlign: 'center' }}>
          Formula Result: {result}
        </Typography>
      </Box>
      {children}
    </Container>
  );
}
