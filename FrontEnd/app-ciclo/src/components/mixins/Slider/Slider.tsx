import { ReactNode, useRef, useEffect, useState, Children } from "react";
import sliderStyles from "./slider.module.scss";

type sliderProps = {
  children: ReactNode;
};

const Slider = ({ children }: sliderProps) => {
  const ref = useRef<any>(null);
  const container = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  const childrenLength = Children.count(children);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    const wrapper = container.current;
    const slider = ref.current;
    const slideWidth = wrapper.clientWidth;
    const position = index * slideWidth;
    slider?.scrollTo({
      top: 0,
      left: position,
      behavior: "smooth",
    });
  };

  const check_location_hash = () => {
    if (hash.startsWith("#slider_")) {
      const indice = parseInt(hash.split("_")[1]);
      if (container.current && ref.current) {
        goTo(indice - 1);
      }
    }
  };
  useEffect(() => {
    check_location_hash();
  }, [container, ref]);

  useEffect(() => {
    check_location_hash();
  }, [hash]);

  return (
    <div className={sliderStyles.container} ref={container}>
      <div className={sliderStyles.slider} ref={ref}>
        <div className={sliderStyles.sliderContainer}>{children}</div>
      </div>
      {childrenLength > 1 && (
        <ul className={sliderStyles.chevrons} style={{ left: 0 }}>
          {Array(childrenLength)
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
