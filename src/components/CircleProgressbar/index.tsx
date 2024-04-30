import config, { ICircleProgressbarProps } from './CircleProgressbar.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './CircleProgressbar.build';
import Render from './CircleProgressbar.render';

const CircleProgressbar: T4DComponent<ICircleProgressbarProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

CircleProgressbar.craft = config.craft;
CircleProgressbar.info = config.info;
CircleProgressbar.defaultProps = config.defaultProps;

export default CircleProgressbar;
