import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from 'react';
import { Divider, IconButton, List, Typography } from '@mui/material';
import useLogOut from '../hooks/useLogOut';
import { ChevronLeft } from '@mui/icons-material';
import { mainListItems } from './ListItems';
import { useUser } from '../hooks/useUser';
const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps{
  open?: boolean;
}

const ApplicationBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  

export default function AppBar(){
    const [open, setOpen] = useState(true);
    const {data} = useUser()
    const toggleDrawer = () => {
        setOpen(!open);
      };
    const logOutMutation = useLogOut()

    return(
        <React.Fragment>
        <ApplicationBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px" ,
              
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" })
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            {`Welcome, ` + data?.name}
            </Typography>
            <IconButton 
            color="inherit"
            onClick={() => logOutMutation.mutate()}
            >
                <LogoutIcon />
            </IconButton>
          </Toolbar>
        </ApplicationBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1]
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft/>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems} 
          </List>
        </Drawer>
        </React.Fragment>
    )
}