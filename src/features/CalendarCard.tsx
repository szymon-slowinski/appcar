import { Box, CircularProgress, Container, Typography,} from '@mui/material';
import Paper from '@mui/material/Paper';
import { EditingState, IntegratedEditing, ViewState,ChangeSet } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useState } from 'react';
import { useReservation } from '../hooks/useReservation';
import { AddReservationModal } from './AddReservationModal';

export const CalendarCard = () => {
const [currentDate] = useState(new Date())
const {data,isLoading} = useReservation()

/*eslint-disable */
const handleChange=(changes: ChangeSet)=>{}

    return (
      (!isLoading ? (
        <Box sx={{width:"100%", display:"flex", flexDirection:"column",}}>
       <Container>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
        There are cars reservation. You can manage all of them.
        </Typography>
        <Box sx={{display:"flex",flexDirection:"row-reverse"}}>
        <AddReservationModal/>
        </Box>
       </Container>
        <Paper>
          <Scheduler data={data}>
            <ViewState currentDate={currentDate}/>
            <EditingState onCommitChanges={handleChange}/>
            <IntegratedEditing/>
            <MonthView/>
            <Appointments/>
            <AppointmentTooltip
            showCloseButton
            showOpenButton
            />
            <AppointmentForm
              readOnly       
            />
          </Scheduler>
        </Paper>
        </Box>
      ) : <CircularProgress/> )
    
    )
}





