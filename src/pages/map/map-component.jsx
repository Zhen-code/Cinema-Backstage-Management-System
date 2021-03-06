import React from "react";
// import { Map } from 'react-amap';//导入高德地图组件

 function MyMapComponent(props){
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  // 设置控制toolbar样式
  const wrapperStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: '#fff',
    padding: '5px',
    border: '1px solid #333'
  }
  const spanStyle = {
    display: 'inline-block',
    height: '30px',
    lineHeight: '30px',
    width: '30px',
    textAlign: 'center',
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
    background: '#333',
    color: '#fff',
    fontSize: '16px',
    border: '1px solid #333'
  }
  const zoomIn = () => map.zoomIn()
  const zoomOut = () => map.zoomOut()
  return (<div style={wrapperStyle} id="zoom-ctrl">
    <span style={spanStyle} onClick={zoomIn}>+</span>
    <span style={spanStyle} onClick={zoomOut}>-</span>
  </div>);
}
export default MyMapComponent