import React, { useState } from 'react';
import './App.css';
import ToDoInput from './ToDoInput.js';
import ToDoList from './ToDoList.js';

function App() {
  const [listTodo, setlistTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '')
      setlistTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setlistTodo([...newListTodo]);
  }
  return (
    <div className="main">
      <div className="second">
        <ToDoInput addList={addList} />
        <h1 className='app-heading'>TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <ToDoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
