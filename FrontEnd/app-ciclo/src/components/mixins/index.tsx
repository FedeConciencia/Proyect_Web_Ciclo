import dynamic from "next/dynamic";

export const MaxContainer = dynamic(
  () => import("./MaxContainer/MaxContainer")
);
export const Link = dynamic(() => import("./Link/Link"));
export const Text = dynamic(() => import("./Text/Text"));
export const Button = dynamic(() => import("./Button/Button"));
export const Slider = dynamic(() => import("./Slider/Slider"));
export const Input = dynamic(() => import("./Input/Input"));
