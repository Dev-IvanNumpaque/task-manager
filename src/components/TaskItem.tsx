import React, { useState } from 'react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTitle(task.title);
  };

  const handleSave = () => {
    if (editedTitle.trim()) {
      onEdit({ ...task, title: editedTitle });
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditedTitle(task.title);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button onClick={handleSave} className="save-btn">
            Guardar
          </button>
          <button onClick={() => setIsEditing(false)} className="cancel-btn">
            Cancelar
          </button>
        </div>
      ) : (
        <div className="task-content">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="task-checkbox"
          />
          <span className="task-title">{task.title}</span>
          <div className="task-actions">
            <button onClick={handleEdit} className="edit-btn">
              Editar
            </button>
            <button onClick={() => onDelete(task.id)} className="delete-btn">
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;