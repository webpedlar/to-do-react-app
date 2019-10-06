import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.scss';
import { addToDo,getToDoList,deleteToDo,updateToDo ,updateStatus} from './../../../redux/actions/todoList'

import { AddBox ,ToDoItem} from './../../coreComponents'

class ToDoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }

    }
    componentDidMount(){
        const {match}=this.props;
        this.props.getToDoList(match.params.id)
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    handleAdd = () => {
        const {match}=this.props;
        const {todo}=this.state;
        if(todo!==''){
            this.props.addToDo({category_id:match.params.id,note_data:todo});
            this.setState({
                todo:""
            })
        }
 
    }
    handleDelete=(id)=>{
        const {match}=this.props;
        this.props.deleteToDo({id,category_id:match.params.id})
    }
    handleUpdate=(id,value)=>{
        console.log(id,value);
        const {match}=this.props;
        this.props.updateToDo({id,
        note_data:value,
        category_id:match.params.id
    })
    }
    handleDone=(id,is_completed)=>{
        const {match}=this.props;
        this.props.updateStatus({id,is_completed:parseInt(is_completed)? 0 : 1,category_id:match.params.id})
    }
    render() {
        const { todo } = this.state;
        const { todoListReducer } = this.props;
        return (
            <div className="AddToDoContainer">
                <h2>To Do List</h2>
                <AddBox value={todo} handleChange={this.handleChange} inputPlaceHolderText="Add a new to do..." handleAdd={this.handleAdd} />
                {
                    todoListReducer.todoList.length>0 && todoListReducer.todoList.map((data,index)=>{
                        return <ToDoItem handleDone={()=>this.handleDone(data.id,data.is_completed)} is_completed={parseInt(data.is_completed)} value={data.note_data} key={`${data.note_data}${index}`} handleUpdate={(newValue)=>this.handleUpdate(data.id,newValue)} handleDelete={()=>this.handleDelete(data.id)}/>
                    })
                }
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        todoListReducer: state.todoListReducer
        // isFetching: state.WeatherReducer.isFetching
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getToDoList: bindActionCreators(getToDoList, dispatch),
        addToDo: bindActionCreators(addToDo, dispatch),
        deleteToDo: bindActionCreators(deleteToDo, dispatch),
        updateToDo: bindActionCreators(updateToDo, dispatch),
        updateStatus: bindActionCreators(updateStatus, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);

