import React,{useRef} from 'react'
import {Container,Form,Button, FormGroup} from "react-bootstrap"
import {v4 as uuidV4} from "uuid"

const Login = ({onIdSubmit}) => {
    const idRef=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        onIdSubmit(idRef.current.value)


    }

    const createNewId=()=>{
        onIdSubmit(uuidV4())
    }
  return (
    <Container className="d-flex  align-items-center" style={{height:"100vh"}}>
        <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group>
                <Form.Label>Enter Your id</Form.Label>
                <Form.Control type="text" ref={idRef} required></Form.Control>
            </Form.Group>
            <FormGroup className="d-flex gap-4 align-items-center">
            <Button className="my-2" type="submit">Login</Button>
            <Button onClick={createNewId} variant="secondary">Create new Id</Button>
            </FormGroup>
           
        </Form>
    </Container>
  )
}

export default Login;
