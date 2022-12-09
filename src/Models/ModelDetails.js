import React, { useState } from "react"
import {useParams} from "react-router-dom"
import { data } from "../data";

function ModelDetails() {
    const {productId} = useParams()
     const [userData, setUserData] = useState(data)
    const singleModel = userData.find(prod => prod.id === productId)
    
    return (
        <div>
            <h1>{singleModel.name}</h1>
            <p>{singleModel.description}</p>
            <p>{singleModel.likenumber}</p>
            <p>{singleModel.usernumber}</p>
            <p>{singleModel.color}</p>
        </div>
    )
}

export default ModelDetails