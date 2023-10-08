import { useEffect, useState } from 'react'

export default function TodoList () {
  const API_URL = 'https://mocki.io/v1/9668e237-bded-476f-aff2-515d5019b41a'

  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => setTodos(data))
  }, [])

  return (
    <ul className='mt-5'>
      {
        todos.map(todo => (
          <li key={todo.id}>
            {todo.name}
          </li>
        ))
      }
    </ul>
  )
}
