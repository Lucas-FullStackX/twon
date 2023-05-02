import React, { type ReactElement, type ReactNode } from 'react';
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
type TailwindColorString = `${ExcludeShades<TailwindColor>}`;

export enum TextSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
  '5xl' = '5xl',
  '6xl' = '6xl',
  '7xl' = '7xl',
  '8xl' = '8xl',
  '9xl' = '9xl',
}

const TextSizes: Record<TextSize, string> = {
  [TextSize.xs]: 'text-xs ',
  [TextSize.sm]: 'text-xs ',
  [TextSize.base]: 'text-md ',
  [TextSize.lg]: 'text-lg ',
  [TextSize.xl]: 'text-xl ',
  [TextSize['2xl']]: 'text-2xl ',
  [TextSize['3xl']]: 'text-3xl ',
  [TextSize['4xl']]: 'text-4xl ',
  [TextSize['5xl']]: 'text-5xl ',
  [TextSize['6xl']]: 'text-6xl ',
  [TextSize['7xl']]: 'text-7xl ',
  [TextSize['8xl']]: 'text-8xl ',
  [TextSize['9xl']]: 'text-9xl ',
};

export enum FontWeight {
  thin = 'thin',
  extralight = 'extralight',
  light = 'light',
  base = 'base',
  medium = 'medium',
  semibold = 'semibold',
  bold = 'bold',
  extrabold = 'extrabold',
  black = 'black',
}

const FontWeights: Record<FontWeight, string> = {
  [FontWeight.thin]: 'font-thin',
  [FontWeight.extralight]: 'font-extralight',
  [FontWeight.light]: 'font-light',
  [FontWeight.base]: 'font-normal',
  [FontWeight.medium]: 'font-medium',
  [FontWeight.semibold]: 'font-semibold',
  [FontWeight.bold]: 'font-bold',
  [FontWeight.extrabold]: 'font-extrabold',
  [FontWeight.black]: 'font-black',
};

export enum GradientDirection {
  leftToRight = 'leftToRight',
  rightToLeft = 'rightToLeft',
  topToBottom = 'topToBottom',
  bottomToTop = 'bottomToTop',
  topLeftToBottomRight = 'topLeftToBottomRight',
  bottomRightToTopLeft = 'bottomRightToTopLeft',
  topRightToBottomLeft = 'topRightToBottomLeft',
  bottomLeftToTopRight = 'bottomLeftToTopRight',
}

const GradientDirections: Record<GradientDirection, string> = {
  [GradientDirection.leftToRight]: 'bg-gradient-to-r',
  [GradientDirection.rightToLeft]: 'bg-gradient-to-l',
  [GradientDirection.topToBottom]: 'bg-gradient-to-b',
  [GradientDirection.bottomToTop]: 'bg-gradient-to-t',
  [GradientDirection.topLeftToBottomRight]: 'bg-gradient-to-br',
  [GradientDirection.bottomRightToTopLeft]: 'bg-gradient-to-tl',
  [GradientDirection.topRightToBottomLeft]: 'bg-gradient-to-bl',
  [GradientDirection.bottomLeftToTopRight]: 'bg-gradient-to-tr',
};

type Percentages =
  | '0%'
  | '5%'
  | '10%'
  | '15%'
  | '20%'
  | '25%'
  | '30%'
  | '35%'
  | '40%'
  | '45%'
  | '50%'
  | '55%'
  | '60%'
  | '65%'
  | '70%'
  | '75%'
  | '80%'
  | '85%'
  | '90%'
  | '95%'
  | '100%';

interface TextGradientProps {
  /**
   * The CSS class to apply to the component.
   */
  className?: string;

  /**
   * The children to be rendered inside the component.
   */
  children?: ReactNode;

  /**
   * The direction of the gradient.
   */
  gradientDirection?: GradientDirection;

  /**
   * The starting color of the gradient.
   */
  gradientStartColor: `from-${TailwindColorString}`;

  /**
   * The colors that will be in the middle of Start and End colors.
   */
  gradientViaColors?: `via-${TailwindColorString}`;

  /**
   * The ending color of the gradient.
   */
  gradientEndColor?: `to-${TailwindColorString}`;

  /**
   * The weight of the font.
   */
  fontWeight?: FontWeight;

  /**
   * The size of the text.
   */
  textSize?: TextSize;

  /**
   * The position of the starting color stop.
   */
  startColorStop?: `from-${Percentages}`;

  /**
   * The position of the via color stop.
   */
  viaColorStop?: `via-${Percentages}`;

  /**
   * The position of the ending color stop.
   */
  endColorStop?: `to-${Percentages}`;
}

export const TextGradient = ({
  className,
  children,
  gradientDirection = GradientDirection.leftToRight,
  gradientStartColor = 'from-pink-800',
  gradientViaColors,
  gradientEndColor,
  fontWeight = FontWeight.base,
  textSize = TextSize['4xl'],
  startColorStop,
  viaColorStop,
  endColorStop,
}: TextGradientProps) => {
  const classes = cn(
    className,
    'bg-clip-text text-transparent pb-2',
    GradientDirections[gradientDirection],
    gradientStartColor,
    gradientViaColors,
    gradientEndColor,
    FontWeights[fontWeight],
    TextSizes[textSize],
    startColorStop,
    viaColorStop,
    endColorStop,
  );

  return (
    <>
      {React.Children.map(children, (child: ReactNode) => {
        /**
         * Check if the child is a valid React element
         */
        if (React.isValidElement<ReactElement>(child)) {
          /**
           * Check if the child is a valid React element
           * `TextGradientProps` type
           */
          if (React.isValidElement<ReactElement>(child)) {
            /**
             * Check if the child is a valid React
             * element `TextGradientProps` type
             */
            const childElement = child as ReactElement;
            /**
             * Return a cloned element with the added `classes` prop
             */

            return React.cloneElement(childElement, {
              /**
               * Concatenate the `classes` prop passed to the component with
               * the `className` prop of the child element, or an empty string
               * if the child element doesn't have a `className` prop
               */

              className: `${classes} ${childElement.props.className || ''}`,
            });
          }
        }
        return child;
      })}
    </>
  );
};
