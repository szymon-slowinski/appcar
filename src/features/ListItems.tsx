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

export const mainListItems = (
  <React.Fragment>
    <Link href='/'>
    <ListItemButton>
      <ListItemIcon>
          <DashboardIcon/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link> 
    <Link href='/profile'>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleRounded/>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    </Link>
    <Link href='#'>
    <ListItemButton>
      <ListItemIcon>
        <EventNoteRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Reservation" />
    </ListItemButton>
    </Link>
    <Link href='/calendar'>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonthRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItemButton>
    </Link>
    <Link href='/cars'>
    <ListItemButton>
      <ListItemIcon>
        <DirectionsCarFilledRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Cars" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);
