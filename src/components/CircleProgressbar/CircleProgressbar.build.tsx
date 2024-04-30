import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { ICircleProgressbarProps } from './CircleProgressbar.config';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgressbar: FC<ICircleProgressbarProps> = ({ percentage, minValue, maxValue, strokeWidth, pathColor, trailColor, textColor, textSize, style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <CircularProgressbar minValue={minValue} maxValue={maxValue} strokeWidth={strokeWidth} value={percentage} text={`${percentage}%`} 
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        // rotation: 0.25,
    
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        // strokeLinecap: 'butt',
    
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
      })}
      />
    </div>
  );
};

export default CircleProgressbar;