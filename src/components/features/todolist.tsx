
import React, { useState, useEffect } from 'react';
import { Todo, FilterType, TodoStats } from '../../types/todo';
import TodoItem from './todoitem';
import TodoFilters from './todofilters';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [newTodoText, setNewTodoText] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
        setTodos(parsedTodos);
      } catch (error) {
        console.error('Error loading todos from localStorage:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Calculate statistics
  const stats: TodoStats = {
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    active: todos.filter(todo => !todo.completed).length,
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  // Generate unique ID
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };

  // Add new todo
  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: generateId(),
        text: newTodoText.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos(prev => [newTodo, ...prev]);
      setNewTodoText('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Edit todo text
  const editTodo = (id: string, newText: string) => {
    if (newText.trim()) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? { ...todo, text: newText.trim() } : todo
        )
      );
    }
  };

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo();
  };

  // Handle Enter key in input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      addTodo();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#343a40', marginBottom: '30px' }}>
        📝 Todo List
      </h1>

      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #ced4da',
              borderRadius: '6px',
              fontSize: '16px',
            }}
          />
          <button
            type="submit"
            disabled={!newTodoText.trim()}
            style={{
              padding: '12px 24px',
              backgroundColor: newTodoText.trim() ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: newTodoText.trim() ? 'pointer' : 'not-allowed',
              fontSize: '16px',
            }}
          >
            Add
          </button>
        </div>
        {newTodoText.length > 0 && !newTodoText.trim() && (
          <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>
            Todo text cannot be empty
          </p>
        )}
      </form>

      {/* Todo Statistics */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
            {stats.total}
          </div>
          <div style={{ fontSize: '12px', color: '#6c757d' }}>Total</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
            {stats.active}
          </div>
          <div style={{ fontSize: '12px', color: '#6c757d' }}>Active</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffc107' }}>
            {stats.completed}
          </div>
          <div style={{ fontSize: '12px', color: '#6c757d' }}>Completed</div>
        </div>
      </div>

      {/* Todo List */}
      <div style={{ minHeight: '200px' }}>
        {filteredTodos.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#6c757d',
            fontStyle: 'italic',
          }}>
            {todos.length === 0 ? 'No todos yet. Add one above!' :
             filter === 'active' ? 'No active todos!' :
             filter === 'completed' ? 'No completed todos!' :
             'No todos match your filter!'}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))
        )}
      </div>

      {/* Filters */}
      <TodoFilters
        currentFilter={filter}
        onFilterChange={setFilter}
        stats={stats}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TodoList;