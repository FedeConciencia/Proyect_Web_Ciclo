import { ReactNode, useRef, useEffect, useState } from "react";
import cn from "classnames";
import sliderStyles from "./slider.module.scss";

type sliderProps = {
  children?: ReactNode;
  hightlight: boolean;
};

const Slider = ({ children, hightlight = false }: sliderProps) => {
  const ref = useRef<any>(null);
  const container = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    const wrapper = container.current;
    const slider = ref.current;
    const slideWidth = wrapper.clientWidth;
    const position = index * slideWidth;
    slider?.scrollTo({
      left: position,
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#slider_")) {
      const indice = parseInt(hash.split("_")[1]);
      if (container.current && ref.current) { // Check if refs are not null
        goTo(indice - 1);
      }
    }
  }, [container, ref]);

  const chevronStyles = cn({
    [sliderStyles.chevrons]: true,
    [sliderStyles.chevronHighlight]: hightlight,
  });

  return (
    <div className={sliderStyles.container} ref={container}>
      <div className={sliderStyles.slider} ref={ref}>
        <div className={sliderStyles.sliderContainer}>{children}</div>
      </div>
      {(children as ReactNode[]).length > 1 && (
        <ul className={chevronStyles} style={{ left: 0 }}>
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <li
                  onClick={() => {
                    goTo(index);
                  }}
                  key={`go_to_${index}`}
                  className={currentIndex == index ? sliderStyles.selected : ""}
                >
                  {`0${index + 1}`}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

Slider.displayName = "Slider";
export default Slider;
