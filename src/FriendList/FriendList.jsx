import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(item => (
      <FriendListItem
        isOnline={item.isOnline}
        avatar={item.avatar}
        name={item.name}
        key={item.id}
      />
    ))}
  </ul>
);

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.statusOnline : styles.statusOffline}>
      {isOnline}
    </span>
    <img className={styles.avatar} src={avatar} alt="" width="80" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
