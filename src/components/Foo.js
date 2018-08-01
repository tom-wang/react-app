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

    componentDidMount() {
        let qq = window.qq;
        let center = new qq.maps.LatLng(30.63352, 104.06656);
        var map = new qq.maps.Map(document.getElementById("container"), {
            // 地图的中心地理坐标。
            center: center,
            zoom: 13
        });
        new qq.maps.Marker({
            map: map,
            position: center
        });
        let circle = new qq.maps.Circle({
            map: map,
            center: center,
            radius: 2000,
        });

        circle.setMap(null);
        center = new qq.maps.LatLng(22.610546, 114.030338);
        map.panTo(center);
        new qq.maps.Marker({
            map: map,
            position: center
        });
        circle = new qq.maps.Circle({
            map: map,
            center: center,
            radius: 2000,
        });
    }

    render() {
        return <div>
            <div id="container" style={{width:'500px', height:'300px'}}></div>
            <span>foo</span>
            </div>
    }
}

export default Foo;