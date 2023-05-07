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
  const classes = cn(className, 'w-8');

  useEffect(() => {
    setCount(start);
  }, [start]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (count < end) {
        setCount(count + 1);
      }
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [count, end, speed]);

  return (
    <div className={classes}>
      <span>{count}</span>
    </div>
  );
};
