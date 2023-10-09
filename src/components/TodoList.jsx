import { useEffect, useState } from 'react'
import { getTodosApiFake } from '../services/apiFake' // Método reutilizable

export default function TodoList () {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    getTodosApiFake().then(setTodos)
  }, [])

  if (todos.length === 0) {
    return <h1 className='text-center'>No tienes tareas</h1>
  } // Esto es un renderizado condicional

  return (
    <ul className='mt-5'>
      {
        todos.map(todo => (
          <li key={todo.id}>
            {todo.name}
          </li> // Esto como es un ejemplo corto no es recomendable hacer un componente para mostrar una card para cada todo
        ))
      }
    </ul>
  )
}
