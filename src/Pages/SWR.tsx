
import styled from 'styled-components'
import { useFetchSWR } from '../hooks/useSWR'



const UseSWR = () => {

    
  const {isLoading,data} = useFetchSWR()

  return (
 <>
  {
    isLoading ? <div>Loading data ...</div> :   <div style={{display:"flex",alignItems:"center" ,flexDirection:"column", width:"100%"}}>
    <div style={{marginTop:"20px"}}>SWR</div>
<div>
    <Container>
    {
        data?.data?.map((el:any)=>(
            <Card>
            <Image src={el.images[2]} loading='lazy'/>
        </Card>
        ))
    }
    </Container>
</div>
</div>
  }
 </>
  )
}

export default UseSWR



const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Card = styled.div`
border-radius: 3px;
width: 150px;
height: 180px;
border:1px solid silver;
margin: 5px;
overflow: hidden;
`

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`