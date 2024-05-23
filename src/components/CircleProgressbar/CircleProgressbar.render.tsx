import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
//import { easeQuadInOut } from 'd3-ease';
//import AnimatedProgressProvider from './AnimatedProgressProvider';
import RadialSeparators from './RadialSeparators';

import { ICircleProgressbarProps } from './CircleProgressbar.config';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgressbar: FC<ICircleProgressbarProps> = ({ percentage, showPercentage, strokeLine, minValue, maxValue, strokeWidth, bgPadding, bgColor, pathColor, trailColor, textColor, textSize, size, counterClockwise, countSep, colorSep, widthSep, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState(() => percentage);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<number>();
      setValue(v);
     // console.log(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={{height: `${size}`, width: `${size}`}} className={cn(className, classNames)}>
      <CircularProgressbarWithChildren circleRatio={1} minValue={minValue}
        maxValue={maxValue} 
        strokeWidth={strokeWidth}
        background={true}
        backgroundPadding={bgPadding} 
        value={value}
        text={showPercentage ? `${value}%` : ''}
        counterClockwise={counterClockwise}
        styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        //rotation: 0.25,
            
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: strokeLine,
            
        // Text size
        textSize: `${textSize}`,
            
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 3,
            
        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',
            
        // Colors
        pathColor: `${pathColor}`,
        trailColor: `${trailColor}`,
        textColor: `${textColor}`,
        backgroundColor: `${bgColor}`,
        })}
      >
        <RadialSeparators
          count={countSep}
          style={{
            background: `${colorSep}`,
            width: `${widthSep}`,
            // This needs to be equal to props.strokeWidth
            height: `${strokeWidth}%`,
            margin: bgPadding,
          }}
        >
        </RadialSeparators>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircleProgressbar;
