import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import { ExpandLess, ExpandMore, Rotate90DegreesCcw } from '@mui/icons-material';
import { ListSubheader, createTheme, ThemeProvider, useTheme } from '@mui/material';
import drawerImage from '../../assets/meteor.svg';
import drawerImageHorizontal from '../../assets/meteor_horizontal.svg';
import logo from '../../logo.svg'
import Logo from '../Icon/Logo';
import MeteorHorizontal from '../../assets/MeteorHorizontal';
import Meteor from '../../assets/Meteor';
import ActionDrawer from '../Drawer/ActionDrawer';
import MainContent from '../MainContent/MainContent';
import { BrowserRouter, useLocation } from 'react-router-dom';

const drawerWidth = 240;

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

const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  return (

    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundImage: `url(${drawerImageHorizontal})`,
            backgroundSize: 'cover'
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'text.primary' }}>
              {decodeURIComponent(location.pathname === '/' ? 'Home' : location.pathname.split('/')[3].charAt(0).toUpperCase() + location.pathname.split('/')[3].slice(1))}
            </Typography>
          </Toolbar>
        </AppBar>
        <ActionDrawer drawerWidth={drawerWidth}>
          
        </ActionDrawer>
        <MainContent>
          {children}
        </MainContent>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;