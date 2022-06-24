import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import { useCars } from "../hooks/useCars"

export const CarsTable = () => {
    const columns =[
        {
          field:'id', headerName:'ID',width:200
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
            headerName: 'Vegicle Mileage',
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
          renderCell: () =>
               <div>
               <Link to={{pathname: `/cars/`, state:''}}>Edit</Link>
                </div>
          
        }
      ]

      useEffect(()=> {
        setRowData(data)
      },[])

      const [rowData,setRowData] = useState([])
      const {data}= useCars()
    return (
        <div>
            <DataGrid 
            autoHeight
            pageSize={5}
            columns={columns}
            rows={rowData}
            />
        </div>
    )
}