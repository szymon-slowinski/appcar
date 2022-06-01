import { useMutation} from "react-query";
import {  useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()
    return useMutation(async ()=> logout(),{
        onSuccess:() => 
        {
            setToStorage("userid","");
            setToStorage("email","");
            setUser({userId: "", email:""});
            setIsLoggedIn(false);
            navigate("/home")
        }
    })
}