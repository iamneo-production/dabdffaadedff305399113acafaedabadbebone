import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <label className="todo-label">
        {/* Write a Code here for checkbox input */}
          {/* Set the input type to "checkbox"
          Add the class "todo-checkbox" for styling
          Set the checked attribute to "task.completed"
          Add a onCange event calling "toggleComplete" function with "task.id" as argument */}

     
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.task}
        </span>
      </label>
      <div>

      {/* Write code here to add icons for editing and deleting tasks using "FontAwesomeIcon" Set up onClick event handlers for each icon.

        Edit Icon: Use the faPenToSquare icon from FontAwesome. Clicking should trigger editTodo with "task.id"

        Delete Icon: Use faTrash icon from FontAwesome and also Set data-testid as "delete-icon".
        Clicking should call deleteTodo with "task.id" */}
       
      </div>
    </div>
  );
};
