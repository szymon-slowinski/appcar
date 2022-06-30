import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { ViewState,EditingState,IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentForm,
  Toolbar,
  DateNavigator,
  TodayButton
} from '@devexpress/dx-react-scheduler-material-ui';
import { ReactNode, useState } from 'react';


export const CalendarCard = () => {
  const [currentDate,setCurrentDate] = useState(new Date())
  const schedulerData = [
    { startDate: '2022-06-01T09:45', endDate: '2022-06-01T11:00', title: 'Meeting' },
    { startDate: '2022-06-02T12:00', endDate: '2022-06-02T13:30', title: 'Go to a gym' },
  ];

  const handleDate = () => {
    setCurrentDate(currentDate)
  }

  const saveAppointment = (data:ReactNode) => {
    /* eslint-disable */ 
    console.log("Commit changes")
    console.log("data" + data)
  }

    return (
        <Box sx={{width:"100%"}}>
    <Paper>
    <Scheduler
    data={schedulerData}
    >
      <ViewState 
      currentDate={currentDate}
      onCurrentDateChange={handleDate}
      />
      <EditingState onCommitChanges={saveAppointment}/>
      <IntegratedEditing/>
      <MonthView />
      <Toolbar/>
      <DateNavigator/>
      <TodayButton/>
      <Appointments />
      <AppointmentForm/>
    </Scheduler>
  </Paper>
    </Box>
    )
}





