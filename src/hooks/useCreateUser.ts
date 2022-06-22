import { useMutation } from "react-query"
import { useHistory} from "react-router-dom"
import { toast } from "react-toastify"
import {supabase} from "../db/Supabase"
import { User, CreateUser,NewUser } from "./types"



const createUser = async (userData: User) => {
const {user,error: signUpError} = await supabase.auth.signUp({
email: userData.email,
password:userData.password
})

if(signUpError){
  throw signUpError
}
return user;
}

const insertUserData = async ({id,name,surname}: NewUser) => {
const {error} = await supabase.from("users").insert({
  id,
  name,
  surname
})
if(error){
  throw error
}
}


export const  useCreateUser = () => {
  const history = useHistory()
  return useMutation(
    async (user: CreateUser) => {
      const createdUser = await createUser(user);
      if(createdUser){
        return await insertUserData({
          id: createdUser.id,
          name: user.name,
          surname: user.surname
        });
      }
    },{
      onSuccess: () => {
        history.push("/dashboard")
      },
      onError: (error:Error) => {
        toast.error(error.message)
      }
    }
  )
}