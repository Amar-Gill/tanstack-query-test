export type State = 'all' | 'open' | 'done'

export type Todo = {
  id: number
  state: State
  title: string
}

export const todos: Todo[] = [
  { id: 1, title: 'chill', state: 'done' },
  { id: 2, title: 'vibe', state: 'done' },
  { id: 3, title: 'reign supreme among mortals', state: 'open' }
]
