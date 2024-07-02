import { useState } from 'react';
import './App.css'
import {Box,ThemeProvider} from '@mui/material';
import FormTemplate from './components/FormTemplate';

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box>
        <FormTemplate></FormTemplate>
      </Box>
    </ThemeProvider>
  )
}

export default App
