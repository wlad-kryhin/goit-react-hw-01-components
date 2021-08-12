import PropTypes from 'prop-types';
import styles from './friends.module.css'
export default function FriendItem({ id, avatar, author, isOnline }) {
    return (
        <li className={styles.card} key={id}>
            {isOnline ? <span className={styles.status}>{isOnline}</span> : <span className={styles.statusNo}>{isOnline}</span>}
            <img className={styles.avatar} src={avatar} alt={author} width="48" />
  <p class="name">{author}</p>
</li>
    )
}

FriendItem.propTypes ={
    id: PropTypes.number,
    avatar: PropTypes.string,
    author: PropTypes.string
}