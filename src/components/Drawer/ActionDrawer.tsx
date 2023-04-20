

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
import { ListSubheader, createTheme, ThemeProvider } from '@mui/material';
import drawerImage from '../../assets/meteor.svg';
import drawerImageHorizontal from '../../assets/meteor_horizontal.svg';
import logo from '../../logo.svg'
import Logo from '../Icon/Logo';
import { NavLink } from 'react-router-dom';

interface ListData {
  [key: string]: {
    [key: string]: string;
  };
}

const data: ListData = {
  "Sorting": {
    "Insertion Sort": "insertionSort",
    "Selection Sort": "selectionSort",
    "Merge Sort": "mergeSort",
    "Bubble Sort": "bubbleSort"
  },
  "Searching": {
    "Linear Search": "linearSearch",
    "Binary Search": "binarySearch"
  },
  "Graph Traversal": {
    "Inorder": "inorder",
    "Preorder": "preorder",
    "Postorder": "postorder"
  },
  "Path Finding": {
    "Dijkstra": "dijkstra",
    "A*": "aStar",
  }
};

interface Props {
  children: React.ReactNode;
  drawerWidth: number;
}

const ActionDrawer: React.FC<Props> = ({drawerWidth, children }) => {

    const [lists, setLists] = React.useState(Object.keys(data).map((key) => ({ id: key, isOpen: false })));
    const handleClick = (listId: string) => {setLists((prevLists) => prevLists.map((list) => list.id === listId ? { ...list, isOpen: !list.isOpen } : list));};
  
    return (
      <Drawer
      sx={{
        width: drawerWidth,
        height: '100vh',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
        backgroundImage: `url(${drawerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{justifyContent: 'space-between' , bgcolor: 'transparent' }}><MenuIcon/> <Logo/></Toolbar>
      <Divider />
      <List
        sx={{ width: '100%', maxWidth: 360 , bgcolor: 'background.paper'  }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{color: 'text.primary' }}>
            Algorithms
          </ListSubheader>
        }
      >
        {lists.map((list) => (
          <React.Fragment key={list.id}>
            <ListItem key={list.id} disablePadding >
              <ListItemButton onClick={() => handleClick(list.id)} >
                <ListItemText primary={list.id} sx={{ color: 'text.secondary' }}/>
                {list.isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={list.isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ bgcolor: 'background.paper'  }}>
                {Object.keys(data[list.id]).map((subKey) => (
                  <ListItemButton 
                  key={subKey} 
                  sx={{ pl: 5, color: 'text.secondary' }}
                  component={NavLink}
                  to={`/algorithms/${list.id}/${subKey}`}
                  >
                    <ListItemText primary={subKey} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
      )
}

export default ActionDrawer;