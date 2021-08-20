import ListItem from "./ListComponents/ListItem";
import { useContext } from "react";
import TaskContext from "./context/taskContext";
import Preloader from "./common/Preloader/Preloader";

export default function List() {
  const { tasks } = useContext(TaskContext);
  return (
    <>
      {tasks.length ? (
        <ul className="taskList">
          {tasks.map((task) => (
            <ListItem task={task} key={task.id} />
          ))}
        </ul>
      ) : (
        <Preloader />
      )
      }
    </>
  );
}
