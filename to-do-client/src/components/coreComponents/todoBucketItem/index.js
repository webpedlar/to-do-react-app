import React ,{useState} from 'react';
import './style.scss';

const TodoBucketItem = ({ value,done,handleDelete,goToToDoList }) => {
    const [isEdit,setIsEdit]=useState(false);
    return (
        <div className="toDoBucketItemContainer" >
            <div className="toDoItemValue" onClick={goToToDoList}>
               <span onClick={()=>setIsEdit(true)}>{value}</span>
            </div>
            <div className="delete" onClick={handleDelete}>
                <img src={require('./../../../assets/images/clear-button.png')}/>
            </div>
        </div>
    );
}
export default TodoBucketItem;
