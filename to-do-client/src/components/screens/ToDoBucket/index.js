import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.scss';
import { addBucket,getBuckets,deleteBucket } from './../../../redux/actions/toDoBucket'

import { AddBox ,ToDoItem,TodoBucketItem} from './../../coreComponents'

class ToDoBucket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bucketName:''
        }
    }
    componentDidMount(){
        this.props.getBuckets();
    }

    handleChange = (e) => {
        this.setState({
            bucketName: e.target.value
        })
    }
    handleAdd = () => {
        const {bucketName}=this.state;
        if(bucketName!==''){
            this.props.addBucket({name:bucketName});
            this.setState({
                bucketName:''
            })
        }
       
    }
    handleDelete=(id)=>{
            this.props.deleteBucket({id});
            this.props.getBuckets();
    }
    goToToDoList=(id)=>{
        this.props.history.push(`/todo/${id}`)
    }
    render() {
        const { bucketName } = this.state;
        const { bucketReducer } = this.props;
        return (
            <div className="AddBucketContainer">
                <h2>Add New Bucket</h2>
                <AddBox value={bucketName} inputPlaceHolderText={"Add a new bucket..."} handleChange={this.handleChange} handleAdd={this.handleAdd} />
                {
                    bucketReducer.bucketList.length>0 && bucketReducer.bucketList.map((data,index)=>{
                        return <TodoBucketItem value={data.name} key={`${data.name}${index}`} handleDelete={()=>this.handleDelete(data.id)} goToToDoList={()=>this.goToToDoList(data.id)}/>
                    })
                }
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        bucketReducer: state.bucketReducer,
        // isFetching: state.WeatherReducer.isFetching
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addBucket: bindActionCreators(addBucket, dispatch),
        getBuckets: bindActionCreators(getBuckets, dispatch),
        deleteBucket: bindActionCreators(deleteBucket, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoBucket);

