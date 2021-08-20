import React, { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import TaskContext from './context/taskContext';

function Input() {
    const [text, setText] = useState("");
    const { addTask } = useContext(TaskContext);

    function submitTask(e) {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
            setText("");
        }
    }


    return (
        <form
            style={{ width: "100%" }}
            onSubmit={submitTask}
            className="inputForm"
        >
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Task"
                className="inputText"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                variant="outlined"
                className="addBtn"
                style={{
                    color: "#00c600",
                    border: "2px solid #00c600",
                    marginLeft: "10px",
                }}
                type="submit"
                onClick={submitTask}
            >
                ADD
            </Button>
        </form>
    )
}

export default Input;