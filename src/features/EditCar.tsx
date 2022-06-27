import { useParams } from "react-router-dom"
import { useSingleCar } from "../hooks/useSingleCar"

export const EditCar = () => {
    const {id} = useParams<{id:string}>()
    const {data:cars} = useSingleCar(id)

    return (
        <div>
            {cars?.car_id}{cars?.make}{cars?.model}
        </div>
    )
}