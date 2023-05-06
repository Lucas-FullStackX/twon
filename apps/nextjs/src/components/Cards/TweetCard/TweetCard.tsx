import Image from 'next/image';
import cn from 'classnames';
import { Typewriter } from '~/components/Typewriter/Typewriter';
import { Counter } from '../../Counter/Counter';
import { Icon, IconCatalog } from '../../Icon/Icon';

export interface TweetCardProps {
  /**
   * The number of comments at the end of the count animation.
   */
  commentCount?: number;

  /**
   * The CSS class to apply to the component.
   */
  className?: string;

  /**
   * The number of like at the end of the count animation.
   */
  likeCount?: number;

  /**
   * The number of retweets at the end of the count animation.
   */
  retweetCount?: number;

  tweetText: string;

  /**
   * Whether to enable the typing animation for the tweet text.
   */
  isTypingAnimationEnabled?: boolean;

  /**
   * The number of views at the end of the count animation.
   */
  viewCount?: number;
}

export const TweetCard = ({
  commentCount: endComments = 2,
  className,
  likeCount: endHeart = 4,
  retweetCount: endRetweet = 1,
  tweetText,
  isTypingAnimationEnabled = false,
  viewCount: endViews = 10,
}: TweetCardProps) => {
  const classes = {
    container: cn(
      className,
      'relative grid max-w-xl grid-cols-[50px_1fr] grid-rows-[1fr_50px]',
      'items-start justify-center gap-x-4 rounded-md',
      'border-[1px] border-solid border-slate-200',
      'bg-black p-4 text-white animate-fade-in',
    ),
    profileImg: cn('hidden w-10 rounded-full', 'min-[420px]:block lg:w-16'),
    body: cn(
      'col-start-1 col-end-3 flex min-h-[120px] flex-col',
      'items-start gap-4 min-[420px]:col-start-2',
    ),
    social: cn(
      'col-start-1 col-end-3 mt-4 flex w-full',
      'items-end justify-between gap-4 justify-self-end',
      'min-[400px]:col-start-2',
    ),
  };

  return (
    <div className={classes.container}>
      <Image
        src="https://pbs.twimg.com/profile_images/1645933911514681345/zrDbFWCT_400x400.jpg"
        alt="Serudda twitter profile image"
        className={classes.profileImg}
        width="50"
        height="50"
      />
      <div className={classes.body}>
        <div className="flex items-center gap-1">
          <h2 className="text-xl font-bold uppercase">Serudda</h2>

          <Icon icon={IconCatalog.twitterCheck} isSolid={true} className="w-4 fill-[#1d9bf0]" />
          <span className="md:text-fluid-sm text-gray-600">@serudda · Apr 28</span>
        </div>

        {isTypingAnimationEnabled ? <Typewriter text={tweetText} /> : <p>{tweetText}</p>}
      </div>

      {/* Icons Section */}
      <div className={classes.social}>
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
