
import  { useContext,useState, useEffect,createContext} from 'react'
import { getFromStorage, setToStorage } from '../features/utils/localStorage';

interface AuthContextType{
 isLoggedIn: boolean;
 setIsLoggedIn: (isLoggedIn: boolean) => void;
 user: ({userId: string; email: string;})
 setUser:({userId,email}: {userId: string; email: string;}) => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
 
export const AuthProvider = ({children}:{children: React.ReactNode})=>{
  const [user,setUser] = useState({userId: "",email: ""});
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
    if(!isLoggedIn && user.userId === "" && user.email === ""){
      const userId = getFromStorage<string>("userid") ?? ""
      const email = getFromStorage<string>("email") ?? ""
    setUser({userId,email})
    if(userId && email){
      setIsLoggedIn(true)
    }
  }
  setToStorage("userid",user.userId)
  setToStorage("email",user.email)
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[isLoggedIn])

 const value = {
   user,
   setUser,
   isLoggedIn,
   setIsLoggedIn
 }

 return (
   <AuthContext.Provider value={value}>
     {children}
   </AuthContext.Provider>
 )

}

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("Missing AuthContext, it's not wrapped in UserProvider");
  }
  return ctx;
};