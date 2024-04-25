import type { ChangeEvent } from "react";
import SearchBarUI from "./searchBar.presenter";
import type { ISearchBarProps } from "./searchBar.types";
import _ from "lodash";

export default function SearchBar(props: ISearchBarProps): JSX.Element {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({
      page: 1,
      search: value,
    });
    void props.refetchBoardCount({ search: value });
    props.onAccentKeyword(value);
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(e.currentTarget.value);
  };

  return <SearchBarUI onChangeSearch={onChangeSearch} />;
}
