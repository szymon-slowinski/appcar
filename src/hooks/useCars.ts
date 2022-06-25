import { useQuery } from 'react-query';
import { supabase } from "../db/Supabase"

export interface Cars {
    car_id: string,
    make: string,
    model: string,
    production_year: string,
    registration_number: string,
    vehicle_mileage: number,
    damage_history: string,
    car_review: string,
}

const getCars = async() => {
        const {data: cars,error} = await supabase
        .from<Cars>('cars')
        .select("*")
        if(error){
            throw new Error(error.message)
        }
        else if(!cars){
            throw new Error ("Cars not found")
        }
        return{cars}
}

export const useCars = () => {
    const query = useQuery(['cars'],() =>
    getCars()
    )
return {
    ...query,
    data: query.data?.cars || []
}
}