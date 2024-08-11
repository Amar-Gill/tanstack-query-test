export type State = 'all' | 'open' | 'done'
export type Todo = {
  id: number
  state: State
  title: string
}
export type Todos = ReadonlyArray<Todo>

const fetchTodos = async (state: State): Promise<Todos> => {
  const response = await fetch(`todos/${state}`)
  return (await response.json()).todos;
}

// export const useTodosQuery = (state: State) =>
//   useQuery({
//     queryKey: ['todos', state],
//     queryFn: () => fetchTodos(state),
//   })
