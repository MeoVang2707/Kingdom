import { Range, Handle } from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  handleChange: (values: number[]) => void;
}

const CircleStyle = {
  backgroundColor: '#E9992A',
  width: 16,
  height: 16,
  border: '3px solid #FFFFFF',
  marginTop: -6,
  boxShadow: 'none',
};

const HandleCustome = (props: any) => {
  const { value, dragging, index, offset, ...restProps } = props;
  return (
    <>
      <Handle value={value} offset={offset} {...restProps} />
      <span
        className={`absolute mt-4 text-xs font-semibold text-white ${
          index === 0 ? '-ml-2' : '-mr-2'
        }`}
        style={
          index === 0 ? { left: `${offset}%` } : { right: `${100 - offset}%` }
        }
      >
        {value}
      </span>
    </>
  );
};

const RangeSlider = ({
  min,
  max,
  step = 1,
  handleChange,
}: RangeSliderProps) => {
  // const [rangeValues, setRangeValues] = React.useState<number[]>([min, max]);

  const onChange = (values: number[]) => {
    // setRangeValues(values);
    handleChange?.(values);
  };

  return (
    <div>
      <Range
        min={min}
        max={max}
        onChange={onChange}
        step={step}
        defaultValue={[min, max]}
        dotStyle={{ backgroundColor: '#E9992A' }}
        railStyle={{ backgroundColor: '#868790' }}
        activeDotStyle={{ backgroundColor: 'red' }}
        handleStyle={[CircleStyle, CircleStyle]}
        trackStyle={[{ backgroundColor: '#E9992A' }]}
        handle={HandleCustome}
      />
    </div>
  );
};

export default React.memo(RangeSlider);
