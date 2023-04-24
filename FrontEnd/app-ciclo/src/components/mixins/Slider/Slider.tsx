import { ReactNode, useRef, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import cn from "classnames";
import sliderStyles from "./slider.module.scss";
import useDeviceType from "@/hooks/useDeviceType";

type sliderProps = {
  children?: ReactNode;
  interval?: number;
  automatic: boolean;
  hightlight: boolean;
  color: string;
};

const Slider = ({
  children,
  interval = 3000,
  automatic = true,
  hightlight = false,
  color = "white",
}: sliderProps) => {
  const ref = useRef<any>(null);
  const container = useRef<any>(null);
  const [autoplay, setAutoplay] = useState(true);
  const { isDesktop } = useDeviceType();
  const next = () => {
    const slider = ref.current;
    if (
      slider &&
      slider?.scrollLeft >=
        slider.children[0]?.offsetWidth - slider.offsetWidth - 20
    ) {
      slider?.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider?.scrollTo({
        left: slider.scrollLeft + slider.clientWidth,
        behavior: "smooth",
      });
    }
  };
  // setea el autoScroll
  useEffect(() => {
    if (autoplay && automatic) {
      const autoScroll = setInterval(next, interval);
      // elimina el autoScroll
      return () => {
        clearInterval(autoScroll);
      };
    }

    return () => {};
  }, [autoplay]);

  const back = () => {
    const wrapper = container.current;
    const slider = ref.current;
    if (slider.scrollLeft <= 0) {
      slider.scrollTo({
        left: wrapper.clientWidth * (children as ReactNode[]).length,
        behavior: "smooth",
      });
    } else {
      slider.scrollTo({
        left: slider.scrollLeft - slider.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const chevronStyles = cn({
    [sliderStyles.chevrons]: true,
    [sliderStyles.chevronHighlight]: hightlight,
  });

  return (
    <div
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      className={sliderStyles.container}
      ref={container}
    >
      <div className={sliderStyles.slider} ref={ref}>
        <div className={sliderStyles.sliderContainer}>{children}</div>
      </div>
      {(children as ReactNode[]).length > 1 && isDesktop && (
        <button
          onClick={() => {
            back();
            setAutoplay(false);
          }}
          className={chevronStyles}
          style={{ left: 0 }}
        >
          <BiChevronLeft color={color} fontSize={40} />
        </button>
      )}
      {(children as ReactNode[]).length > 1 && isDesktop && (
        <button
          onClick={() => {
            next();
            setAutoplay(false);
          }}
          className={chevronStyles}
          style={{ borderRadius: "15px 0 0 15px", right: 0 }}
        >
          <BiChevronRight color={color} fontSize={40} />
        </button>
      )}
    </div>
  );
};

Slider.displayName = "Slider";
export default Slider;
