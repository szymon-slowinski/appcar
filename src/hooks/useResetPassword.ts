import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { supabase } from "../db/Supabase"

const resetPassword = async (email: string) => {
    const {data,error} = await supabase.auth.api.resetPasswordForEmail(email)
    if(error){
        throw error;
    }
     /* eslint-disable */
    console.log(data)
    return data
}

export const useResetPassword = () => {
    return useMutation((email: string) => resetPassword(email),{
        onSuccess: () => {
            toast.success("We send you an email confirmation")
        },
        onError: (error:Error) => {
            toast.error(error.message)
          }
    })
} 