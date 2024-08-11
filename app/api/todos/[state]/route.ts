import { todos } from "../../db"

export async function GET(request: Request, { params }: { params: { state: string } }) {

  const state = params.state;

  return Response.json({
    todos: state === 'all' ? todos : todos.filter((t) => t.state === state)
  })
}
