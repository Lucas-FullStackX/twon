import cn from 'classnames';

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

enum Color {
  primary50 = 'primary50',
  primary100 = 'primary100',
  primary200 = 'primary200',
  primary300 = 'primary300',
  primary400 = 'primary400',
  primary500 = 'primary500',
  primary600 = 'primary600',
  primary700 = 'primary700',
  primary800 = 'primary800',
  primary900 = 'primary900',
  primary950 = 'primary950',
  secondary50 = 'secondary50',
  secondary100 = 'secondary100',
  secondary200 = 'secondary200',
  secondary300 = 'secondary300',
  secondary400 = 'secondary400',
  secondary500 = 'secondary500',
  secondary600 = 'secondary600',
  secondary700 = 'secondary700',
  secondary800 = 'secondary800',
  secondary900 = 'secondary900',
  secondary950 = 'secondary950',
  neutral50 = 'neutral50',
  neutral100 = 'neutral100',
  neutral200 = 'neutral200',
  neutral300 = 'neutral300',
  neutral400 = 'neutral400',
  neutral500 = 'neutral500',
  neutral600 = 'neutral600',
  neutral700 = 'neutral700',
  neutral800 = 'neutral800',
  neutral900 = 'neutral900',
  neutral950 = 'neutral950',
}

const DotsColors: Record<Color, string> = {
  [Color.primary50]: '#feffAD',
  [Color.primary100]: '#fdff70',
  [Color.primary200]: '#faff00',
  [Color.primary300]: '#fae200',
  [Color.primary400]: '#f4c200',
  [Color.primary500]: '#efa200',
  [Color.primary600]: '#ea8400',
  [Color.primary700]: '#df6500',
  [Color.primary800]: '#d54800',
  [Color.primary900]: '#ca2e00',
  [Color.primary950]: '#8F2100',
  [Color.secondary50]: '#ECEDFD',
  [Color.secondary100]: '#C7C8FA',
  [Color.secondary200]: '#A1A3F7',
  [Color.secondary300]: '#7C7EF4',
  [Color.secondary400]: '#6366F1',
  [Color.secondary500]: '#4346EF',
  [Color.secondary600]: '#1E21EB',
  [Color.secondary700]: '#1215CE',
  [Color.secondary800]: '#0F11A9',
  [Color.secondary900]: '#0B0D83',
  [Color.secondary950]: '#080A5E',
  [Color.neutral50]: '#fafafa',
  [Color.neutral100]: '#f5f5f5',
  [Color.neutral200]: '#e5e5e5',
  [Color.neutral300]: '#d4d4d4',
  [Color.neutral400]: '#a3a3a3',
  [Color.neutral500]: '#737373',
  [Color.neutral600]: '#525252',
  [Color.neutral700]: '#404040',
  [Color.neutral800]: '#262626',
  [Color.neutral900]: '#171717',
  [Color.neutral950]: '#0a0a0a',
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
  dotsColors?: Color;

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
  dotsSeparation = Sizes.lg,
  dotsColors = Color.neutral700,
  radialTransparency = 50,
  dotsSize = Sizes.base,
}: DottedBackgroundProps) => {
  const classes = cn(
    className,
    'dotted-background bg-repeat',
    'absolute inset-0 z-0',
    'h-full w-full ',
  );

  const cssCustomProps: Record<string, string> = {
    '--dots-colors': `${DotsColors[dotsColors]}`,
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
