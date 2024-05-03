import { useState } from "react";

export const useSearch = () => {
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (keyword: string): void => {
    setKeyword(keyword);
  };
  return { keyword, onChangeKeyword };
};
