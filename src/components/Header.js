import React from 'react';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

function Header() {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" sx={{ borderRadius: 1 }}>
        <Toolbar>
          <SecurityIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Snyk Best Practices Guide
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Snyk Implementation Guide
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Select a language or framework to view detailed best practices for Snyk implementation
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;