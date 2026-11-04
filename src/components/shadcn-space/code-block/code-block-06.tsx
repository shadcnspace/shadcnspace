import { LanguageTabsCodeBlock } from "@/components/ui/code-block";
import type { LanguageTab } from "@/components/ui/code-block";

const tabs: LanguageTab[] = [
  {
    label: "JavaScript",
    filename: "todo-list.js",
    language: "js",
    code: `class TodoList {
  constructor() {
    this.todos = [];
  }

  add(task) {
    this.todos.push({ task, done: false });
  }

  remove(index) {
    this.todos.splice(index, 1);
  }

  complete(index) {
    this.todos[index].done = true;
  }

  list() {
    return this.todos;
  }
}`,
  },
  {
    label: "Python",
    filename: "todo-list.py",
    language: "python",
    code: `class TodoList:
  def __init__(self):
    self.todos = []

  def add(self, task):
    self.todos.append({"task": task, "done": False})

  def remove(self, index):
    self.todos.pop(index)

  def complete(self, index):
    self.todos[index]["done"] = True

  def list(self):
    return self.todos`,
  },
  {
    label: "React",
    filename: "todo-list.tsx",
    language: "tsx",
    code: `import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState("")

  const addTodo = () => {
    if (!input.trim()) return
    setTodos([...todos, input])
    setInput("")
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <ul className="space-y-1">
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </div>
  )
}`,
  },
];

export default function CodeBlockLanguageTabs() {
  return (
    <div className="w-full max-w-lg">
      <LanguageTabsCodeBlock
        tabs={tabs}
        showLineNumbers
        scrollable
        maxHeight={280}
      />
    </div>
  );
}
