import "./App.css";

import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddItems(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteItems(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleItem(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div className="App">
      <h1 className="text-center">To do List</h1>
      <div className="app-content">
        <Form onAddItems={handleAddItems} />
        <List
          tasks={tasks}
          onDeleteItem={handleDeleteItems}
          onToggleItems={handleToggleItem}
        />
      </div>
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { title, description, id: Date.now(), done: false };

    onAddItems(newItem);

    setDescription("");
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-container">
        <div className="text-center">
          <input
            type="text"
            value={title}
            placeholder="Title.."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            type="text"
            value={description}
            placeholder="Description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button>Add</button>
        </div>
      </div>
    </form>
  );
}

function List({ tasks, onDeleteItem, onToggleItems }) {
  return (
    <div className="container">
      <h2>Things to do</h2>
      <div>
        <ul className="list-container">
          {tasks.map((task) => (
            <Item
              task={task}
              key={task.id}
              onDeleteItem={onDeleteItem}
              onToggleItems={onToggleItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Item({ task, onDeleteItem, onToggleItems }) {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        value={task.done}
        onChange={() => onToggleItems(task.id)}
        className="checkbox"
      />
      <div className="task-content">
        <p style={task.done ? { textDecoration: "line-through" } : {}}>
          {task.title}
          {console.log(task.done)}
        </p>
        {/* <p className="task-description">{task.description}</p> */}
      </div>
      <button className="btn-item" onClick={() => onDeleteItem(task.id)}>
        ❌ Delete
      </button>
    </li>
  );
}
