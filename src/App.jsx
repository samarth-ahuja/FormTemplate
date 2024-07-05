import { useState } from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import FormPage from './views/FormPage';
import LoginPage from './views/LoginPage';
import { CssBaseline,createTheme,ThemeProvider} from '@mui/material';

const theme = createTheme({
  palette:{
    primary:{
      main:"#0000000",
    },
    orangish:{
      main:'#f47c21',
    },
  }
})

const router = createBrowserRouter([
  {path:'/',element:<LoginPage/>},
  {path:'/login',element:<LoginPage/>},
  {path:'/form',element:<FormPage/>}
])

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
    <RouterProvider router={router}/>
      <CssBaseline/>
      {/* </LocalizationProvider> */}
    </ThemeProvider>
    </>
  )
}

export default App
