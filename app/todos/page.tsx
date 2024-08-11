"use client"

import { useTodosQuery } from "../feature/todos/queries";

export default function Todos() {
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
      <p>TODOSSS</p>
      {todos?.length ? todos.map((t) => t.title) : <p>No Todos</p>}
    </div>
  );
}
