type State = 'all' | 'open' | 'done'

type Todo = {

  id: number

  state: State

  title: string

}

export async function GET(request: Request) {
  const todos: Todo[] = [
    { id: 1, title: 'chill', state: 'open' },
    { id: 2, title: 'vibe', state: 'open' },
    { id: 3, title: 'reign supreme among mortals', state: 'open' }
  ]

  return Response.json({
    todos
  })
}
