import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onEdit: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggleComplete, onEdit }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">No hay tareas pendientes. ¡Añade una nueva tarea!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;