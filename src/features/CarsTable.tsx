import { DataGrid} from "@mui/x-data-grid"
import { Link} from "react-router-dom"
import { useCars } from "../hooks/useCars"

export const CarsTable = () => {
    const columns =[
        {
          field:'car_id', headerName:'ID',width:200
        },
        {
          field: 'make',
          headerName: 'Make',
          width: 200,
          editable: true,
        },
        {
          field: 'model',
          headerName: 'Model',
          width: 200,
          editable: true,
        },
        {
          field: 'production_year',
          headerName: 'Production Year',
          width: 200,
          editable: true,
        },
        {
            field: 'registration_number',
            headerName: 'Registration Number',
            width: 200,
            editable: true,
          },
          {
            field: 'vehicle_mileage',
            headerName: 'Vehicle Mileage',
            width: 200,
            editable: true,
          },
          {
            field: 'damage_history',
            headerName: 'Damage History',
            width: 200,
            editable: true,
          },
          {
            field: 'car_review',
            headerName: 'Car Review',
            width: 200,
            editable: true,
          },
        {
          field: "actions",
          headerName: "Action",
          /*eslint-disable */
          renderCell: (row:any):JSX.Element =>{
            return  <div>
               <Link to={{pathname: `/cars/${row.car_id}/edit`, state:''}}>Edit</Link>
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