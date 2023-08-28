import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import {Carousel} from 'react-responsive-carousel';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import LeftIcon from '../Icon/LeftIcon';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl sm:text-2xl md:text-2xl  font-bold text-white">My latest projects</h2>
        <div className="w-ful sm:h-1/3 md:h-1/3 flex justify-center items-center">
          <Carousel
            autoPlay={true}
            className="w-full sm:w-3/5"
            infiniteLoop={true}
            // eslint-disable-next-line react-memo/require-usememo
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${
                    hasNext ? 'absolute' : 'hidden'
                  } top-0 bottom-0 right-0 flex justify-center items-center mb-12 p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 transform rotate-180`}
                  onClick={clickHandler}>
                  <LeftIcon className="w-9 h-9" color="white" />
                </div>
              );
            }}
            // eslint-disable-next-line react-memo/require-usememo
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${
                    hasPrev ? 'absolute' : 'hidden'
                  } top-0 bottom-0 left-0 flex justify-center items-center mb-12 p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}>
                  <LeftIcon className="w-9 h-9" color="white" />
                </div>
              );
            }}
            showStatus={false}
            showThumbs={false}
            swipeable={false}>
            {portfolioItems.map((item, index) => {
              const {title, image} = item;
              return (
                <div className="pb-12" key={`${title}-${index}`}>
                  <div
                    className={classNames(
                      'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                    )}>
                    <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                    <ItemOverlay item={item} />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col justify-center items-center gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs w-3/4 text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
