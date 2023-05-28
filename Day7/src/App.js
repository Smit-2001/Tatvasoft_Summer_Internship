import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme';
import './assets/css/style.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import 'react-toastify/dist/ReactToastify.css';
// import MainNavigation from './components/MainNavigation';
// import { AuthWrapper } from './context/auth';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <AuthWrapper> */}
          <MainNavigation />
          <ToastContainer />
        {/* </AuthWrapper> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
