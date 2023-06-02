import React from 'react'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { useTan } from '../hooks/UseTan'
import ReadData from './ReadData'


const TanStack = () => {

    const client = new QueryClient()

  return (
    <div>
    <QueryClientProvider client={client}>
        <ReadData/>
    </QueryClientProvider>
    </div>
  )
}

export default TanStack