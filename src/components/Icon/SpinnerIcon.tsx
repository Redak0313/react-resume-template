import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const SpinnerIcon: FC<IconProps> = memo(props => (
  <Icon {...props} className="h-6 w-6 animate-spin" viewBox="0 0 14 14">
    <circle cx={7} cy={7} r={6} stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} />
    <path d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z" fill="currentColor" fillOpacity={0.9} fillRule="nonzero" />
  </Icon>
));
export default SpinnerIcon;
