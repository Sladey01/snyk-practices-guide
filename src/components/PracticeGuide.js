import React from 'react';
import { Box, Typography, Divider, Paper, Tab, Tabs, Chip, Card, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SettingsIcon from '@mui/icons-material/Settings';
import TerminalIcon from '@mui/icons-material/Terminal';
import LinkIcon from '@mui/icons-material/Link';
import TabPanel from './TabPanel';
import practicesData from '../data/practicesData';

function PracticeGuide({ language }) {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Get language data from our database
  const languageData = practicesData[language] || {
    name: 'Language data not found',
    description: 'No data available for this language or framework.'
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {languageData.name}
      </Typography>
      
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        {languageData.description}
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Recommended Scanning Method:
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {languageData.scanMethods?.map((method, index) => (
            <Chip 
              key={index}
              label={method.name} 
              color={method.recommended ? "primary" : "default"}
              variant={method.recommended ? "filled" : "outlined"}
              icon={method.type === 'cli' ? <TerminalIcon /> : <LinkIcon />}
            />
          ))}
        </Box>
      </Box>
      
      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<CodeIcon />} label="Implementation" />
          <Tab icon={<IntegrationInstructionsIcon />} label="CI/CD" />
          <Tab icon={<SettingsIcon />} label="Configuration" />
        </Tabs>
        
        <TabPanel value={value} index={0}>
          <Typography variant="h6" gutterBottom>
            Implementation Steps
          </Typography>
          
          {languageData.implementation?.steps?.map((step, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {index + 1}. {step.title}
              </Typography>
              <Typography variant="body2">
                {step.description}
              </Typography>
              
              {step.code && (
                <Card variant="outlined" sx={{ mt: 1, mb: 2, backgroundColor: '#f5f5f5' }}>
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="caption" component="pre" sx={{ overflowX: 'auto' }}>
                      {step.code}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Box>
          ))}
        </TabPanel>
        
        <TabPanel value={value} index={1}>
          <Typography variant="h6" gutterBottom>
            CI/CD Integration
          </Typography>
          
          {languageData.cicd?.integrations?.map((integration, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {integration.name}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {integration.description}
              </Typography>
              
              {integration.example && (
                <Card variant="outlined" sx={{ mt: 1, backgroundColor: '#f5f5f5' }}>
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="caption" component="pre" sx={{ overflowX: 'auto' }}>
                      {integration.example}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Box>
          ))}
        </TabPanel>
        
        <TabPanel value={value} index={2}>
          <Typography variant="h6" gutterBottom>
            Configuration Options
          </Typography>
          
          {languageData.configuration?.options?.map((option, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {option.name}
              </Typography>
              <Typography variant="body2">
                {option.description}
              </Typography>
              
              {option.example && (
                <Card variant="outlined" sx={{ mt: 1, backgroundColor: '#f5f5f5' }}>
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="caption" component="pre" sx={{ overflowX: 'auto' }}>
                      {option.example}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Box>
          ))}
        </TabPanel>
      </Paper>
      
      <Typography variant="subtitle2" gutterBottom>
        Best Practices for {languageData.name}
      </Typography>
      
      <Divider sx={{ mb: 2 }} />
      
      <Box sx={{ mb: 4 }}>
        {languageData.bestPractices?.map((practice, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              • {practice.title}
            </Typography>
            <Typography variant="body2">
              {practice.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PracticeGuide;