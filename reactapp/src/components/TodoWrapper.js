import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
   // Write a Code to add a new task
  }

  const deleteTodo = (id) => { 
    // Write a Code to delete a task
  
  }

  const toggleComplete = (id) => {
    // Write a Code to toggle task completion
    
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
   // Write a Code to edit task

  };

  return (
    <div className="TodoWrapper">
      {/* Add a title as Get Things Done ! */}
      
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          // Display individual tasks
          <Todo
            // A unique key for React to efficiently manage the list
            // The task object representing the specific todo item
            // Function to delete the todo
            // Function to toggle edit mode for the todo
            // Function to toggle completion status of the todo
          />
        )
      )}
    </div>
  );
};
