import PropTypes from 'prop-types';
import FriendItem from './friendItem';
import styles from './friends.module.css' 
export default function Friends({items}){
    return(
        <ul className={styles.card__list}>
  {items.map(friend => <FriendItem id={friend.id} author={friend.name} avatar={friend.avatar} isOnline={friend.isOnline}/>
  )}
</ul>
    )
}
Friends.propTypes= {
    friend: PropTypes.array.isRequired
}