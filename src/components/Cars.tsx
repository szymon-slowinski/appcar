import { CarLayout } from "../features/Layout";
import PrivateRoute from "./PrivateRoute";

export default function Cars () {
    return (
        <PrivateRoute>
            <CarLayout/>
        </PrivateRoute>
    )
}