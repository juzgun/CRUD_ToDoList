import React from 'react';
import { TextField, Button } from '@material-ui/core'
import * as axios from 'axios';
import { useEffect } from 'react';

const Input = (props) => {

    return (
        <form
            style={{ width: "100%" }}
            onSubmit={submit}
        >
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Task"
                className="input"
                value={value}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                variant="outlined"
                className="add-btn"
                style={{
                    color: "lightgreen",
                    border: "1px solid lightgreen",
                    marginLeft: "3%",
                }}
                type="submit"
                onClick={submit}
            >
                ADD
            </Button>
        </form>
    )
}

export default Input;