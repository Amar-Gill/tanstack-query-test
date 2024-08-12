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

  if (!todos.length) {
    return (
      <p>No Todos sorry</p>
    )
  }

  return (
    <div>
      <h1 className="text-3xl">Current Todos</h1>
      <div className="space-y-3">
        {todos.map((t) => <TodoItem key={t.id} todo={t} />)}
      </div>
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
