import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';
import { ICircleProgressbarProps } from './CircleProgressbar.config';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from './RadialSeparators';

const CircleProgressbar: FC<ICircleProgressbarProps> = ({ percentage, showPercentage, minValue, maxValue, strokeWidth, pathColor, trailColor, textColor, textSize, style, counterClockwise, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <CircularProgressbarWithChildren minValue={minValue} maxValue={maxValue} strokeWidth={strokeWidth} value={percentage} text={showPercentage ? `${percentage}%` : ''} counterClockwise={counterClockwise}
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
      >
        <RadialSeparators
          count={5}
          style={{
            background: "#fff",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${strokeWidth}%`
          }}
        >
        </RadialSeparators>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircleProgressbar;