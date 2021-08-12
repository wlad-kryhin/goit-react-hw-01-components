import user from './user.json';
import statics from './statistical.json';
import Profile from './ProfileComponent/Profile';
import FriendsList from './friends.json';
import './App.css';
import Statistical from './Statistical/Statistical';
import Friends from './friends/Friends';
import transactionHistory from './transaction.json';
import Transaction from './transaction/Transaction';

function App() {
  return (
    <div style={{
      padding: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'

    }
  }><Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistical title="Upload stats" stats={statics} />
<Statistical stats={statics} />
<Friends items={FriendsList}/>
<Transaction items={transactionHistory}/>
</div>
  );
}
export default App;
