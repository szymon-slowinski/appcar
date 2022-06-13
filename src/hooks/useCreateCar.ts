import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { supabase } from '../db/Supabase';
import { CarProperties, CreateCar } from './types';


const insertCarData = async ({make,model,production_year,registration_number,
  vehicle_mileage,damage_history,car_review}: CarProperties) => {
    const {data,error} = await supabase.from("cars").insert({
      make,
      model,
      production_year,
      registration_number,
      vehicle_mileage,
      damage_history,
      car_review
    })
    if(error){
      throw error
    }
    return data
    }

export const useCreateCar = () => {
    const navigate = useNavigate()
    
    return useMutation(
        async(values: CreateCar) => {
          if(!values.make){
            throw new Error("Make of car is undefined")
          }else {
            return await insertCarData({
              ...values,
            })
          }
        },
        {
          onSuccess: () => {
            toast.success("You added a car")
            navigate('/cars')
          },
          onError: (error:Error) => {
            toast.error(error.message)
          }
        }
    )
}