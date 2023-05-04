/* eslint-disable @next/next/no-img-element */

import { type ReactNode } from 'react';
import cn from 'classnames';
import { Counter } from '../Counter/Counter';
import { Icon, IconCatalog } from '../Icon/Icon';

interface CardProps {
  /**
   * The number of comments at the end.
   */
  endComments?: number;

  /**
   * The number of hearts at the end.
   */
  endHeart?: number;

  /**
   * The number of retweets at the end.
   */
  endRetweet?: number;

  /**
   * The number of views at the end.
   */
  endViews?: number;

  /**
   * The CSS class to apply to the component.
   */
  className?: string;

  /**
   * The children of the component.
   */
  children: ReactNode;
}

export const Card = ({
  endComments = 2,
  endHeart = 4,
  endRetweet = 1,
  endViews = 10,
  className,
  children,
}: CardProps) => {
  const classes = {
    container: cn(
      className,
      'relative grid max-w-xl grid-cols-[50px_1fr] grid-rows-[1fr_50px]',
      'items-start justify-center gap-x-4 rounded-md',
      'border-[1px] border-solid border-slate-200',
      'bg-black p-4 text-white animate-fade-in',
    ),
    profileImg: cn('hidden w-10 rounded-full', 'min-[420px]:block lg:w-16'),
    bodyContainer: cn(
      'col-start-1 col-end-3 flex min-h-[120px] flex-col',
      'items-start gap-4 min-[420px]:col-start-2',
    ),
    socialContainer: cn(
      'col-start-1 col-end-3 mt-4 flex w-full',
      'items-end justify-between gap-4 justify-self-end',
      'min-[400px]:col-start-2',
    ),
  };

  return (
    <div className={classes.container}>
      <img
        src="https://pbs.twimg.com/profile_images/1645933911514681345/zrDbFWCT_400x400.jpg"
        alt=""
        className={classes.profileImg}
      />
      <div className={classes.bodyContainer}>
        <div className="flex items-center gap-1">
          <h2 className="text-xl font-bold uppercase">Serudda</h2>

          <Icon icon={IconCatalog.twitterCheck} isSolid={true} className="w-4 fill-[#1d9bf0]" />
          <span className="md:text-fluid-sm text-gray-600">@serudda · Apr 28</span>
        </div>

        {children}
      </div>

      {/* Icons Section */}
      <div className={classes.socialContainer}>
        <div className="items flex items-center gap-2">
          <Icon icon={IconCatalog.twitterComments} isSolid={true} className="w-4" />
          <Counter start={1} end={endComments} />
        </div>
        <div className="items flex items-center gap-2">
          <Icon icon={IconCatalog.twitterRetweet} isSolid={true} className="w-4" />
          <Counter start={1} end={endRetweet} />
        </div>
        <div className="items flex items-center gap-2">
          <Icon icon={IconCatalog.twitterHeart} isSolid={true} className="w-4" />
          <Counter start={1} end={endHeart} />
        </div>
        <div className="items flex items-center gap-2">
          <Icon icon={IconCatalog.twitterView} isSolid={true} className="w-4" />
          <Counter start={1} end={endViews} />
        </div>
      </div>
    </div>
  );
};
