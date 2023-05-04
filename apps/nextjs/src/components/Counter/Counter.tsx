import { setTimeout } from 'timers';
import { useEffect, useState } from 'react';
import cn from 'classnames';

interface CounterProps {
  /**
   * The starting value of the counter.
   */
  start: number;
  /**
   * The ending value of the counter.
   */
  end: number;
  /**
   * The speed (in milliseconds) at which the counter should increment.
   */
  speed?: number;
  /**
   * The CSS class to apply to the component.
   */
  className?: string;
}

export const Counter = ({ className, start, end, speed = 100 }: CounterProps) => {
  const [count, setCount] = useState(start);
  const classes = {
    container: cn(className, 'counter min-w-[30px]'),
    child: cn('count'),
  };

  useEffect(() => {
    /**
     * If the end value changes, reset the count to the start value
     */

    setCount(start);
  }, [start]);

  useEffect(() => {
    /**
     * Use a timeout to increment the count every 'speed' milliseconds
     * until the end value is reached
     */

    const timeoutId = setTimeout(() => {
      if (count < end) {
        setCount(count + 1);
      }
    }, speed);

    /**
     * Clean up the timeout when the component unmounts
     * or when the end value changes
     */

    return () => clearTimeout(timeoutId);
  }, [count, end, speed]);

  /**
   * Return an empty div for the specified delay before starting the counter
   */

  return (
    <div className={classes.container}>
      <span className={classes.child}>{count}</span>
    </div>
  );
};
