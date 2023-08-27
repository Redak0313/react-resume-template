import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import CopyIcon from '../../Icon/CopyIcon';

const CertificatesList: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, href, credential} = item;
  return (
    <div className="flex flex-col pb-2 text-left last:pb-0">
      <a className="text-l underline" href={href} target="_blank">
        {title}
      </a>
      <div className="flex flex-col items-left justify-start sm:flex-row md:items-center sm:items-center">
        <p className="flex-1 text-sm font-medium italic sm:flex-none text-left">{location}</p>
        <div className="flex items-center">
          <span className="text-left px-2">•</span>
          <p className="text-left flex-1 text-sm sm:flex-none">{date}</p>
        </div>
        {credential && (
          <div className="flex items-center">
            <span className="text-left px-2">•</span>
            <p className="text-left text-sm sm:flex-none mr-2">Credential ID: {credential}</p>
            <button
              className="self-start cursor-copy pt-1"
              onClick={() => {
                navigator.clipboard.writeText(credential);
              }}
              type="button">
              <CopyIcon color="gray" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default CertificatesList;
