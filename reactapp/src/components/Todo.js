import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <label className="todo-label">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.task}
        </span>
      </label>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} data-testid="delete-icon" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
