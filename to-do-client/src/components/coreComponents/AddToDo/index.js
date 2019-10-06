import React from 'react';
import  './style.css';

const AddToDo=({value,handleChange,handleSearch})=>{
  return (
    <div className="addToDoContainer">
        <input type="text" className="addToDo" placeholder="add a new todo..." value={value} onChange={handleChange}/>
        <button className="addButton" onClick={handleSearch}>Add</button>
    </div>
  );
}

export default AddToDo;
