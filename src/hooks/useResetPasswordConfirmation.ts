import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory()
    return useMutation(
        ({authToken,password}: {authToken: string,password:string}) => 
        resetPassword(authToken,password),
        {
            onSuccess: () => {
                toast.success("Your password was reset")
                history.push("/login")
            },
            onError: (error:Error) => {
                toast.error(error.message)
              }
        }
    )
}