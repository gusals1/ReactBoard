import { useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleState = () => {
    setIsToggle((prev) => !prev);
  };
  return [isToggle, toggleState];
};
