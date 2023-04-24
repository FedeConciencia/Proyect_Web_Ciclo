import { useEffect, useCallback, useState } from "react";

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState<null | boolean>(null);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener("change", updateTarget, { passive: true });

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);
    else setTargetReached(false);

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default useMediaQuery;
