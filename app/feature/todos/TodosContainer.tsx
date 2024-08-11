"use client"

import { Todo, useTodosQuery } from "./queries";

export default function TodosContainer() {
  const { data: todos, status, error } = useTodosQuery('done')

  if (status === 'pending') {
    return (
      <p>Loading...</p>
    )
  }

  if (error) {
    return (
      <p>{error.message}</p>
    )
  }

  return (
    <div>
      <p>Current Todos</p>
      {todos?.length ? todos.map((t) => <TodoItem key={t.id} todo={t} />) : <p>No Todos</p>}
    </div>
  );
}

function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div>
      <h2 className="text-2xl">{todo.title}</h2>
      <p>state: {todo.state}</p>
    </div>
  )
}
