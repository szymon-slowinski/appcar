import { User } from '@supabase/supabase-js';
import  { useContext,useState, useEffect,createContext, Dispatch, SetStateAction } from 'react'
import {supabase} from '../db/Supabase'

interface AuthContextType{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
 
export function AuthProvider({children}:{children: React.ReactNode}){
  const [user,setUser] = useState<  User | null>(null);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const session = supabase.auth.session()
    setUser(session?.user ?? null)
    setLoading(false)

    const {data: listener} = supabase.auth.onAuthStateChange(
      async(event,session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )
    return () => {
      listener?.unsubscribe()
    }
  },[])

 const value = {
   user,
   setUser
 }

 return (
   <AuthContext.Provider value={value}>
     {!loading && children}
   </AuthContext.Provider>
 )

}

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("Missing userContext, it's not wrapped in UserProvider");
  }
  return ctx;
};