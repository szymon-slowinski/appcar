import { Box, CircularProgress } from '@mui/material';
import { Inject, ScheduleComponent,Day,Week,WorkWeek } from '@syncfusion/ej2-react-schedule';
import { useState } from 'react';
import { useReservation } from '../hooks/useReservation';


export const CalendarCard = () => {
const [currentDate] = useState(new Date())
const {data:reservation,isLoading} = useReservation()


    return (
      (!isLoading ? (
        <Box sx={{width:"100%"}}>
        <ScheduleComponent selectedDate={currentDate}>
          <Inject services={[Day,Week,WorkWeek]}/>
        </ScheduleComponent>
        {reservation.map((res) => (
          <div key={res.reservation_id}>
            <h3>{res.subject}</h3>
            <h3>{res.starttime}</h3>
            <h3>{res.endtime}</h3>
            <h3>{res.road}</h3>
            <h3>{res.name}</h3>
            <h3>{res.surname}</h3>
            <h3>{res.carid}</h3>
          </div>
        ))}
        </Box>
        
      ) : <CircularProgress/> )
    
    )
}





