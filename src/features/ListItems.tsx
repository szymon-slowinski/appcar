import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { AccountCircleRounded } from '@mui/icons-material';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import { Link } from '@mui/material';

const MenuItem=({href,name,icon}:{href:string,name:string,icon:React.ReactChild})=>{
  return (<Link color="inherit" underline="none" href={href}>
    <ListItemButton>
      <ListItemIcon>
          {icon}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
    </Link>) 
}

export const mainListItems = (
  <React.Fragment>
    <MenuItem href="/dashboard" name="Dashboard" icon={<DashboardIcon/>} />
    <Link color="inherit" underline="none" href='/profile'>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleRounded/>
      </ListItemIcon>
      <ListItemText  primary="Profile" />
    </ListItemButton>
    </Link>
    <Link color="inherit"  underline="none" href='/reservation'>
    <ListItemButton>
      <ListItemIcon>
        <EventNoteRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Reservation" />
    </ListItemButton>
    </Link>
    <Link color="inherit" underline="none" href='/calendar'>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonthRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItemButton>
    </Link>
    <Link color="inherit" underline="none" href='/cars'>
    <ListItemButton>
      <ListItemIcon>
        <DirectionsCarFilledRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Cars" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);
