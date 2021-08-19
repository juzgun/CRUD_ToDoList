import React from 'react';
import List from './components/List';
import Input from './components/Input';
import REACT_APP_DB_URL from '../.env,local'
import * as axios from 'axios';
import { useEffect } from 'react';
import ContextProvider from './components/context/ContextProvider';

let Tasks = [];

const createTask = () => {
  axios.get(REACT_APP_DB_URL)
    .then(res => res.json())
    .then(
      (result) => {
        Tasks = result;
      }
    )
}

const App = (props) => {

  // useEffect((() => {
  //   // createTask();
  //   return () => {
  //     <div>
  //       <Input createTask={createTask} />
  //       <List />
  //     </div>
  //   }
  // }, [])

  return () => {
    <div>
      <ContextProvider>
        <Input createTask={createTask} />
        <List />
      </ContextProvider>
    </div>
  }

}



export default App;
