import React, { Component } from 'react';

class Foo extends Component {
    constructor(props) {
        super(props);
        console.log('constructor props');
    }

    // 这个钩子在组件初始化时不执行
    // 当组件属性变化时执行
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    render() {
        return <div>foo</div>
    }
}

export default Foo;