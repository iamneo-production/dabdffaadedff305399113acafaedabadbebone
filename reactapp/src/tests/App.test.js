import React from 'react';
import { render, screen, fireEvent , waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoWrapper } from '../components/TodoWrapper';
import '@testing-library/jest-dom';


describe('TodoWrapper component', () => {
  beforeEach(() => {
    render(<TodoWrapper />);
  });

  
  it('should_render_the_title', () => {
    const titleElement = screen.getByText('Get Things Done !');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
  });

  it('should_render_an_input_field', () => {
    const inputElement = screen.getByPlaceholderText('What is the task today?');
    expect(inputElement).toBeInTheDocument();
  });

  it('should_display_input_text_when_Add_Task_button_is_clicked', () => {
    const inputElement = screen.getByPlaceholderText('What is the task today?');
    const addButton = screen.getByText('Add Task');

    userEvent.type(inputElement, 'New task');
    userEvent.click(addButton);

    const addedTaskElement = screen.getByText('New task');
    expect(addedTaskElement).toBeInTheDocument();
  });
});

describe('TodoWrapper component', () => {
  beforeEach(() => {
    render(<TodoWrapper />);
  });

  it('should_add_a_new_todo', () => {
    // Find the input field and add a task
    const inputElement = screen.getByPlaceholderText('What is the task today?');
    userEvent.type(inputElement, 'New Task');
    
    // Find and click the "Add Task" button
    const addButton = screen.getByText('Add Task');
    userEvent.click(addButton);
    
    // Check if the newly added task is displayed
    const newTaskElement = screen.getByText('New Task');
    expect(newTaskElement).toBeInTheDocument();
  });
 });


describe('TodoWrapper component', () => {
  beforeEach(() => {
    render(<TodoWrapper />);
    
    // Find the input element and add a task
    const inputElement = screen.getByPlaceholderText('What is the task today?');
    userEvent.type(inputElement, 'Initial task text');
    const addButton = screen.getByText('Add Task');
    userEvent.click(addButton);
  });

  it('should_toggle_task_completion', () => {
    // Find the checkbox within the Todo component and toggle its state
    const checkboxElement = screen.getByRole('checkbox', { name: 'Initial task text' });
    userEvent.click(checkboxElement);

    // Check if the task is marked as completed
    const completedTaskElement = screen.getByText('Initial task text');
    expect(completedTaskElement).toHaveClass('completed');
  });
});

describe('TodoWrapper', () => {
  it('should_delete_a_task_while_clicking_delete_icon', async () => {
    const initialTaskText = 'one Task to be deleted';
    
    // Render the component
    render(<TodoWrapper />);
    
    // Find the input element and type the task text
    const inputElement = screen.getByPlaceholderText('What is the task today?');
    userEvent.type(inputElement, initialTaskText);
    
    // Find and click the "Add Task" button
    const addButton = screen.getByText('Add Task');
    userEvent.click(addButton);

    const newTaskElement = screen.getByText(initialTaskText);
    expect(newTaskElement).toBeInTheDocument();
    
    const deleteButton = screen.getByTestId('delete-icon'); // Use the delete-icon data-testid
    userEvent.click(deleteButton);
    
    // Wait for the deleted task to be removed from the DOM
    await waitFor(() => {
      const deletedTaskElement = screen.queryByText(initialTaskText);
       expect(deletedTaskElement).toBeNull(); // Ensure the task is no longer in the DOM
    });  
  });
});