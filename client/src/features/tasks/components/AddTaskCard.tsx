import axios from "axios";
import type React from "react";
import { useState } from "react";

import styles from "./AddTaskCard.module.css";

const AddTaskCard = ({ addTask }: { addTask: ({ title, description }: { title: string, description: string }) => void }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleSubmitTask = () => {
    const fetchTasks = () => {
      axios.post('http://localhost:5000/api/tasks', {
        title: title, description: description, completed: false
      })
        .then(response => {
          if (response.data.newTask) {
            addTask({ title, description });
            setTitle('');
            setDescription('');
          }
        })
        .catch(error => {
          console.log(error);
        })
    };
    fetchTasks();
  };
  return (
    <li className={`${styles.container}`}>
      <input type="text" value={title} placeholder="Title" onChange={handleTitleChange} />
      <input type="text" value={description} placeholder="Description" onChange={handleDescriptionChange} />
      <button onClick={handleSubmitTask}>Add this task</button>
    </li>
  );
};

export default AddTaskCard;
