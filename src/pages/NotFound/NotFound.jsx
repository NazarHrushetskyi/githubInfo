import React from 'react';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
        <h1>
            <span>:(</span>
            <br />
            ERROR 404
        </h1>
        <p className={styles.description}>На жаль, ця сторінка не існує</p>
    </div>
  )
};

export default NotFound;