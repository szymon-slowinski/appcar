import { User } from "./types";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/Auth";
import { supabase } from "../db/Supabase";
import { setToStorage } from "../features/utils/localStorage";
import { toast } from "react-toastify";

export const  useLogin = ()=> {
const navigate = useNavigate()
const {setUser, setIsLoggedIn} = useAuthContext()

return useMutation(
    "login",
    async ({email, password} : User ) => {
        const {user,error} = await supabase.auth.signIn({
            email,
            password
        });
        if(error) {
            throw error;
        }
        return user;
    },
    {
        onSuccess: (user: SupabaseUser | null) => {
            if(user && user.email){
                setToStorage("userid", user.id);
                setToStorage("email", user.email);
                setUser({ userId: user.id, email: user.email });
                setIsLoggedIn(true);
                navigate("/")
            }
        },
        onError: (error:Error) => {
            toast.error(error.message)
          }
    }
)
}