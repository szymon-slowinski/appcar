import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { supabase } from "../db/Supabase"

const resetPassword = async (email: string) => {
    const {data,error} = await supabase.auth.api.resetPasswordForEmail(email)
    if(error){
        throw error;
    }
    return data
}

export const useResetPassword = () => {
    return useMutation((email: string) => resetPassword(email),{
        onSuccess: () => {
            toast.success("We send you an email confirmation")
        },
        onError: (error: {message: string}) => {
            toast.error(error.message)
        }
    })
} 