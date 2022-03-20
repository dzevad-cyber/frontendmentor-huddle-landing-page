const clampBuilder = (
  minWidthPx,
  maxWidthPx,
  minFontSize,
  maxFontSize,
  pixelsPerRem
) => {
  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${parseFloat(
    yAxisIntersection.toFixed(4)
  )}rem + ${parseFloat((slope * 100).toFixed(4))}vw, ${maxFontSize}rem )`;
};
