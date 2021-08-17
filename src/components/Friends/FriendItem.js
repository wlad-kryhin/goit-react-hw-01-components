import PropTypes from 'prop-types';
import styles from './friends.module.css';
export default function FriendItem({ items }) {
  return items.map(({ id, avatar, name, isOnline }) => (
    <li className={styles.card} key={id}>
      {isOnline ? (
        <span className={styles.status}>{isOnline}</span>
      ) : (
        <span className={styles.statusNo}>{isOnline}</span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  ));
}

FriendItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  author: PropTypes.string,
};
