import { useMutation} from "react-query";
import {  useHistory } from "react-router-dom";
import { toast } from "react-toastify";
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
    const history = useHistory()
    return useMutation(async ()=> logout(),{
        onSuccess:() => 
        {
            setToStorage("userid","");
            setToStorage("email","");
            setUser({userId: "", email:""});
            setIsLoggedIn(false);
            history.push("/")
        },
        onError: (error:Error) => {
            toast.error(error.message)
          }
    })
}