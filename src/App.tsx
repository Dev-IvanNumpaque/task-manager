import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { Task } from './types/Task'

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const editTask = (editedTask: Task) => {
    setTasks(tasks.map(task => 
      task.id === editedTask.id ? editedTask : task
    ))
  }

  return (
    <div className="app-container">
      <header>
        <h1>Gestor de Tareas</h1>
      </header>
      <main>
        <TaskForm onAddTask={addTask} />
        <TaskList 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggleComplete={toggleComplete} 
          onEdit={editTask} 
        />
      </main>
      <footer>
        <p>Gestor de Tareas creado con React y TypeScript</p>
      </footer>
    </div>
  )
}

export default App
