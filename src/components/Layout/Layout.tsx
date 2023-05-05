import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider } from '@mui/material';
import drawerImageHorizontal from '../../assets/meteor_horizontal.svg';

import { ActionDrawer } from '../Drawer';
import { MainContent } from '../MainContent';
import { useLocation } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

const drawerWidth = 180;
const appBarHeight = 55;

const theme = createTheme({
  palette: {
    primary: {
      main: '#transparent',
    },
    secondary: {
      main: '#5efc03',
    },
    background: {
      default: '#1e1e1e',
      paper: '#transparent',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc'
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {

  const location = useLocation();

  const getTitle = () => {
    let sp = location.pathname.split('/');
    let title = ""
    switch (sp[1]) {
      case 'algorithms':
        title = sp[sp.length-1].charAt(0).toUpperCase() + sp[sp.length-1].slice(1);
        break;
      case 'download':
        title = 'Download'
        break;
    }
    return title
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ zIndex: -1 }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            height: appBarHeight,
            ml: `${drawerWidth}px`,
            backgroundImage: `url(${drawerImageHorizontal})`,
            backgroundSize: 'cover',
            justifyContent: 'center',
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'text.primary' }}>
              {decodeURIComponent(location.pathname === '/' ? 'Home' : getTitle()
              )}
            </Typography>
          </Toolbar>
        </AppBar>
        <ActionDrawer drawerWidth={drawerWidth} >
          
        </ActionDrawer>
        <MainContent drawerWidth={drawerWidth} appBarHeight={appBarHeight} >
          {children}
        </MainContent>
      </Box>
    </ThemeProvider>
  );
}
