import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css';
import { getWheatherData } from './../../../redux/actions/weatherDataAction'

import { AddToDo ,ToDoItem} from './../../coreComponents'

class searchWheather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ""
        }

    }

    handleChange = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    handleSearch = () => {
        this.props.getWheatherData(this.state.address);
        this.setState({
            address:""
        })
    }

    render() {
        const { address } = this.state;

        return (
            <div className="searchWheatherContainer">
                <AddToDo value={address} handleChange={this.handleChange} handleSearch={this.handleSearch} />
                <ToDoItem value={"demo"}/>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        weatherData: state.WeatherReducer.weatherData,
        isFetching: state.WeatherReducer.isFetching
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getWheatherData: bindActionCreators(getWheatherData, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(searchWheather);

