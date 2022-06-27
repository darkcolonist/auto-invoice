import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from './components/Axios';
import loadable from '@loadable/component';
import { loadableParams } from './components/MyLoadable';
import { useAuthStore } from "./components/MyZustandStateStore";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const PrimaryLayoutLoadable = loadable(() => import('./components/PrimaryLayout'), loadableParams);
const AppLoadingLoadable = loadable(() => import('./components/AppLoading'), loadableParams);

export default function App(){
  const [statusDataLoaded,setStatusDataLoaded] = React.useState(false);

  React.useEffect(() => {
    axios.get('status')
      .then((data) => {
        // setTimeout(() => { // for delayed checking
          let response = data.data;

          useAuthStore.setState(response);
  
          setStatusDataLoaded(true);
        // }, 2000);
      });
  },[]);

  let render;

  if(statusDataLoaded)
    render = <PrimaryLayoutLoadable />
  else
    render = <AppLoadingLoadable />

  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    {render}
  </ThemeProvider>;  
}