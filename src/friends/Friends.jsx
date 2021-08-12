import PropTypes from 'prop-types';
import FriendItem from './friendItem';  
export default function Friends({items}){
    return(
        <ul class="friend-list">
  {items.map(friend => <FriendItem id={friend.id} author={friend.name} avatar={friend.avatar} isOnline={friend.isOnline}/>
  )}
</ul>
    )
}
Friends.propTypes= {
    friend: PropTypes.array.isRequired
}