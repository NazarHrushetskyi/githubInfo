import React from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../App';

import UserBlock from '../../components/UserBlock/index';

import styles from './home.module.scss';
import bt_stl from './button.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../redux/actions/user';

const Home = () => {
  const dispatch = useDispatch();
  const { searchValue } = React.useContext(SearchContext);
  const dataUser = useSelector((state) => state.usersReduser);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(fetchUsers(searchValue, currentPage));
  }, [searchValue, currentPage]);

  if (!dataUser) {
    return 'data loading...';
  }
  return (
    <div className={styles.cont}>
      <div className={styles.pageContainer}>
        {dataUser.arrUser.map((obj) => (
          <Link key={obj.id} to={`/user/${obj.login}`}>
            <UserBlock data={obj} />
          </Link>
        ))}
      </div>

      <button class={bt_stl.glow} onClick={() => setCurrentPage(dataUser.page + 1)}>
        SHOW MORE
      </button>
      {dataUser.page > 1 ? (
        <button class={bt_stl.glow} onClick={() => setCurrentPage(dataUser.page - 1)}>
          SHOW LESS
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
