import { useParams } from "react-router-dom"

export const CarDetails = () => {
    const id = useParams()
    return (
        <div>CarDetails {id}</div>
    )
}