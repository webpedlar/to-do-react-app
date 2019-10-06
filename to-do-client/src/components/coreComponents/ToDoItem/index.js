import React ,{useState} from 'react';
import './style.scss';

const ToDoItem = ({ value,done }) => {
    const [isEdit,setIsEdit]=useState(false);
    return (
        <div className="toDoItemContainer">
            <div className="toDoItemValue">
                {done ?<img src={require('./../../../assets/images/check-done.png')} className="check-icon"/>:
                    <img src={require('./../../../assets/images/check-undone.png')} className="check-icon"/>}
               {isEdit ?<div><input value={value}/><button onClick={()=>setIsEdit(false)}>Save</button></div>: <span className={done ? "done":"undone"} onClick={()=>setIsEdit(true)}>{value}</span>}
            </div>
            <div className="delete">
                <img src={require('./../../../assets/images/clear-button.png')}/>
            </div>
        </div>
    );
}
export default ToDoItem;
