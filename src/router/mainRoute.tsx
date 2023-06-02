import {createBrowserRouter} from "react-router-dom"
import ReadFiles from "../Pages/ReadFiles"
import Layout from "../Components/Common/Layout"
import UseEffect from "../Pages/UseEffect"
import SWR from "../Pages/SWR"
import TanStack from "../Pages/TanStack"

export const mainRoute = createBrowserRouter ([
    {
    path:"/",
    element:<Layout/>,
    children:[
        {
            index:true,
            element:<ReadFiles>
                <UseEffect/>
            </ReadFiles>
        },
        {
            path:"tanstack",
            element:<ReadFiles>
                <TanStack/>
            </ReadFiles>
        },
        {
            path:"swr",
            element:<ReadFiles>
                <SWR/>
            </ReadFiles>
        }
    ]
},
])
