import { useSingleCar} from './useSingleCar';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { supabase } from '../db/Supabase';
import { CarStatus,Reservation } from './types';


const insertReservationData = async({subject,starttime,endtime,
    road,name,surname,carid}:Reservation) => {
        const {data,error} = await supabase.from<Reservation>("reservation").insert({
            subject,
            starttime,
            endtime,
            road,
            name,
            surname,
            carid
        })
        .eq("carid",carid)
        if(error){
            throw new Error(error.message)
        }
        return data[0]
    }

    const updateCarStatus = async ({status}: CarStatus, carId: string) => {
    const {data,error} = await supabase
    .from('cars')
    .update({
        status
    })
    .eq("car_id",carId)
    if(error){
        throw new Error(error.message)
    }
    return data;
    }
    


export const useCreateReservation = () => {
    const history = useHistory()
    const queryClient = useQueryClient()
    
    return useMutation(
        async(values : Reservation) => {
            if(!values.carid){
                throw new Error("You did not chose your car")
            }
            else {
                const data=await insertReservationData(values)
                return data;
                
            } 
        },
        {
            onSuccess: (data) => {
                /*eslint-disable*/
                debugger;
                const {data:car}=useSingleCar(data.carid)
                if(car?.status){
                    updateCarStatus({status:false},data.carid)
                   }
                   else{
                       throw new Error ("That Car is already booked")
                   }
                toast.success("Reservation done")
                queryClient.invalidateQueries(['cars','reservation'])
                history.push('/reservation')
            },
            onError: (error:Error) => {
             toast.error(error.message)   
            }
        }
    )

}