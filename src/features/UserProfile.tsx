import PrivateRoute from "../components/PrivateRoute";
import {LayoutUserProfile} from "./Layout";

export default function UserProfile(){
    return (
        <PrivateRoute>
        <LayoutUserProfile/>
        </PrivateRoute>
    )
}