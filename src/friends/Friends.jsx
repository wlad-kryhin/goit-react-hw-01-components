import PropTypes from 'prop-types';
import FriendItem from './friendItem';
import FriendsList from '../friends.json';
export default function Friends(){
    return(
        <ul class="friend-list">
  {FriendsList.map(friend =>{
      <FriendItem id={friend.id} author={friend.name} avatar={friend.avatar} />
  })}
</ul>
    )
}
Friends.propTypes= {
    friend: PropTypes.array.isRequired
}