import { toast } from 'react-toastify';
import { useSingleCar } from './useSingleCar';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { supabase } from '../db/Supabase';
import { CarStatus, Reservation } from './types';


const insertReservationData = async({subject,starttime,endtime,
    road,name,surname,carid}:Reservation, car_Id:string) => {
        const {data,error} = await supabase.from("reservation").insert({
            subject,
            starttime,
            endtime,
            road,
            name,
            surname,
            carid
        })
        .eq("carid",car_Id)
        if(error){
            throw new Error(error.message)
        }
        return data
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
    const {id} = useParams<{id: string}>()
    const {carId} = useSingleCar(id)
    const queryClient = useQueryClient()

    return useMutation(
        async(values : Reservation) => {
            if(!values.carid){
                throw new Error("You did not chose your car")
            }
            else {
                async(value : CarStatus) => {
                    if(typeof carId === "string"){
                     await updateCarStatus(value,carId)
                     await insertReservationData(values,carId)
                    } 
                } 
            } 
        },
        {
            onSuccess: () => {
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