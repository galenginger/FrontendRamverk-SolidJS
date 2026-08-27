import { createSignal, For, Show } from 'solid-js'
import TodoItem from './components/TodoItem'
import './App.css'

interface Todo {
  id: number
  text: string
  done: boolean
}

function App() {
  const [todos, setTodos] = createSignal<Todo[]>([])
  const [text, setText] = createSignal('')

  const addTodo = (e: Event) => {
    e.preventDefault()
    if (!text().trim()) return
    setTodos([...todos(), { id: Date.now(), text: text(), done: false }])
    setText('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos().map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const removeTodo = (id: number) => {
    setTodos(todos().filter((t) => t.id !== id))
  }

  return (
    <div class="app">
      <header>
        <h1>Att göra</h1>
      </header>

      <main>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Vad ska göras?"
            value={text()}
            onInput={(e) => setText(e.currentTarget.value)}
          />
          <button type="submit">Lägg till</button>
        </form>

        <Show
          when={todos().length > 0}
          fallback={<p class="empty">Inga uppgifter än.</p>}
        >
          <ul>
            <For each={todos()}>
              {(todo) => (
                <TodoItem
                  text={todo.text}
                  done={todo.done}
                  onToggle={() => toggleTodo(todo.id)}
                  onRemove={() => removeTodo(todo.id)}
                />
              )}
            </For>
          </ul>
        </Show>
      </main>

      <footer>
        <p>{todos().filter((t) => !t.done).length} kvar</p>
      </footer>
    </div>
  )
}

export default App
