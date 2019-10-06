import React ,{useState} from 'react';
import './style.scss';

const ToDoItem = ({ value,handleDelete,handleUpdate,is_completed,handleDone }) => {
    const [isEdit,setIsEdit]=useState(false);
    const [todoValue,settodoValue]=useState(value);
    return (
        <div className="toDoItemContainer">
            <div className="toDoItemValue">
                { is_completed ?<img onClick={handleDone} src={require('./../../../assets/images/check-done.png')} className="check-icon"/>:
                    <img onClick={handleDone} src={require('./../../../assets/images/check-undone.png')} className="check-icon"/>}
               {isEdit ?<div><input className="updateTodo" value={todoValue} onChange={(e)=>settodoValue(e.target.value)}/>
                <button onClick={()=>{setIsEdit(false);handleUpdate(todoValue)}}>Save</button>
            </div>: 
            <span className={is_completed ? "done":"undone"} onClick={()=>setIsEdit(true)}>{todoValue}</span>}
            </div>
            <div className="delete" onClick={handleDelete}>
                <img src={require('./../../../assets/images/clear-button.png')}/>
            </div>
        </div>
    );
}
export default ToDoItem;
