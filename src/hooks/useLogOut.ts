import { useMutation,useQueryClient } from "react-query";
import { supabase } from "../db/Supabase";

const logout = async () => {
    const {error} = await supabase.auth.signOut()

    if(error){
        throw error
    }
}

export default function useLogOut(){
    const queryClient = useQueryClient()
    return useMutation(()=> logout(),{
        onSuccess:() => {
            queryClient.removeQueries()
            //TODO: localstorage
        }
    })
}