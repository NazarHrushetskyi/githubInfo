import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import InfoSearch from './InfoSearch';
import Sort from '../../components/Sort';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import styles from './Info.module.scss';
import { ReactComponent as Star } from '../../assets/img/star.svg';

import { getRepos } from '../../redux/actions/repos';
import { fetchUsers } from '../../redux/actions/data';

const Info = () => {
  const dispatch = useDispatch();

  const [text, setText] = React.useState('');

  const userData = useSelector((state) => state.dataReduser);
  const reposData = useSelector((state) => state.reposReduser);

  const [repos, setRepos] = React.useState();

  const [sortType, setSortType] = React.useState({
    name: 'alphabet -+',
    sortProperty: 'name',
  });

  const { id } = useParams();
  const sortBy = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

  React.useEffect(() => {
    dispatch(fetchUsers(id));
  }, []);

  React.useEffect(() => {
    dispatch(getRepos(id, sortBy, order));
  }, []);
  React.useEffect(() => {
    setRepos(reposData);
  }, [reposData]);

  const sortLetter = () => {
    const sorted = repos.sort((a, b) => {
      return a.name - b.name;
    });
    setRepos(sorted);
  };

  const sortLetterReverse = () => {
    const sorted = repos
      .sort((a, b) => {
        return a.name - b.name;
      })
      .reverse();
    setRepos(sorted);
  };

  const sortStar = () => {
    const sorted = repos.sort((a, b) => {
      return +a.stargazers_count - +b.stargazers_count;
    });
    setRepos(sorted);
  };

  const sortStarReverse = () => {
    const sorted = repos
      .sort((a, b) => {
        return +a.stargazers_count - +b.stargazers_count;
      })
      .reverse();
    setRepos(sorted);
  };

  React.useEffect(() => {
    if (repos) {
      const arr = reposData.reduce((acum, item) => {
        return item.name.includes(text) ? [...acum, item] : acum;
      }, []);
      setRepos(arr);
    }
  }, [text]);

  if (!userData || !repos) {
    return 'Загрузка...';
  }

  if (!userData.location) {
    userData.location = 'No information';
  }
  if (!userData.name) {
    userData.name = 'No name';
  }

  return (
    <div className={styles.info_container}>
      <Link key={userData.id} to={`/user/${userData.login}`}></Link>
      <div className={styles.left_container}>
        <img className={styles.avt_img} src={userData.avatar_url} alt="avt_img" />
        <div className={styles.info_block}>
          <p>User name:</p>
          <h2 className={styles.h2}>{userData.name}</h2>
          <p>Location:</p>
          <h3 className={styles.h3}>{userData.location}</h3>
          <p>Join date:</p>
          <h3 className={styles.h3}>
            <Moment format="M/D/YY">{userData.created_at}</Moment>
          </h3>
          <p>Followers:</p>
          <h3 className={styles.h3}>{userData.followers} followers</h3>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.blatnyi}>
          <Sort
            value={sortType}
            onChangeSort={(i) => {
              setSortType(i);
              switch (i.type) {
                case 'sortLetter':
                  sortLetter();
                  break;
                case 'sortLetterReverse':
                  sortLetterReverse();
                  break;
                case 'sortStar':
                  sortStar();
                  break;
                case 'sortStarReverse':
                  sortStarReverse();
                  break;
                default:
                  sortLetter();
                  break;
              }
            }}
          />
          <InfoSearch value={text} onChange={setText} />
        </div>

        <div className={styles.rep_block}>
          {reposData.map((item) => (
            <div className={styles.rep_info}>
              <div className={styles.info1}>
                <div className={styles.rep_name}> {item.name} </div>
                <div className={styles.rep_fork}> {item.forks} forks</div>
              </div>
              <div className={styles.rep_star}>
                <Star className={styles.star} />
                {item.stargazers_count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
