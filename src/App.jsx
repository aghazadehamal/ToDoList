import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const deleteTodo = (index) => {
    const isConfirmed = window.confirm("Bu qeydi silmək istədiyinizdən əminsinizmi?");
    if (isConfirmed) {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    }
  };

  const editTodo = (index) => {
    setTodo(todos[index]);
    setEditingIndex(index);
  };

  const updateTodo = () => {
    const newTodos = todos.map((t, index) => (index === editingIndex ? todo : t));
    setTodos(newTodos);
    setTodo('');
    setEditingIndex(null);
  };

  const clearTodos = () => {
    const isConfirmed = window.confirm("Bütn notları silmək istədiyinizdən əminsinizmi?");
    if (isConfirmed) {
      setTodos([]);
    }
  };

  return (
    <div className="todo-container">
    <div className="input-container">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Görüləcək iş ..."
      />
      <div className="button-container">
        {editingIndex === null ? (
          <button onClick={addTodo} className="add-button">Əlavə Et</button>
        ) : (
          <button onClick={updateTodo} className="update-button">Yenilə</button>
        )}
        <button onClick={clearTodos} className="clear-button">Hamısını Sil</button>
      </div>
    </div>
    <ul>
      {todos.map((t, index) => (
        <li key={index} className="todo-item">
          <span>{t}</span>
          <div className="button-container">
            <button onClick={() => deleteTodo(index)} className="delete-button">Sil</button>
            <button onClick={() => editTodo(index)} className="edit-button">Düzəlt</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  
  );
}

export default App;
