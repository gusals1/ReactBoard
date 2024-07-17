import { useState } from "react";

/** state를 하나 만들고 toggleState라는 함수로 현재 상태를 반전시켜줌
 *  state와 함수를 return해준다.
 *  ★★★ 배열로 return하기 때문에 이름은 상관없이 선언 가능함 ★★★
 */
export const useToggle = (): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleState = () => {
    setIsToggle((prev) => !prev);
  };
  return [isToggle, toggleState];
};
