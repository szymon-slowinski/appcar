import { useMutation } from 'react-query';
import { useUser } from './useUser';
import { supabase } from '../db/Supabase';
import { UserData } from './types';
import { toast } from 'react-toastify';


const updateUser = async ({name,surname}: UserData,userId: string) => {
    const {error} = await supabase
    .from("users")
    .update({
        name,
        surname
    })
    .eq("id",userId)
    if(error){
        return new Error(`Can't update user name and surname`)
    }
}

export const useUpdateUserNameAndSurname = () => {
    const {userId} = useUser()
    return useMutation((values : UserData) => updateUser(values,userId),{
        onSuccess: () => {
            toast.success("User updated")
        },
        onError: (error: {message: string}) => {
            toast.error(error.message)
        }
    })
}