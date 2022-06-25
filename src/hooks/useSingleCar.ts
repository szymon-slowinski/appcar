import { Cars } from './useCars';
import { useQuery } from 'react-query';
import { supabase } from "../db/Supabase"

const getSingleCar = async(carId: string) => {
    if(carId !== ""){
        const {data: cars,error} = await supabase
        .from<Cars>('cars')
        .select("*")
        .eq('car_id',carId)
        .single()
        if(error){
            throw new Error(error.message)
        }
        else if(!cars){
            throw new Error ("Cars not found")
        }
        return{cars, carId: cars.car_id}
    }
        
}

export const useSingleCar = (carId: string) => {
    const query = useQuery(['cars',carId],() =>
    getSingleCar(carId)
    )
return {
    ...query,
    data: query.data?.cars,
    carId: query.data?.cars.car_id 
}
}