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
    <ListItemButton>
      <ListItemIcon>
          <Link href='/'><DashboardIcon/></Link> 
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link href='/profile'><AccountCircleRounded/></Link>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EventNoteRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Reservation" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonthRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DirectionsCarFilledRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Cars" />
    </ListItemButton>
  </React.Fragment>
);
