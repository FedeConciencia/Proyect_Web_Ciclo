/* eslint-disable import/no-mutable-exports */

import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useDeviceType/useMediaQuery";

const useDeviceType = () => {
  const [isDesktop, setIsDesktop] = useState<null | boolean>(null);
  const [isTablet, setIsTablet] = useState<null | boolean>(null);

  const desktop = useMediaQuery(1200);
  const tablet = useMediaQuery(800);
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  return { isDesktop, isTablet };
};

export default useDeviceType;
