import { CalendarLayout } from "../features/Layout"
import PrivateRoute from "./PrivateRoute"

export default function Calendar() {
    return (
        <PrivateRoute>
        <CalendarLayout/>
        </PrivateRoute>
    )
}