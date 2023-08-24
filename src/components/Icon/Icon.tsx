import {FC, memo} from 'react';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
  width?: string;
  viewBox?: string;
}

const Icon: FC<IconProps> = memo(
  ({children, className, svgRef, transform, width = '128', viewBox = '0 0 128 128', ...props}) => (
    <svg
      className={className}
      fill="currentColor"
      ref={svgRef}
      transform={transform}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {children}
    </svg>
  ),
);

export default Icon;
