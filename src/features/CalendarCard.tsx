import { Box, CircularProgress, Container, Typography,} from '@mui/material';
import Paper from '@mui/material/Paper';
import { AppointmentModel, EditingState, IntegratedEditing, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useEffect, useState } from 'react';
import { useReservation } from '../hooks/useReservation';
import { AddReservationModal } from './AddReservationModal';




export const CalendarCard = () => {
const [currentDate] = useState(new Date())
const {data:reservation,isLoading} = useReservation()
const [data,setData] = useState<AppointmentModel []>([])

useEffect(()=>{
if(!isLoading){
  const events: Array<AppointmentModel> = reservation.map((res) => {
    return {
      reservation_id:res.reservation_id,
      title: res.subject + res.carid,
      startDate: res.starttime, 
      endDate:res.endtime,
      notes: res.name + res.surname + res.road,
    }
  })
  setData(events)
  /*eslint-disable */
  console.log(data)
} 
},[isLoading])

const saveAppointment = async (data:any) => {
  const appointment = data.added
  const title = appointment.title
  const startTime = appointment.startDate.toISOString()
  const endtTime = appointment.endDate.toISOString()
  
  /*eslint-disable */
  console.log(startTime)
}



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
            <EditingState  onCommitChanges={saveAppointment}/>
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





