import React from 'react';

import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(item => (
        <li key={item.id} className={styles.item}>
          <span className={styles.label}>{item.label}</span>

          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,

      label: PropTypes.string,

      percentage: PropTypes.number,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Statistics;
