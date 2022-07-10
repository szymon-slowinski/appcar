import { DataGrid} from "@mui/x-data-grid"
import { Link} from "react-router-dom"
import { useCars } from "../hooks/useCars"

export const CarsTable = () => {
    const columns =[
        {
          field: 'make',
          headerName: 'Make',
          width: 200,
          editable: false,
        },
        {
          field: 'model',
          headerName: 'Model',
          width: 200,
          editable: false,
        },
        {
          field: 'production_year',
          headerName: 'Production Year',
          width: 200,
          editable: false,
        },
        {
            field: 'registration_number',
            headerName: 'Registration Number',
            width: 200,
            editable: false,
          },
          {
            field: 'vehicle_mileage',
            headerName: 'Vehicle Mileage',
            width: 200,
            editable: false,
          },
          {
            field: 'damage_history',
            headerName: 'Damage History',
            width: 200,
            editable: false,
          },
          {
            field: 'car_review',
            headerName: 'Car Review',
            width: 200,
            editable: false,
          },
          {
            field: 'status',
            headerName: 'Status',
            width: 200,
            editable: false,
          },
        {
          field: "actions",
          headerName: "Action",
          /*eslint-disable */
          renderCell: (row:any):JSX.Element =>{
            return  <div>
               <Link to={{pathname: `/cars/${row.id}/edit`}}>Edit</Link>
                </div>
          }
        }
      ]
     const {isLoading, data}= useCars()
    return (
        <div>
           <DataGrid
           autoHeight
           loading={isLoading}
           columns={columns}
           rows={data}
           getRowId={(row)=>row.car_id}
           />
        </div>
    )
}