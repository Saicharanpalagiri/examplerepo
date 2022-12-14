import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    marginTop: '100px',
  width:'100vw',
  height: '30vw',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
        <div>
             <img  style={contentStyle} src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"/>
        </div>
       <div>
            <img style={contentStyle} src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62c7158f31f30"/>
       </div>
    
    </Carousel>
  );
};

export default Slider;
