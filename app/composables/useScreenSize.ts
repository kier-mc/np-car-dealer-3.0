export function useScreenSize() {
  const isMobile = useMediaQuery(`(max-width: 680px`);
  const isTablet = useMediaQuery(`(max-width: 768px`);
  const isDesktop = useMediaQuery(`(max-width: 1080px`);

  return { isMobile, isTablet, isDesktop };
}
