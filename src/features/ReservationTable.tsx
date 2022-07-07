import { DataGrid } from "@mui/x-data-grid"
import { Link } from "react-router-dom"
import { useReservation } from "../hooks/useReservation"

export const ReservationTable = () => {
    const columns =[
        {
          field:'reservation_id', headerName:'ID',width:200
        },
        {
          field: 'subject',
          headerName: 'Subject',
          width: 200,
          editable: false,
        },
        {
          field: 'starttime',
          headerName: 'Start Time',
          width: 200,
          editable: false,
        },
        {
          field: 'endtime',
          headerName: 'End Time',
          width: 200,
          editable: false,
        },
        {
            field: 'road',
            headerName: 'Road',
            width: 200,
            editable: false,
          },
          {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: false,
          },
          {
            field: 'surname',
            headerName: 'Surname',
            width: 200,
            editable: false,
          },
          {
            field:'carid', headerName:'Car ID',width:300
          },
        {
          field: "actions",
          headerName: "Action",
          /*eslint-disable */
          renderCell: (row:any):JSX.Element =>{
            return  <div>
               <Link to={{pathname: `/reservation/${row.id}/edit`}}>Edit</Link>
                </div>
          }
        }
      ]
    
      const {isLoading,data} = useReservation()

    return (
        <div>
            <DataGrid
            autoHeight
            loading={isLoading}
            columns={columns}
            rows ={data}
            getRowId={(row) => row.reservation_id}
            />
        </div>
    )
}