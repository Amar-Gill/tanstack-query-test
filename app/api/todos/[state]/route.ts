
type State = 'all' | 'open' | 'done'

type Todo = {
  id: number
  state: State
  title: string
}

export async function GET(request: Request, { params }: { params: { state: string } }) {
  const todos: Todo[] = [
    { id: 1, title: 'chill', state: 'done' },
    { id: 2, title: 'vibe', state: 'done' },
    { id: 3, title: 'reign supreme among mortals', state: 'open' }
  ]

  const state = params.state;

  return Response.json({
    todos: todos.filter((t) => t.state === state)
  })
}
