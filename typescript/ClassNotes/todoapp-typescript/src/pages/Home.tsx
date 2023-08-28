import { Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const url:string = import.meta.env.VITE_BASE_URL

  const getTodos = async () => {
    try {
      // const {data} = await axios(url)
      const {data} = await axios<TodoType[]>(url)
      console.log(data)
      setTodos(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getTodos()
  },[])
  
  return (
    <Container>
      <Typography>Todo App with Typescript</Typography>
    </Container>
  )
}

export default Home