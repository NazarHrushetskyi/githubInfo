import React from 'react';
import styles from './userBlock.module.scss';

function UserBlock({ data }) {
  return (
    <div className={styles.user_block}>
      <img className={styles.image} src={data.avatar_url} alt="User" />
      <div className={styles.user_info}>
        <h3 className={styles.name}>{data.login}</h3>
        <h4 className={styles.id}>User id: {data.id}</h4>
        <button className={styles.getGit}>Get github</button>
      </div>
    </div>
  );
}

export default UserBlock;
