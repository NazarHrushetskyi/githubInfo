import React from 'react';
import { clsx } from 'clsx';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

import styles from './search.module.scss';
import { ReactComponent as SearchLogo } from '../../assets/img/search1.svg';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [focus, setFocus] = React.useState(false);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <label className={clsx(styles.root, (focus || searchValue.length) && styles.root_active)}>
      <input
        onBlur={() => setFocus(false)}
        autoFocus={focus}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search..."
      />
      <SearchLogo className={styles.icon} onClick={() => setFocus(true)} />
    </label>
  );
};

export default Search;
