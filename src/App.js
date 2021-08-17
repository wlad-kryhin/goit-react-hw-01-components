import user from './JSON/user.json';
import statics from './JSON/statistical.json';
import transactionHistory from './JSON/transaction.json';
import FriendsList from './JSON/friends.json';

import './App.css';

import Statistical from './components/Statistical/Statistical';
import Friends from './components/Friends/Friends';
import Transaction from './components/Transaction/Transaction';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical title="Upload stats" stats={statics} />
      <Statistical stats={statics} />
      <Friends items={FriendsList} />
      <Transaction items={transactionHistory} />
    </div>
  );
}
export default App;
