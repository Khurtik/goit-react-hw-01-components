import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline ? styles.statusOnline : styles.statusOffline}>
      {isOnline}
    </span>
    <img className={styles.avatar} src={avatar} alt="" width="80" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
