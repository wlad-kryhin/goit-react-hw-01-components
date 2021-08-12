import user from './user.json';
import statics from './statistical.json';
import Profile from './ProfileComponent/Profile';
import './App.css';
import Statistical from './Statistical/Statistical';

function App() {
  return (
  <div><Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistical title="Upload stats" stats={statics} />
<Statistical stats={statics} /></div>
  );
}
export default App;
