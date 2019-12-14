import React from 'react';

import user from './user.json';

import statisticalData from './statistical-data.json';

import friends from './friends.json';

import transactions from './transactions.json';

import Profile from './Profile/Profile';

import Statistics from './Statistics/Statistics';

import FriendList from './FriendList/FriendList';

import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile user={user} />

    <Statistics title="Upload Stats" stats={statisticalData} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </>
);

export default App;
