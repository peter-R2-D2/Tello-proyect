import TodoList from '@/components/TodoList'
export default function Home () {
  return (
    <div className='bg-black h-screen text-white flex justify-center items-center'>
      <div className='w-[350px]'>
        <h1 className='text-center text-6xl'>Lista de Tareas</h1>
        <TodoList />
      </div>
    </div>
  )
}
