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
    label: 'Show Text',
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
    key: 'pathColor',
    label: 'Path Color',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'trailColor',
    label: 'Trail Color',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'textColor',
    label: 'Text Color',
    type: ESetting.COLOR_PICKER,
  },
]

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  {
    key: 'colors',
    label: 'Colors',
    type: ESetting.GROUP,
    components: colorSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
