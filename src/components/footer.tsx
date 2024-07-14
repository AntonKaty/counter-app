import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

export default function Header(): React.ReactElement {
  return (
    <Container component="footer">
      <Paper sx={{ p: 2, bgcolor: 'primary.main' }}>
        <Typography variant="h3" color="primary.contrastText">
          Footer
        </Typography>
      </Paper>
    </Container>
  );
}
