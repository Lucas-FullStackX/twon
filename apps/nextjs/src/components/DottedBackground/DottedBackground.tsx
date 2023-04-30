import { type CSSProperties } from 'react';

export enum RadialTransparency {
  zero = '0%',
  ten = '10%',
  twenty = '20%',
  thirty = '30%',
  forty = '40%',
  fifty = '50%',
  sixty = '60%',
  seventy = '70%',
  eighty = '80%',
  ninety = '90%',
  full = '100%',
}

export enum DotColors {
  black = 'rgb(0, 0, 0)',
  gray10 = 'rgb(26, 32, 44)',
  gray20 = 'rgb(54, 64, 82)',
  gray30 = 'rgb(82, 93, 113)',
  gray40 = 'rgb(109, 121, 143)',
  gray50 = 'rgb(137, 150, 174)',
  gray60 = 'rgb(164, 178, 204)',
  gray70 = 'rgb(192, 207, 235)',
  gray80 = 'rgb(219, 227, 249)',
  white = 'rgb(255, 255, 255)',
}

export enum DotsSeparation {
  /**
   * equivalent to 5 pixels
   */
  five = '0.3125rem 0.3125rem',

  /**
   * equivalent to 10 pixels
   */
  ten = '0.625rem 0.625rem',

  /**
   * equivalent to 15 pixels
   */
  fifteen = '0.9375rem 0.9375rem',

  /**
   * equivalent to 20 pixels
   */
  twenty = '1.25rem 1.25rem',

  /**
   * equivalent to 25 pixels
   */
  twentyFive = '1.5625rem 1.5625rem',
}

export enum DotsSizes {
  /**
   * Equivalent to 0.5 pixels
   */
  half = '0.03125rem',

  /**
   * Equivalent to 1.0 pixels
   */
  one = '0.0625rem',

  /**
   * Equivalent to 1.5 pixels
   */
  oneAndHalf = '0.09375rem',

  /**
   * Equivalent to 2.0 pixels
   */
  two = '0.125rem',

  /**
   * Equivalent to 2.5 pixels
   */
  twoAndHalf = '0.15625rem',

  /**
   * Equivalent to 3.0 pixels
   */
  three = '0.1875rem',

  /**
   * Equivalent to 3.5 pixels
   */
  threeAndHalf = '0.21875rem',

  /**
   * Equivalent to 4.0 pixels
   */
  four = '0.25rem',
}

/**
 * Props for the DotBackground component.
 */
interface DotBackgroundProps {
  /**
   * The separation between dots.
   * Use DotsSeparation enum for valid values.
   */
  dotsSeparation?: DotsSeparation;

  /**
   * The color of the dots.
   * Use DotColors enum for valid values.
   */
  dotsColors?: DotColors;

  /**
   * The transparency of the radial mask.
   * Higher the % less transparency you will get.
   * Use RadialTransparency enum for valid values.
   */
  radialTransparency?: RadialTransparency;

  /**
   *The range of sizes for the dots.
   *Use DotsSizeRange enum for valid values.
   */
  dotsSize?: DotsSizes;
}

/**
 * A component that displays a dot background with a radial mask.
 */
export const DottedBackground: React.FC<DotBackgroundProps> = ({
  dotsSeparation = DotsSeparation.fifteen,
  dotsColors = DotColors.gray20,
  radialTransparency = RadialTransparency.sixty,
  dotsSize = DotsSizes.one,
}) => {
  /**
   * The CSS styles for the component.
   */
  const styles: CSSProperties = {
    backgroundImage: `radial-gradient(circle, ${dotsColors} ${dotsSize}, ${dotsColors} ${dotsSize}, transparent ${dotsSize})`,
    backgroundSize: dotsSeparation,
    maskImage: `radial-gradient(rgb(0, 0, 0), transparent ${radialTransparency})`,
  };

  /**
   * Renders the DotBackground component.
   */
  return <div className="absolute inset-0 z-0 h-full w-full bg-repeat" style={styles} />;
};

/** NOTE:
 * The style attribute is used here because Tailwind classes alone cannot
 * achieve the specific styles required by the DotBackground component.
 *
 * Using the style attribute allows us to define custom CSS styles that will
 * only apply to this specific component. This is preferable to extending the
 *
 * Tailwind config, which would apply the styles globally to all elements that
 * use those classes.
 */
