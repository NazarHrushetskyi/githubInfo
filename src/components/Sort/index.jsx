import React from 'react';

import styles from './Sort.module.scss';
import { ReactComponent as SortLogo } from '../../assets/img/sort.svg';

function Sort({ value, onChangeSort }) {
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: 'alphabet -+', sortProperty: 'name', type: 'sortLetter' },
    { name: 'alphabet +-', sortProperty: '-name', type: 'sortLetterReverse' },
    { name: 'popular -+', sortProperty: 'stargazers_count', type: 'sortStar' },
    { name: 'popular +-', sortProperty: '-stargazers_count', type: 'sortStarReverse' },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sort_label}>
        <b>Sort by:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
        <SortLogo />
      </div>
      {open && (
        <div className={styles.sort_popup}>
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
