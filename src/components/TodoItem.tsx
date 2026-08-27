interface TodoItemProps {
  text: string
  done: boolean
  onToggle: () => void
  onRemove: () => void
}

function TodoItem(props: TodoItemProps) {
  return (
    <li classList={{ done: props.done }}>
      <span onClick={props.onToggle}>{props.text}</span>
      <button type="button" onClick={props.onRemove} aria-label="Ta bort uppgift">
        ✕
      </button>
    </li>
  )
}

export default TodoItem
