import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Car = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
  </Carousel>
);
export default Car;