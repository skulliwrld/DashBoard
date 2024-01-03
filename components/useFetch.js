"use client"

import {useState , useEffect} from "react"

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error ,setError] = useState(null);

    useEffect(()=>{
        fetch(url).then(res =>{
            if(!res.okay){
                throw Error("An Error Occur When Fetching Our Data")
            }
            res.json()
        }).then((datas) =>{
            setData(datas)
            setIsPending(false);
        }).catch(error =>{
            setIsPending(false)
            setError(error.message)
        })
    },[url])

    return {data,isPending, error}
}

export default useFetch