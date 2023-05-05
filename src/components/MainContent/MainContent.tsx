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
import drawerImage from '../../assets/meteor.svg';
import drawerImageHorizontal from '../../assets/meteor_horizontal.svg';
import logo from '../../logo.svg'
import {Icon} from '../Icon/';
import MeteorHorizontal from '../../assets/MeteorHorizontal';
import Meteor from '../../assets/Meteor';
import { ListSubheader, createTheme, ThemeProvider, useTheme } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Props {
    children: React.ReactNode;
    drawerWidth: number;
    appBarHeight: number;
  }

export const MainContent: React.FC<Props> = ({ children, drawerWidth, appBarHeight }) => {

    return (
        <Box
        component="main"
        id="main-content"
        sx={{ flexGrow: 1, 
          bgcolor: 'background.default', 
          p: 3, display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          overflow: 'scroll',
          position: 'fixed',
          left: `${drawerWidth}px`,
          right:0,
          top: appBarHeight,
          bottom:0,
          padding: 0,
          marginBottom: 2

        }}
      >
        {children}
      </Box>
        )
}
