import React from 'react';
import Container from '@mui/material/Container';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <Container
      maxWidth="lg"
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Container
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
        }}
      >
        {children}
      </Container>

      <Footer />
    </Container>
  );
}

export default Layout;
