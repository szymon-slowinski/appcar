import { useParams } from "react-router-dom"

export const CarDetails = () => {
    const {id} = useParams<{id:string}>()
    return (
        <div>CarDetails {id}</div>
    )
}