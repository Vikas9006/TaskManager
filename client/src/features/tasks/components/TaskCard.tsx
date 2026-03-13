import { useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

import styles from "./TaskCard.module.css";
import { Tasks } from "../../../constants";

type TaskCardProps = Tasks.Task & {
  deleteTask: (id: number) => void;
  updateTask: (task: Tasks.Task) => void;
};

const TaskCard = ({ id, title, description, completed, deleteTask, updateTask }: TaskCardProps) => {
  const [cardInfo, setCardInfo] = useState<Partial<Tasks.Task>>({ title, description, completed });
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardInfo({ ...cardInfo, title: event.target.value });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardInfo({ ...cardInfo, description: event.target.value });
  };

  const onDelete = () => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        deleteTask(id);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCompleteTask = () => {
    setCardInfo({ ...cardInfo, completed: completed });
    updateTask({ id: id, title: cardInfo.title ?? "", description: cardInfo.description, completed: !completed });
  };

  return (
    <li className={`${styles.container}`}>
      <input type="checkbox" checked={completed} onChange={handleCompleteTask} className={`${styles['task-complete-checkbox']}`} />
      <div className={`${styles['task-info']}`}>
        {editMode && <input type="text" value={cardInfo.title} onChange={handleTitleChange} />}
        {!editMode && <p className={`${styles['task-title']}`}>{cardInfo.title}</p>}
        {editMode && <input type="text" value={cardInfo.description} onChange={handleDescriptionChange} />}
        {!editMode && <p className={`${styles['task-description']}`}>{cardInfo.description}</p>}
      </div>
      <div className={`${styles['task-icons']}`}>
        <button onClick={handleEditMode} className={`${styles['taskcard-button']} ${styles.edit}`}>
          <FaEdit />
        </button>
        <button onClick={onDelete} className={`${styles['taskcard-button']} ${styles.delete}`}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TaskCard;
