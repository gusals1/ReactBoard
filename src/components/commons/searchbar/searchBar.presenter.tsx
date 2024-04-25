import { SearchBox } from "./searchBar.styles";
import type { ISearchBarUIProps } from "./searchBar.types";

export default function SearchBarUI(props: ISearchBarUIProps): JSX.Element {
  return (
    <SearchBox
      type="search"
      placeholder="제목을 검색해주세요"
      onChange={props.onChangeSearch}
    />
  );
}
