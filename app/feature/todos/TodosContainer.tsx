"use client"

import { useState } from "react";
import { State, Todo, Todos, useTodosQuery } from "./queries";
import { useQueryClient } from "@tanstack/react-query";

export default function TodosContainer() {
  const queryClient = useQueryClient();

  const [todosState, setTodosState] = useState<State>('done');

  const { data: todos, status, error, refetch } = useTodosQuery(todosState)

  function handleTodosStateChange(newState: State) {
    setTodosState(newState);

    const dataForNewState = queryClient.getQueryData<Todos>(['todos', newState])

    if (!dataForNewState) {
      refetch()
    }
  }

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
      <div>
        <select value={todosState} onChange={(e) => handleTodosStateChange(e.target.value)}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="done">Done</option>
        </select>
      </div>
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
