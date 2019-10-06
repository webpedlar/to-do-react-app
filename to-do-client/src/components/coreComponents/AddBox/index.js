import React from 'react';
import  './style.scss';

const AddBox=({value,handleChange,handleAdd,inputPlaceHolderText})=>{
  return (
    <div className="addToDoContainer">
        <input type="text" className="addToDo" placeholder={inputPlaceHolderText} value={value} onChange={handleChange}/>
        <button className="addButton" onClick={handleAdd}>Add</button>
    </div>
  );
}


export default AddBox;
