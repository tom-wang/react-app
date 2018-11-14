import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTestAction, createTestActionPromise, createTestActionAsync } from './actions';

import Foo from './components/Foo';
import NormalCompt from './unused/NormalCompt'
import PureCompt from './unused/PureCompt'

class App extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            j: 0,
            jj: 1,
            showFoo: false,
            arr: [],
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
        this.handleClick6 = this.handleClick6.bind(this);
        this.handleClick7 = this.handleClick7.bind(this);
    }

    testThis() {
        console.log(this);
    }

    handleClick() {
        this.setState({
            j: this.state.j+1
        }, () => {
            console.log(`setState Done this.state.j = ${this.state.j}`)
        });
        console.log(`handleClick this.state.j = ${this.state.j}`)
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

    handleClick6() {
        this.state.showFoo = !this.state.showFoo;
        this.setState(this.state);
    }

    handleClick7() {
        this.props.pushTestArrItem(this.props.testArrData);
    }


    render() {
        //定义contextTypes后，可以使用this.context.store访问到store（store是由Provider组件提供的）
        console.log(`App.js render`)
        console.log(`this.context(App.js) = `, this.context)
        return (
                <div>
                    { this.state.showFoo && <Foo foo={this.state.j} /> }
                    <button onClick={this.handleClick}>Click {this.state.j}!</button><br />
                    <button onClick={this.handleClick2}>Click {this.props.testData.num}!</button><br />
                    <button onClick={this.handleClick4}>Click {this.props.testData.num}!</button><br />
                    <button onClick={this.handleClick5}>Click {this.props.testData.num}!</button><br />
                    <button onClick={this.handleClick3}>Click(测试state不变时会不会刷新？会刷新，因为数字不是引用类型，每次赋值都相当于是新值) {this.state.jj}!</button><br />
                    <button onClick={this.handleClick}>Click(改变Foo组件的prop)</button><br />
                    <button onClick={this.handleClick6}>Click(切换Foo可见状态)!</button><br />
                    <button onClick={this.handleClick7}>Click(测试引用类型引用不变时会不会刷新？不刷新)，当前数组值{ this.props.testArrData.join('') }!</button><br />
                    <NormalCompt />
                    <PureCompt />
                    <input defaultValue={this.state.j} />
                </div>
               );
    }
}

const mapStateToProps = state => {
    // 每次状态变更都会执行
    // 如果map的状态名与外部传入的prop同名，则map的属性值更加优先
    console.log('mapStateToProps called');
    return {
        testData: state.testData,
        testArrData: state.testArrData
    }
}

const mapDispatchToProps = dispatch => {
    // 页面期间执行一次
    console.log('mapDispatchToProps called');
    return {
        addNum() {
            console.log('addNum begin')
            dispatch(createTestAction({
                num: Math.random()
            }));
            console.log('addNum end')
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
        },
        pushTestArrItem(testArrData) {
            testArrData.push(1);
            dispatch({
                type: 'TEST_ARR_ACTION',
                payload: testArrData
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
