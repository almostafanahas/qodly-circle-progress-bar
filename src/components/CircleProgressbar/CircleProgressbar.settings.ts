import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    key: 'percentage',
    label: 'Percentage',
    type: ESetting.NUMBER_FIELD,
  },
  {
    key: 'showPercentage',
    label: 'Show Percentage',
    type: ESetting.CHECKBOX,
  },
  {
    key: 'counterClockwise',
    label: 'Counter Clockwise',
    type: ESetting.CHECKBOX,
  },
  {
    key: 'minValue',
    label: 'Min Value',
    type: ESetting.NUMBER_FIELD,
  },
  {
    key: 'maxValue',
    label: 'Max Value',
    type: ESetting.NUMBER_FIELD,
  },
  {
    key: 'size',
    label: 'Size',
    hasLabel: true,
    type: ESetting.UNITFIELD,
  },
  {
    key: 'strokeWidth',
    label: 'Stroke Width',
    type: ESetting.NUMBER_FIELD,
  },
  {
    key: 'textSize',
    label: 'Text Size',
    hasLabel: true,
    type: ESetting.UNITFIELD,
  },
];

const colorSettings: TSetting[] = [
  {
    key: 'bgColor',
    label: 'Background',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'pathColor',
    label: 'Path',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'trailColor',
    label: 'Trail',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'textColor',
    label: 'Text',
    type: ESetting.COLOR_PICKER,
  },
]

const cssSettings: TSetting[] = [
  {
    key: 'cssClass',
    label: 'CSS Class',
    type: ESetting.CSSCLASS_SELECTOR,
  },
];

const radialSeparators: TSetting[] = [
  {
    key: 'countSep',
    label: 'Number of Separators',
    type: ESetting.NUMBER_FIELD,
  },
  {
    key: 'colorSep',
    label: 'Color',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'widthSep',
    label: 'Width',
    hasLabel: true,
    type: ESetting.UNITFIELD,
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...load(DEFAULT_SETTINGS).filter(
    'appearance',
    'style',
    'color',
    'background',
    'font',
    'borders',
    'borderRadius',
  ),
  {
    key: 'colors',
    label: 'Colors',
    type: ESetting.GROUP,
    components: colorSettings,
  },
  {
    key: 'radialSep',
    label: 'Radial Separators',
    type: ESetting.GROUP,
    components: radialSeparators,
  },
  {
    key: 'css',
    label: 'CSS',
    type: ESetting.GROUP,
    components: cssSettings,
  },
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
