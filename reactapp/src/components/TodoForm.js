import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
  return (

    {/* Write code here to create a form element that triggers a function when submitted and Use Classname as "TodoForm" */} 
    // Create an input field
          // Set the input type to "text"
          // Connect the input value to the "value" state
          // Update the "value" state when the input changes
          // Add the class name as "todo-input"
          // Provide a placeholder text as "What is the task today?"

    // Create a button for submitting the form and Add the Classname as "todo-btn"
      // Display the button text as "Add Task"
   
  )
}
