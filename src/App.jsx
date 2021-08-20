import React from 'react';
import Card from "@material-ui/core/Card";
import List from './components/List';
import Input from './components/Input';
import './index.css'
import ContextProvider from './components/context/ContextProvider';


const App = (props) => {

  return (
    <ContextProvider>
      <div className='wrapper'>
        <Card className='taskListWrapper'>
          <Input />
          <List />
        </Card>
      </div>
    </ContextProvider>
  )

}

export default App;
