import { useEffect, useState } from "react";
import { BASE_URL } from "../helper";
import axios from "axios";

export const useFetchData = (url)=>{
    const [data, setData] = useState(null)
    const [error, setError] = useState("")

    useEffect(()=>{
        axios.get(`${BASE_URL}${url}`)
        .then(response=>{
            const {data}= response
            const apiData = data.data
            setData
            (apiData)
            console.log("data from hook----->", apiData)
            //return apiData
        })
        //console.log("data from hook----->", data)

    },[url])
    return {data}
}