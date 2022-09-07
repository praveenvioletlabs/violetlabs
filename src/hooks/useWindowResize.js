import { useState, useLayoutEffect } from "react";
import debounce from "lodash/debounce";
import { BreakPoints } from "Theme";

/**
 * Custom hook to detect screen size and update the ui accordingly.
 */
export const useWindowResize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", debounce(updateSize, 500));

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

export const isMobileDevice = (screenSize) => {
  if (screenSize) {
    return screenSize <= BreakPoints.xs;
  }
  return false;
};

export const isTabDevice = (screenSize) => {
  if (screenSize) {
    return screenSize > BreakPoints.xs && screenSize <= BreakPoints.sm;
  }
  return false;
};

export const isMobileOrTabDevice = (screenSize) => {
  return isMobileDevice(screenSize) || isTabDevice(screenSize);
};

export const isDesktopDevice = (screenSize) => {
  if (screenSize) {
    return screenSize > BreakPoints.sm;
  }
  return false;
};
