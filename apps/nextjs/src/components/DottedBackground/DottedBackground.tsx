import cn from 'classnames';
import type colors from 'tailwindcss/colors';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

/**
 * Get the full Tailwind config by resolving
 * it from the tailwind.config.js file
 */
const fullConfig = resolveConfig(tailwindConfig);

/**
 * Get the default and extended colors from the Tailwind config
 */
type defaultColors = keyof typeof colors;
type extendedColors = typeof fullConfig.theme extends { extend: { colors: infer C } }
  ? keyof C
  : never;
type AllColors = defaultColors | extendedColors;

/**
 * Exclude shades of certain colors
 */
type ExcludeShades<T extends string> = T extends
  | 'black'
  | 'white'
  | 'current'
  | 'inherit'
  | 'transparent'
  ? T
  : `${T}-${TailwindColorShade}`;

/**
 * Define the available shades for a Tailwind color
 */
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
  | '900'
  | '950';

/**
 * Get the available Tailwind colors and
 * generate a string type for each color with the available shades
 */
type TailwindColor = Exclude<AllColors, 'theme' | 'presets' | 'content'>;
type TailwindColorString = `from-${ExcludeShades<TailwindColor>}`;

export enum Size {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
}

const DotsSizes: Record<Size, string> = {
  [Size.xs]: '0.03125rem',
  [Size.sm]: '0.0625rem',
  [Size.base]: '0.09375rem',
  [Size.lg]: '0.125rem',
  [Size.xl]: '0.15625rem',
  [Size['2xl']]: '0.1875rem',
  [Size['3xl']]: '0.21875rem',
  [Size['4xl']]: '0.25rem',
};

export enum Separation {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
}

const DotsSeparations: Record<Separation, string> = {
  [Separation.xs]: '0.3125rem 0.3125rem',
  [Separation.sm]: '0.625rem 0.625rem',
  [Separation.base]: '0.9375rem 0.9375rem',
  [Separation.lg]: '1.25rem 1.25rem',
  [Separation.xl]: '1.5625rem 1.5625rem',
  [Separation['2xl']]: '1.875rem 1.875rem',
  [Separation['3xl']]: '2.1875rem 2.1875rem',
  [Separation['4xl']]: '2.5rem 2.5rem',
};

export enum MaskDirection {
  leftToRight = 'leftToRight',
  rightToLeft = 'rightToLeft',
  topToBottom = 'topToBottom',
  bottomToTop = 'bottomToTop',
  topLeftToBottomRight = 'topLeftToBottomRight',
  bottomRightToTopLeft = 'bottomRightToTopLeft',
  topRightToBottomLeft = 'topRightToBottomLeft',
  bottomLeftToTopRight = 'bottomLeftToTopRight',
}

const MaskDirections: Record<MaskDirection, string> = {
  [MaskDirection.leftToRight]: '90deg',
  [MaskDirection.rightToLeft]: '270deg',
  [MaskDirection.topToBottom]: '180deg',
  [MaskDirection.bottomToTop]: '0deg',
  [MaskDirection.topLeftToBottomRight]: '135deg',
  [MaskDirection.bottomRightToTopLeft]: '-45deg',
  [MaskDirection.topRightToBottomLeft]: '-135deg',
  [MaskDirection.bottomLeftToTopRight]: '45deg',
};

interface DottedBackgroundProps {
  /**
   * The CSS class to apply to the component.
   */
  className?: string;

  /**
   * The range of sizes for the dots.
   */
  dotsSize?: Size;

  /**
   * The color of the dots.
   */
  dotsColors?: TailwindColorString;

  /**
   * The separation between dots.
   */
  dotsSeparation?: Separation;

  /**
   * Determines whether the mask gradient is linear or radial.
   */
  isLinear?: boolean;

  /**
   * The direction of the mask gradient.
   */
  maskDirection?: MaskDirection;

  /**
   * The transparency from the edge to the center in radial.
   */
  maskTransparency?: number;
}

export const DottedBackground = ({
  className,
  dotsSize = Size.base,
  dotsColors = 'from-gray-700',
  dotsSeparation = Separation.base,
  isLinear = false,
  maskDirection = MaskDirection.topToBottom,
  maskTransparency = 80,
}: DottedBackgroundProps) => {
  const classes = cn(
    className,
    'dotted-background bg-repeat',
    'absolute inset-0 z-0',
    'h-full w-full ',
    dotsColors,
  );

  const cssCustomProps: Record<string, string> = {
    '--dots-size': `${DotsSizes[dotsSize]}`,
    '--dots-separation': DotsSeparations[dotsSeparation],
    '--mask-transparency': `${maskTransparency}%`,
    '--position': MaskDirections[maskDirection],
    '--mask-image': isLinear
      ? 'linear-gradient(var(--position), rgb(0, 0, 0), transparent var(--mask-transparency))'
      : 'radial-gradient(rgb(0, 0, 0), transparent var(--mask-transparency))',
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
