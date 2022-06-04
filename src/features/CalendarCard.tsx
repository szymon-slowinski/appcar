import {useState}from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Box } from '@mui/material';

export const CalendarCard = () => {
    const [dataValue,setDataValue] = useState<Date | null>(new Date());
    return (
        <Box sx={{width:"100%"}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={dataValue}
        onChange={(newValue) => {
          setDataValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </Box>
    )
}