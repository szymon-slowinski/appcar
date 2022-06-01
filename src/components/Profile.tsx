import UserProfile from "../features/UserProfile";
import PrivateRoute from "./PrivateRoute";

export default function Profile () {
  return (
      <PrivateRoute>
    <UserProfile/>
    </PrivateRoute>
  )
}

