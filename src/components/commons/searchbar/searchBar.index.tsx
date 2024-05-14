import type { ChangeEvent } from "react";
import { SearchBox } from "./searchBar.styles";

interface Iprops {
  text: string;
  onChangeSearchBar: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar(props: Iprops): JSX.Element {
  return (
    <SearchBox
      type="search"
      placeholder={`${props.text}을 검색해주세요`}
      onChange={props.onChangeSearchBar}
    />
  );
}
