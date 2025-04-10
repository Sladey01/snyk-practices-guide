import React from 'react';
import { 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  CardActionArea 
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';
import DnsIcon from '@mui/icons-material/Dns';
import BuildIcon from '@mui/icons-material/Build';

const languages = [
  { id: 'javascript', name: 'JavaScript/Node.js', icon: <CodeIcon /> },
  { id: 'python', name: 'Python', icon: <CodeIcon /> },
  { id: 'java', name: 'Java', icon: <CodeIcon /> },
  { id: 'ruby', name: 'Ruby', icon: <CodeIcon /> },
  { id: 'go', name: 'Go', icon: <CodeIcon /> },
  { id: 'php', name: 'PHP', icon: <CodeIcon /> },
  { id: 'dotnet', name: '.NET', icon: <CodeIcon /> },
  { id: 'docker', name: 'Docker', icon: <StorageIcon /> },
  { id: 'kubernetes', name: 'Kubernetes', icon: <DnsIcon /> },
  { id: 'aws', name: 'AWS', icon: <LanguageIcon /> },
  { id: 'terraform', name: 'Terraform', icon: <BuildIcon /> },
  { id: 'gitlab', name: 'GitLab CI', icon: <TerminalIcon /> },
  { id: 'github', name: 'GitHub Actions', icon: <TerminalIcon /> },
];

function LanguagePicker({ onLanguageSelect }) {
  const handleChange = (event) => {
    onLanguageSelect(event.target.value);
  };

  const handleCardClick = (languageId) => {
    onLanguageSelect(languageId);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel id="language-select-label">Language/Framework</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          label="Language/Framework"
          onChange={handleChange}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.id} value={lang.id}>
              {lang.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Popular Options
      </Typography>
      
      <Grid container spacing={3}>
        {languages.map((lang) => (
          <Grid item xs={12} sm={6} md={4} key={lang.id}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(lang.id)}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {lang.icon}
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {lang.name}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LanguagePicker;