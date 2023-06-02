import {useEffect, useState} from "react"
import { getData } from "../utils/API"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {useQuery} from "@tanstack/react-query"


export const useTan = ()=>{
    const {isLoading,data} = useQuery({
        queryKey : ["data"],
        queryFn:getData
    })

    return {data,isLoading} as const 
}