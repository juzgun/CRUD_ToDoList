import React from 'react';
import ListItem from './ListItem';

const ListItemBody = (props) => {
    return (
        props.tasks.map((task, id) =>
        <ListItem key={id} id={id} {...task} {...props} />
    )
    )
  }

export default ListItemBody;