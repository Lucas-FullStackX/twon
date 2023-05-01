import cn from 'classnames';
import type colors from 'tailwindcss/colors';

type TailwindColor = keyof typeof colors;
type TailwindColorShade =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TailwindColorString = `from-${TailwindColor}-${TailwindColorShade}`;

export enum Sizes {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
}

const DotsSeparations: Record<Sizes, string> = {
  /**
   * equivalent to 5 pixels
   */
  [Sizes.xs]: '0.3125rem 0.3125rem',

  /**
   * equivalent to 10 pixels
   */
  [Sizes.sm]: '0.625rem 0.625rem',

  /**
   * equivalent to 15 pixels
   */
  [Sizes.base]: '0.9375rem 0.9375rem',

  /**
   * equivalent to 20 pixels
   */
  [Sizes.lg]: '1.25rem 1.25rem',

  /**
   * equivalent to 25 pixels
   */
  [Sizes.xl]: '1.5625rem 1.5625rem',

  /**
   * equivalent to 30 pixels
   */
  [Sizes['2xl']]: '1.875rem 1.875rem',

  /**
   * Equivalent to 35 pixels
   */
  [Sizes['3xl']]: '2.1875rem 2.1875rem',

  /**
   * Equivalent to 40 pixels
   */
  [Sizes['4xl']]: '2.5rem 2.5rem',
};

const DotsSizes: Record<Sizes, string> = {
  /**
   * Equivalent to 0.5 pixels
   */
  [Sizes.xs]: '0.03125rem',

  /**
   * Equivalent to 1.0 pixels
   */
  [Sizes.sm]: '0.0625rem',

  /**
   * Equivalent to 1.5 pixels
   */
  [Sizes.base]: '0.09375rem',

  /**
   * Equivalent to 2.0 pixels
   */
  [Sizes.lg]: '0.125rem',

  /**
   * Equivalent to 2.5 pixels
   */
  [Sizes.xl]: '0.15625rem',

  /**
   * Equivalent to 3.0 pixels
   */
  [Sizes['2xl']]: '0.1875rem',

  /**
   * Equivalent to 3.5 pixels
   */
  [Sizes['3xl']]: '0.21875rem',

  /**
   * Equivalent to 4.0 pixels
   */
  [Sizes['4xl']]: '0.25rem',
};

interface DottedBackgroundProps {
  /**
   * The CSS class to apply to the component.
   */
  className?: string;
  /**
   * The separation between dots.
   */
  dotsSeparation?: Sizes;

  /**
   * The color of the dots.
   */
  dotsColors?: TailwindColorString;

  /**
   * The transparency from the edge to the center.
   */
  radialTransparency?: number;

  /**
   *The range of sizes for the dots.
   */
  dotsSize?: Sizes;
}

export const DottedBackground = ({
  className,
  dotsSeparation = Sizes['2xl'],
  dotsColors = 'from-fuchsia-500',
  radialTransparency = 50,
  dotsSize = Sizes.xl,
}: DottedBackgroundProps) => {
  const classes = cn(
    className,
    'dotted-background bg-repeat',
    'absolute inset-0 z-0',
    'h-full w-full',
    dotsColors,
  );

  const cssCustomProps: Record<string, string> = {
    '--dots-size': `${DotsSizes[dotsSize]}`,
    '--dots-separation': DotsSeparations[dotsSeparation],
    '--radial-transparency': `${radialTransparency}%`,
  };

  return <div className={classes} style={cssCustomProps} />;
};

/** NOTE:
 * The style attribute is used here because Tailwind classes alone cannot
 * achieve the specific styles required by the DotBackground component.
 *
 * Using the style attribute allows us to CSS Custom Properties that will
 * only apply to this specific component. This is preferable to extending the
 * Tailwind config, which would apply the styles globally to all elements that
 * use those classes.
 */
