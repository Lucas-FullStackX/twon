import { useEffect, useState } from 'react';

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

export const Counter = ({ start, end, speed = 100 }: CounterProps) => {
  const [count, setCount] = useState(start);

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
    <div className="counter min-w-[30px]">
      <span>{count}</span>
    </div>
  );
};
