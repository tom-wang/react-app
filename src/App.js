import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTestAction, createTestActionPromise, createTestActionAsync } from './actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            j: 0,
            jj: 1
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
    }

    handleClick() {
        this.state.j++;
        this.setState(this.state);
    }

    handleClick2() {
        this.props.addNum();
    }

    handleClick3() {
        this.setState({
            jj: 1
        })
    }

    handleClick4() {
        this.props.addNumPromise();
    }

    handleClick5() {
        this.props.addNumAsync();
    }

    render() {
        return (
                <div>
                    <button onClick={this.handleClick}>Click {this.state.j}!</button>
                    <button onClick={this.handleClick2}>Click {this.props.testData.num}!</button>
                    <button onClick={this.handleClick4}>Click {this.props.testData.num}!</button>
                    <button onClick={this.handleClick5}>Click {this.props.testData.num}!</button>
                    <button onClick={this.handleClick3}>Click(测试state不变时会不会刷新？会刷新) {this.state.jj}!</button>
                </div>
               );
    }
}

const mapStateToProps = state => {
    // 每次状态变更都会执行
    // 如果map的状态名与外部传入的prop同名，则map的属性值更加优先
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
            dispatch(createTestAction({
                num: Math.random()
            }));
        },
        addNumPromise() {
            dispatch(createTestActionPromise({
                num: Math.random()
            }));
        },
        addNumAsync() {
            dispatch(createTestActionAsync({
                num: Math.random()
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
