export enum TextSizeClasses {
  xs = 'text-xs font-semibold',
  sm = 'text-sm font-semibold',
  base = 'text-lg font-bold',
  xl = 'text-3xl font-bold',
}

// TODO: need to update to-pink-500 for the accent color
export enum TextVariants {
  primary = 'from-[#efa200] to-pink-500',
  secondary = 'from-green-500 to-indigo-400',
  tertiary = 'from-red-500 to-blue-500',
}

export enum HtmlTags {
  headingOne = 'h1',
  headingTwo = 'h2',
  headingThree = 'h3',
  headingFour = 'h4',
  headingFive = 'h5',
  headingSix = 'h6',
  span = 'span',
  div = 'div',
  paragraph = 'p',
}

export enum GradientDirections {
  leftToRight = 'bg-gradient-to-r',
  rightToLeft = 'bg-gradient-to-l',
  topToBottom = 'bg-gradient-to-b',
  bottomToTop = 'bg-gradient-to-t',
  topLeftToBottomRight = 'bg-gradient-to-br',
  bottomRightToTopLeft = 'bg-gradient-to-tl',
  topRightToBottomLeft = 'bg-gradient-to-bl',
  bottomLeftToTopRight = 'bg-gradient-to-tr',
}

/**
 * Props for the TextGradient component.
 */
interface TextGradientProps {
  /**
   * The variant of the text gradient. Determines the colors of the gradient.
   */
  textVariant?: TextVariants;

  /**
   * The HTML tag to use for the component.
   */
  htmlTag?: HtmlTags;

  /**
   * The direction of the gradient. Determines the direction of the gradient colors.
   */
  gradientDirection?: GradientDirections;

  /**
   * The size of the text. Determines the font size and weight.
   */
  textSizeClass?: TextSizeClasses;

  /**
   * The inner text to display in the component.
   */
  text: string;
}

export const TextGradient: React.FC<TextGradientProps> = ({
  textVariant = TextVariants.primary,
  htmlTag: HtmlTag = HtmlTags.headingOne,
  gradientDirection = GradientDirections.bottomLeftToTopRight,
  textSizeClass = TextSizeClasses.xl,
  text,
}) => {
  /**
   * Default properties for the text gradient.
   * This includes the background clip and transparent text properties
   */
  const defaultProperties = 'bg-clip-text text-transparent';

  return (
    <HtmlTag
      className={`
      ${defaultProperties}
      ${gradientDirection}
      ${textVariant}
      ${textSizeClass}
      `}
    >
      {text}
    </HtmlTag>
  );
};
