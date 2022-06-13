import { useMutation, useQueryClient } from 'react-query';
import { useUser } from './useUser';
import { supabase } from '../db/Supabase';
import { UserData } from './types';
import { toast } from 'react-toastify';


const updateUser = async ({name,surname}: UserData,userId: string) => {
    const {data,error} = await supabase
    .from("users")
    .update({
        name,
        surname
    })
    .eq("id",userId)
    if(error){
        return new Error(`Can't update user name and surname`)
    }
    return data;
}

export const useUpdateUserNameAndSurname = () => {
    const {userId} = useUser()
    const queryClient=useQueryClient();
    return useMutation((values : UserData) => updateUser(values,userId),{
        onSuccess: () => {
            toast.success("User updated")
            queryClient.invalidateQueries(["user"])
        },
        onError: (error:Error) => {
            toast.error(error.message)
          }
    })
}