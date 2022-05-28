import { useQuery } from "react-query";
import { useAuthContext } from "../contexts/Auth";
import { supabase } from "../db/Supabase";

interface HiCarUser {
    id: string,
    name: string,
    surname: string,
    usertype: string;
}

const getUser = async(userId: string, email: string) => {
    if(userId !== ""){
        const {data,error} = await supabase
    .from<HiCarUser>('users')
    .select("*")
    .eq('id',userId)
    .single()
    if(error){
        throw new Error(error.message)
    }
    else if(!data){
        throw new Error("User not found")
    }
    return {data, userId: data?.id, email}
}
}

export const useUser = () => {
    const {user, isLoggedIn, setIsLoggedIn} = useAuthContext()
    const query = useQuery(['user',user, isLoggedIn], () => 
        getUser(user.userId,user.email)
    )
    return {
        ...query,
        data: query.data?.data,
        userId: user.userId,
        email: user.email,
        isLoggedIn,
        setIsLoggedIn
    }
}