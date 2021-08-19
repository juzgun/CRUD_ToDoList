import * as axios from "axios";
import { useState } from "react";

import TasksContext from "./taskContext";


const url = process.env.REACT_APP_DB_URL;

export default function ContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider
      value={{ tasks }}
    >
      {children}
    </TasksContext.Provider>
  );
}
