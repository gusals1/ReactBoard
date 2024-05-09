import type { ChangeEvent } from "react";
import { SearchBox } from "./searchBar.styles";

interface Iprops {
  onChangeSearchBar: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar(qqq: Iprops): JSX.Element {
  return (
    <SearchBox
      type="search"
      placeholder="제목을 검색해주세요"
      onChange={qqq.onChangeSearchBar}
    />
  );
}
