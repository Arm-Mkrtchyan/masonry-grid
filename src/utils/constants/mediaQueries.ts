export const screenSizes = {
  xs: 420,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const breakpoints = {
  xs: `@media (max-width: ${screenSizes.xs}px)`,
  sm: `@media (max-width: ${screenSizes.sm}px)`,
  md: `@media (max-width: ${screenSizes.md}px)`,
  lg: `@media (max-width: ${screenSizes.lg}px)`,
  xl: `@media (max-width: ${screenSizes.xl}px)`,
  '2xl': `@media (max-width: ${screenSizes['2xl']}px)`,
};
