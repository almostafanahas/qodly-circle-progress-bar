import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { TbProgress } from "react-icons/tb";

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
    minValue: 0,
    maxValue: 100,
    strokeWidth: 8,
    style:{ height: 200, width: 200 },
  },
} as T4DComponentConfig<ICircleProgressbarProps>;

export interface ICircleProgressbarProps extends webforms.ComponentProps {
  percentage: number;
  minValue: number;
  maxValue: number;
  strokeWidth: number;
  pathColor: string;
  trailColor: string;
  textColor: string;
  textSize: number;
}
