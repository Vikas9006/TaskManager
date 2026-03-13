import axios from "axios";
import { useEffect, useState } from "react";

import AddTaskCard from "../components/AddTaskCard";
import TaskCard from "../components/TaskCard";
import type { Tasks } from "../../../constants";

const TasksPage = () => {
  const [tasks, setTasks] = useState<Tasks.Task[]>([] as Tasks.Task[]);
  useEffect(() => {
    const fetchTasks = () => {
      axios.get('http://localhost:5000/api/tasks')
        .then(response => {
          setTasks([...tasks, ...response.data.tasks]);
        })
        .catch(error => {
          console.log(error);
        })
    };
    fetchTasks();
  }, []);

  const addNewTask = ({ title, description }: { title: string, description: string }) => {
    setTasks([...tasks, { id: tasks.length + 1, title: title, description: description, completed: false }]);
  }
  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const updateTask = (updatetdTask: Tasks.Task) => {
    setTasks(prevTask =>
      prevTask.map(task =>
        task.id === updatetdTask.id ? { ...task, ...updatetdTask } : task
      )
    );
  };

  return (
    <div>
      <h2>Your tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            deleteTask={deleteTask}
            updateTask={updateTask} />
        ))}
        <AddTaskCard addTask={addNewTask} />
      </ul>
    </div>
  );
};

export default TasksPage;
