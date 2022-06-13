import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { supabase } from "../db/Supabase"

const resetPassword = async (authToken: string, password: string) => {
    const {error,data} = await supabase.auth.api.updateUser(authToken,{
        password
    })
    if (error){
        throw error
    }
    return data;
}

export const useResetPasswordConfirmation = () => {
    const navigate = useNavigate()
    return useMutation(
        ({authToken,password}: {authToken: string,password:string}) => 
        resetPassword(authToken,password),
        {
            onSuccess: () => {
                toast.success("Your password was reset")
                navigate("/")
            },
            onError: (error:Error) => {
                toast.error(error.message)
              }
        }
    )
}