import { useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSingleCar } from './useSingleCar';
import { supabase } from "../db/Supabase";
import { Cars } from "./useCars";
import { useMutation, useQueryClient } from 'react-query';

const updateCar = async ({car_id,make,model,production_year,registration_number,
    vehicle_mileage,damage_history,car_review}: Cars) => {
const {data,error} = await supabase
.from('cars')
.update({
    make,
    model,
    production_year,
    registration_number,
    vehicle_mileage,
    damage_history,
    car_review
})
.eq("car_id",car_id)
if(error){
    throw new Error(error.message)
}
return data;
}

export const useUpdateCarDetails = () => {
    const {id} = useParams<{id:string}>()
    const {carId} = useSingleCar(id)
    const queryClient = useQueryClient()
    return useMutation( 
        async (values : Cars) => {
            if(typeof carId === "string"){
                return await updateCar({...values,car_id: carId})
            }
        },
        {
            onSuccess: () => {
                toast.success("Car updated")
                queryClient.invalidateQueries(['cars'])
            },
            onError: (error:Error) => {
                toast.error(error.message)
            }
        }
        )

}