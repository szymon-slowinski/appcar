import { useMutation,useQueryClient } from "react-query";
import { useAuthContext } from "../contexts/Auth";
import { supabase } from "../db/Supabase";
import { setToStorage } from "../features/utils/localStorage";

const logout = async () => {
    const {error} = await supabase.auth.signOut()
    if(error){
        throw error
    }
}

export default function useLogOut(){
    const {setUser,setIsLoggedIn} = useAuthContext()
    const queryClient = useQueryClient()
    return useMutation(()=> logout(),{
        onSuccess:() => 
        {
            setToStorage("userid","");
            setToStorage("email","");
            setUser({userId: "", email:""});
            setIsLoggedIn(false);
            queryClient.removeQueries();
        }
    })
}