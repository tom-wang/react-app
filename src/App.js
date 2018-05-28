import React, { Component } from 'react';
import {connect } from 'react-redux';
import { TEST_ACTION } from './actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            j: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick() {
        this.state.j++;
        this.setState(this.state);
    }

    handleClick2() {
        this.props.addNum();
    }

    render() {
        return (
                <div>
                    <button onClick={this.handleClick}>Click {this.state.j}!</button>
                    <button onClick={this.handleClick2}>Click {this.props.testData.num}!</button>
                </div>
               );
    }
}

const mapStateToProps = state => {
    // 每次状态变更都会执行
    console.log('mapStateToProps called');
    return {
        testData: state.testData
    }
}

const mapDispatchToProps = dispatch => {
    // 页面期间执行一次
    console.log('mapDispatchToProps called');
    return {
        addNum() {
            dispatch({
                type: TEST_ACTION,
                data: {
                    num: Math.random()
                }
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
