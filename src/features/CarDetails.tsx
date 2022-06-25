
import { CircularProgress } from "@mui/material"
import { useParams } from "react-router-dom"
import { useSingleCar } from "../hooks/useSingleCar"

export const CarDetails = () => {
    const {id} = useParams<{id:string}>()
    const {data:cars,isLoading} = useSingleCar(id)
 
    /*eslint-disable*/
    console.log(cars )

    return (
    (!isLoading ?  (
        <div>
            {cars?.car_id}
            {cars?.make}
            {cars?.model}
        </div>
    ) : <CircularProgress/> )
        
    )
}