import cn from 'classnames';

export enum LogoVariant {
  light = 'light',
  dark = 'dark',
}

const Variants: Record<LogoVariant, string> = {
  [LogoVariant.light]: 'text-white',
  [LogoVariant.dark]: 'text-black',
};

export enum LogoType {
  symbol = 'symbol',
  wordmark = 'wordmark',
  complete = 'complete',
}

export enum LogoSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
}

const SymbolSizes: Record<LogoSize, string> = {
  [LogoSize.xs]: 'w-6 h-6',
  [LogoSize.sm]: 'w-9 h-9',
  [LogoSize.md]: 'w-12 h-12',
};

const CompleteSizes: Record<LogoSize, string> = {
  [LogoSize.xs]: 'w-[74px] h-6',
  [LogoSize.sm]: 'w-28 h-9',
  [LogoSize.md]: 'w-[147px] h-12',
};

export interface LogoProps {
  /**
   * Specify the label of the logo.
   */
  arialLabel?: string;

  /**
   * Changes the size of the Logo.
   */
  size?: LogoSize;

  /**
   * Specify the variant of the logo.
   */
  variant?: LogoVariant;

  /**
   * Type of the logo element.
   */
  type?: LogoType;

  /**
   * Class names used for external styles
   */
  className?: string;
}

export const Logo = ({
  className,
  arialLabel = 'Logo',
  variant = LogoVariant.dark,
  size = LogoSize.md,
  type = LogoType.complete,
}: LogoProps) => {
  const classes = {
    container: cn(className),
    logo: cn(Variants[variant], {
      [SymbolSizes[size]]: type === LogoType.symbol,
      [CompleteSizes[size]]: type === LogoType.complete,
    }),
  };

  const logo: Record<LogoType, JSX.Element> = {
    [LogoType.symbol]: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.logo}
      >
        <path
          d="M8 8H28M18 8.19998V28.2M8 8.29999L13 21.3L18 9.92499L23 21.3L28 8.29999"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    [LogoType.wordmark]: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="67"
        height="19"
        fill="none"
        className={classes.logo}
      >
        <path
          fill="currentColor"
          d="M0 2.856V0h14.56v2.856H8.19l.742-.756v16.072H5.628V2.1l.742.756H0ZM14.277 4.592h3.444l2.94 10.304h-.336l2.772-9.576h2.996l2.772 9.604h-.336l2.94-10.332h3.304l-4.48 13.58h-3.248l-2.772-9.016h.504l-2.716 9.016h-3.276l-4.508-13.58ZM43.112 18.564c-1.241 0-2.366-.266-3.374-.798-.998-.532-1.792-1.325-2.38-2.38-.588-1.064-.882-2.394-.882-3.99 0-1.624.294-2.968.882-4.032.588-1.064 1.382-1.857 2.38-2.38 1.008-.523 2.133-.784 3.374-.784 1.223 0 2.329.261 3.318.784.999.523 1.792 1.316 2.38 2.38.588 1.064.882 2.408.882 4.032 0 1.596-.294 2.926-.882 3.99-.588 1.055-1.381 1.848-2.38 2.38-.99.532-2.095.798-3.318.798ZM43 15.68c.654 0 1.232-.159 1.736-.476.514-.327.915-.807 1.204-1.442.299-.635.448-1.423.448-2.366 0-1.437-.285-2.52-.854-3.248-.56-.728-1.33-1.092-2.31-1.092-.662 0-1.25.163-1.764.49-.513.317-.92.798-1.218 1.442-.29.644-.434 1.447-.434 2.408 0 1.419.285 2.487.854 3.206.579.719 1.358 1.078 2.338 1.078ZM62.947 18.172V10.22c0-1.008-.242-1.769-.728-2.282-.485-.513-1.12-.77-1.904-.77-.662 0-1.25.182-1.764.546-.504.364-.9.915-1.19 1.652-.289.728-.433 1.638-.433 2.73h-1.092c0-1.764.219-3.23.657-4.396.44-1.176 1.06-2.053 1.862-2.632.803-.579 1.746-.868 2.829-.868 1.12 0 2.053.252 2.8.756.756.495 1.32 1.195 1.693 2.1.383.905.574 1.96.574 3.164v7.952h-3.304Zm-9.324 0V4.592h2.885l.42 2.688v10.892h-3.304Z"
        />
      </svg>
    ),
    [LogoType.complete]: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 111 36"
        fill="none"
        className={classes.logo}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 8h20m-10 .2v20M8 8.3l5 13 5-11.375L23 21.3l5-13"
        />
        <path
          fill="currentColor"
          d="M44 11.574V8.718h14.56v2.856h-6.37l.742-.756V26.89h-3.304V10.818l.742.756H44ZM58.277 13.31h3.444l2.94 10.304h-.336l2.772-9.576h2.996l2.772 9.604h-.336l2.94-10.332h3.304l-4.48 13.58h-3.248l-2.772-9.016h.504l-2.716 9.016h-3.276l-4.508-13.58ZM87.112 27.282c-1.241 0-2.366-.266-3.374-.798-.998-.532-1.792-1.325-2.38-2.38-.588-1.064-.882-2.394-.882-3.99 0-1.624.294-2.968.882-4.032.588-1.064 1.382-1.857 2.38-2.38 1.008-.523 2.133-.784 3.374-.784 1.223 0 2.329.261 3.318.784.999.523 1.792 1.316 2.38 2.38.588 1.064.882 2.408.882 4.032 0 1.596-.294 2.926-.882 3.99-.588 1.055-1.381 1.848-2.38 2.38-.99.532-2.095.798-3.318.798ZM87 24.398c.653 0 1.232-.159 1.736-.476.513-.327.915-.807 1.204-1.442.299-.635.448-1.423.448-2.366 0-1.437-.285-2.52-.854-3.248-.56-.728-1.33-1.092-2.31-1.092-.663 0-1.25.163-1.764.49-.513.317-.92.798-1.218 1.442-.29.644-.434 1.447-.434 2.408 0 1.419.285 2.487.854 3.206.579.719 1.358 1.078 2.338 1.078ZM106.948 26.89v-7.952c0-1.008-.243-1.769-.728-2.282-.486-.513-1.12-.77-1.904-.77-.663 0-1.251.182-1.764.546-.504.364-.901.915-1.191 1.652-.289.728-.433 1.638-.433 2.73h-1.093c0-1.764.22-3.23.658-4.396.439-1.176 1.06-2.053 1.862-2.632.803-.579 1.746-.868 2.828-.868 1.12 0 2.054.252 2.801.756.756.495 1.32 1.195 1.693 2.1.383.905.575 1.96.575 3.164v7.952h-3.304Zm-9.324 0V13.31h2.883l.421 2.688V26.89h-3.304Z"
        />
      </svg>
    ),
  };

  return (
    <div className={classes.container} aria-label={arialLabel}>
      {logo[type]}
    </div>
  );
};
