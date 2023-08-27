import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const LeftIcon: FC<IconProps> = memo(props => (
  <Icon {...props} className="h-6 w-6 sm:h-7 sm:w-7 " viewBox="0 0 23 23">
    <path
      d="M5 12h14M5 12l6-6m-6 6 6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Icon>
));
export default LeftIcon;
