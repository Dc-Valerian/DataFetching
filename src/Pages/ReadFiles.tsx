import {  PropsWithChildren } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const ReadFiles:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
         <Container>
        <Main>
          <Nav>
            <Button  to="/"   bg="purple">useEffect</Button>
            <Button to="/tanstack"  bg="darkorange">TanStack</Button>
            <Button  to="/swr" bg="#0251ac">SWR</Button>
          </Nav>
        </Main>
        <Holder>
          {children}
        </Holder>
      </Container>
    </div>
  )
}

export default ReadFiles
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

const Button = styled(Link)<{bg:string}>`
margin: 0 10px;
background-color: ${({bg}) => bg};
color: white;
padding: 10px 25px;
border-radius: 3px;
text-transform: uppercase;
font-weight: bold;
font-size: 12px;
transition: all 350ms;
text-decoration: none;

:hover{
  cursor: pointer;
  transform: translate(0px, -10px);
}
`

const Nav = styled.div`
display: flex;
`

const Main = styled.div`
width: 80%;
display: flex;
justify-content: center;

`

const Container = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
`