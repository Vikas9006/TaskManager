import { BrowserRouter, Routes, Route } from "react-router-dom";

import TasksPage from "./features/tasks/pages/TasksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>Dashboard page</div>
          }
        />
        <Route
          path="/tasks"
          element={
            <TasksPage />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
