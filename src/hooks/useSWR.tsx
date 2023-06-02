import {useEffect, useState} from "react"
import { getData } from "../utils/API"
import {useQuery} from "@tanstack/react-query"
import useSWR from "swr"

export const useFetchSWR = ()=>{
    const {isLoading,data} = useSWR(
        "data", getData    
    )

    return {data,isLoading} as const 
}