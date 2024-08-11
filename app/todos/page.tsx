"use client"

import { useTodosQuery } from "../feature/todos/queries";

export default function Todos() {

  const { data: todos, status, error } = useTodosQuery('done')

  return (
    <div>
      <p>TODOSSS</p>
      {todos?.map((t) => t.title)}
    </div>
  );
}
