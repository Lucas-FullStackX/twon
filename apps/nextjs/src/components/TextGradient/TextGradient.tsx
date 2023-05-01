import React, { type ReactElement, type ReactNode } from 'react';
import cn from 'classnames';

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

export enum Variant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

// TODO: need to update to-pink-500 for the accent color
const GradientVariant: Record<Variant, string> = {
  [Variant.primary]: 'from-[#efa200] to-pink-500',
  [Variant.secondary]: 'from-green-500 to-indigo-400',
  [Variant.tertiary]: 'from-red-500 to-blue-500',
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
   * The variant of the text gradient.
   */
  gradientVariant?: Variant;

  /**
   * The weight of the font/
   */
  fontWeight?: FontWeight;

  /**
   * The size of the text.
   */
  textSize?: TextSize;
}

export const TextGradient = ({
  className,
  children,
  fontWeight = FontWeight.bold,
  gradientVariant = Variant.primary,
  gradientDirection = GradientDirection.leftToRight,
  textSize = TextSize['4xl'],
}: TextGradientProps) => {
  const classes = cn(
    className,
    'bg-clip-text text-transparent',
    FontWeights[fontWeight],
    GradientVariant[gradientVariant],
    GradientDirections[gradientDirection],
    TextSizes[textSize],
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
          if (React.isValidElement<ReactElement<TextGradientProps>>(child)) {
            /**
             * Check if the child is a valid React
             * element `TextGradientProps` type
             */
            const childElement = child as ReactElement<TextGradientProps>;
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
