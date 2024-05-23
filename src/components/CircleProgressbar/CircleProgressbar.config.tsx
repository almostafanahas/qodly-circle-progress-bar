import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { TbProgress } from 'react-icons/tb';

import CircleProgressbarSettings, { BasicSettings } from './CircleProgressbar.settings';

export default {
  craft: {
    displayName: 'CircleProgressbar',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(CircleProgressbarSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'CircleProgressbar',
    exposed: true,
    icon: TbProgress,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['number'],
    },
  },
  defaultProps: {
    percentage: 10,
    showPercentage: true,
    strokeLine: "butt",
    minValue: 0,
    maxValue: 100,
    strokeWidth: 8,
    bgPadding: 0,
    bgColor: "#ffffff",
    pathColor: "#3e98c7",
    trailColor: "#d6d6d6",
    textColor: "#3e98c7",
    textSize: "20px",
    counterClockwise: false,
    size: "200px",
    //style: { height: 200, width: 200 },
    countSep: 0,
    colorSep: "#ffffff",
    widthSep: "2px",
  },
} as T4DComponentConfig<ICircleProgressbarProps>;

export interface ICircleProgressbarProps extends webforms.ComponentProps {
  percentage: number;
  showPercentage: boolean;
  strokeLine: string;
  minValue: number;
  maxValue: number;
  size: string;
  strokeWidth: number;
  bgPadding: number;
  bgColor: string;
  pathColor: string;
  trailColor: string;
  textColor: string;
  textSize: string;
  counterClockwise: boolean;
  countSep: number;
  colorSep: string;
  widthSep: string;
}
