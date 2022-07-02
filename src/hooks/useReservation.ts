import { useQuery } from 'react-query';
import { supabase } from "../db/Supabase"

export interface Reservation {
 reservation_id: string,
 subject:string,
 starttime:string,
 endtime: string,
 road:string,
 name: string,
 surname: string,
 carid: string
}

const getReservation = async() => {
    const {data: reservation,error} = await supabase
    .from<Reservation>('reservation')
    .select("*")
    if(error){
        throw new Error(error.message)
    }
    else if(!reservation){
        throw new Error ("Reservation not found ")
    }
    return{reservation}
}

export const useReservation = () => {
    const query = useQuery(['reservation'],() => 
    getReservation()
    )
    return{
        ...query,
        data: query.data?.reservation || []
    }
}