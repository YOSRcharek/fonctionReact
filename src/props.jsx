import React, { useState } from 'react';

// Exercice 1 : Compteur
const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + step)}>+{step}</button>
      <button onClick={() => setCount(count - step)}>-{step}</button>
    </div>
  );
};

// Exercice 2 : Gestion de liste dynamique
const ListManager = ({ initialItems = [], placeholder = 'Ajouter un élément' }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder={placeholder} />
      <button onClick={addItem}>Ajouter</button>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
};

// Exercice 3 : Changement de couleur dynamique
const ColorBox = ({ initialColor = '#000', colorOptions = ['#ff0000', '#00ff00', '#0000ff'] }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setColor(randomColor);
  };

  return (
    <div>
      <div style={{ width: '100px', height: '100px', backgroundColor: color }}></div>
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
};

// Exercice 4 : Gestionnaire de notes
const NotesManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote('');
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average = notes.length ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : 0;

  return (
    <div>
      <input type="number" value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Ajouter une note" />
      <button onClick={addNote}>Ajouter</button>
      <ul>{notes.map((note, index) => <li key={index}>{note} <button onClick={() => removeNote(index)}>X</button></li>)}</ul>
      <p>Moyenne : {average}</p>
    </div>
  );
};

// Exercice 5 : Todo List avec priorités
const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Moyenne');
  const [search, setSearch] = useState('');

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, priority, completed: false }]);
      setTaskName('');
    }
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Nouvelle tâche" />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher" />
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {task.name} ({task.priority})
            <button onClick={() => toggleTask(index)}>{task.completed ? '✔' : '❌'}</button>
          </li>
        ))}
      </ul>
      <p>Total : {tasks.length} | Terminées : {tasks.filter(task => task.completed).length}</p>
    </div>
  );
};

export { Counter, ListManager, ColorBox, NotesManager, TodoList };
