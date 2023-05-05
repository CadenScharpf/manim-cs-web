

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import { ExpandLess, ExpandMore, Rotate90DegreesCcw } from '@mui/icons-material';
import { IconButton, ListSubheader} from '@mui/material';
import drawerImage from '../../assets/meteor.svg';
import { Icon } from '../Icon';
import { NavLink } from 'react-router-dom';
import PageData from '../../Pages';
import { useNavigate } from "react-router-dom";

interface ListData {
  [key: string]: {
    [key: string]: string;
  };
}

interface Props {
  children: React.ReactNode;
  drawerWidth: number;
}

export const ActionDrawer: React.FC<Props> = ({ drawerWidth, children }) => {

  const [lists, setLists] = React.useState(Object.keys(PageData).map((key) => ({ id: key, isOpen: false })));
  const handleClick = (listId: string) => { setLists((prevLists) => prevLists.map((list) => list.id === listId ? { ...list, isOpen: !list.isOpen } : list)); };
  let navigate = useNavigate();

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
        position: 'fixed'
      }}
      variant="permanent"
      anchor="left"
      

    >
      <Toolbar sx={{ justifyContent: 'center', bgcolor: 'transparent' }}>{/* <MenuIcon /> */} <IconButton onClick={()=>{return navigate(`/home`)}}><Icon /></IconButton></Toolbar>
      <Divider />
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ color: 'text.primary' }}>
            Algorithms
          </ListSubheader>
        }
      >
        {lists.map((list) => (
          <React.Fragment key={list.id}>
            <ListItem key={list.id} disablePadding >
              <ListItemButton onClick={() => handleClick(list.id)} >
                <ListItemText primary={list.id} sx={{ color: 'text.secondary' }} />
                {list.isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={list.isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                {Object.keys(PageData[list.id]).map((subKey) => (
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
