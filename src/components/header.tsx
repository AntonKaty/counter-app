import { Container, Typography, Paper } from '@mui/material';
import React from 'react';

export default function Header(): React.ReactElement {
  return (
    <Container component="header">
      <Paper sx={{ p: 2, bgcolor: 'primary.main' }}>
        <Typography variant="h3" color="primary.contrastText">
          Header
        </Typography>
      </Paper>
    </Container>
  );
}
