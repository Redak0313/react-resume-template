import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-left last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex flex-col  justify-start sm:flex-row">
          <span className="flex-1 text-sm font-medium italic sm:flex-none text-left">{location}</span>
          <div className="flex items-center ">
            <span className="text-left px-2">•</span>
            <span className="text-left flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
