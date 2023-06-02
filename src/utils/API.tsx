const url:string = "https://api.escuelajs.co/api/v1/products"

import axios from "axios"


export const getData = async ()=>{
    try {
        return await axios.get(url)
    } catch (error) {
        console.log(error);
        
    }
}