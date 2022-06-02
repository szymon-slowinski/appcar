import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { supabase } from '../db/Supabase';

export const useUpdateEmail = () => {
    return useMutation(
        async (email: string) => {
            const {user,error} = await supabase.auth.update({
                email
            });
            if(error) {
                throw new Error(`Can't update email`)
            }
            return user
        },
        {
            onSuccess: () => {
                toast.success("We sent you an email confirmation for change email")
            },
            onError: () => {
                toast.error(`Can't update email`)
            }
        }
    )
}