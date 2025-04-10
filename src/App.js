import React, { useState } from 'react';
import { Container, Box, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import LanguagePicker from './components/LanguagePicker';
import PracticeGuide from './components/PracticeGuide';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B45A1',
    },
    secondary: {
      main: '#00B4D2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
});

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Header />
          <LanguagePicker onLanguageSelect={handleLanguageSelect} />
          {selectedLanguage ? (
            <PracticeGuide language={selectedLanguage} />
          ) : (
            <Box sx={{ mt: 5, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                Select a language or framework to view Snyk best practices
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;