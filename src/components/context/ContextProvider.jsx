import * as axios from "axios";
import { useState, useEffect } from "react";
import TaskContext from "./taskContext";


const url = process.env.REACT_APP_DB_URL;

export default function ContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    async function fetchTodos() {
        try {
            const response = await axios.get(url);
            setTasks(response.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    async function checkTask(task) {
        try {
            await axios.patch(`${url}/${task.id}`, { done: !task.done });
            fetchTodos();
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async function deleteTask(id) {
        try {
            await axios.delete(`${url}/${id}`);
            fetchTodos();
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async function addTask(text) {
        // let newID = String(Date.now()).slice(3, 7);
        let newID = new Date();
        const task = { id: newID.getTime(), text, done: false };
        try {
            await axios.post(url, task);
            fetchTodos();
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async function editTask(text, id) {
        try {
            await axios.patch(`${url}/${id}`, { text });
            fetchTodos();
        } catch (e) {
            throw new Error(e.message);
        }
    }

    return (
        <TaskContext.Provider
            value={{ tasks, checkTask, deleteTask, addTask, editTask }}
        >
            {children}
        </TaskContext.Provider>
    );
}

