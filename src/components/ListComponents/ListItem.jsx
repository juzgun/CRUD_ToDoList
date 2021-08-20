import { useContext, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

import TaskContext from "../context/taskContext";

export default function ListItem({ task }) {

  const { checkTask, deleteTask, editTask } = useContext(TaskContext);
  const [edit, setEdit] = useState(false);
  const [newTask, setTask] = useState(task.text);

  function editTaskSetter(e) {
    e.preventDefault();
    if (newTask.trim()) editTask(newTask, task.id);
    setEdit(false);
  }

  return (
    <li className="task">
      <div>
        <span>
          <Checkbox
            checked={task.done}
            onChange={() => checkTask(task)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </span>
        {edit ? (
          <span>
            <form onSubmit={editTaskSetter} className="textEditForm">
              <TextField
                id="textEditForm"
                defaultValue={task.text}
                onChange={(e) => setTask(e.target.value)}
                autoFocus
                onBlur={() => setEdit(false)}
              />
            </form>
          </span>
        ) : (
          <span onClick={() => setEdit(true)}> {task.text} </span>
        )}
      </div>
      <Button
        color="secondary"
        className="deleteBtn"
        style={{ fontSize: "2rem", padding: 0 }}
        onClick={() => deleteTask(task.id)}
      >
        &times;
      </Button>
    </li>
  );
}