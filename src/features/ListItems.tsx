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
    <MenuItem href='/profile' name='Profile' icon={<AccountCircleRounded/>}/>
    <MenuItem href='/reservation' name='Reservation' icon={<EventNoteRoundedIcon/>}/>
    <MenuItem href='/calendar' name='Calendar' icon={<CalendarMonthRoundedIcon/>}/>
    <MenuItem href='/cars' name='Cars' icon={<DirectionsCarFilledRoundedIcon/>}/>
  </React.Fragment>
);
